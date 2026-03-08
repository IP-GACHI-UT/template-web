#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# template-web セットアップスクリプト
# Node.js / pnpm の確認・インストールから依存関係の導入まで
# ============================================================

REQUIRED_NODE_MAJOR=22
REQUIRED_PNPM_MAJOR=10

# --- 色付き出力 ---
info()  { printf "\033[1;34m[INFO]\033[0m  %s\n" "$*"; }
ok()    { printf "\033[1;32m[OK]\033[0m    %s\n" "$*"; }
warn()  { printf "\033[1;33m[WARN]\033[0m  %s\n" "$*"; }
error() { printf "\033[1;31m[ERROR]\033[0m %s\n" "$*"; }

# --- OS 判定 ---
detect_os() {
  case "$(uname -s)" in
    Linux*)  echo "linux" ;;
    Darwin*) echo "mac" ;;
    MINGW*|MSYS*|CYGWIN*) echo "windows" ;;
    *)       echo "unknown" ;;
  esac
}

# --- WSL 判定 ---
is_wsl() {
  [ -f /proc/version ] && grep -qi microsoft /proc/version 2>/dev/null
}

OS=$(detect_os)

# WSL 環境では必要なパッケージを確認・インストール
if [ "$OS" = "linux" ] && is_wsl; then
  info "WSL 環境を検出しました"
  missing_deps=()
  command -v curl &>/dev/null || missing_deps+=("curl")
  command -v unzip &>/dev/null || missing_deps+=("unzip")
  if [ ${#missing_deps[@]} -gt 0 ]; then
    info "不足パッケージをインストールします: ${missing_deps[*]}"
    if command -v apt-get &>/dev/null; then
      sudo apt-get update -qq && sudo apt-get install -y -qq "${missing_deps[@]}"
    else
      error "パッケージマネージャーが見つかりません。手動でインストールしてください: ${missing_deps[*]}"
      exit 1
    fi
  fi
fi

# === 1. Node.js チェック ===
info "Node.js を確認しています..."

install_node() {
  info "Node.js $REQUIRED_NODE_MAJOR をインストールします..."

  # fnm がある場合
  if command -v fnm &>/dev/null; then
    info "fnm を使用して Node.js をインストールします"
    fnm install "$REQUIRED_NODE_MAJOR"
    fnm use "$REQUIRED_NODE_MAJOR"
    return
  fi

  # nvm がある場合
  if command -v nvm &>/dev/null || [ -s "$HOME/.nvm/nvm.sh" ]; then
    [ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh"
    info "nvm を使用して Node.js をインストールします"
    nvm install "$REQUIRED_NODE_MAJOR"
    nvm use "$REQUIRED_NODE_MAJOR"
    return
  fi

  # どちらもない場合は fnm をインストール
  info "バージョンマネージャーが見つかりません。fnm をインストールします..."
  if [ "$OS" = "windows" ]; then
    if command -v winget &>/dev/null; then
      winget install Schniz.fnm --accept-source-agreements --accept-package-agreements
    else
      error "winget が見つかりません。https://github.com/Schniz/fnm#installation から fnm を手動でインストールしてください"
      exit 1
    fi
  else
    curl -fsSL https://fnm.vercel.app/install | bash
  fi

  # fnm を現在のシェルで有効化
  export PATH="$HOME/.local/share/fnm:$HOME/.fnm:$PATH"
  if command -v fnm &>/dev/null; then
    eval "$(fnm env)"
    fnm install "$REQUIRED_NODE_MAJOR"
    fnm use "$REQUIRED_NODE_MAJOR"
  else
    warn "fnm のインストール後、シェルを再起動してからこのスクリプトを再実行してください"
    exit 1
  fi
}

if command -v node &>/dev/null; then
  NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
  if [ "$NODE_VERSION" -ge "$REQUIRED_NODE_MAJOR" ]; then
    ok "Node.js v$(node -v | sed 's/v//') (>= $REQUIRED_NODE_MAJOR)"
  else
    warn "Node.js v$(node -v | sed 's/v//') が見つかりましたが、v$REQUIRED_NODE_MAJOR 以上が必要です"
    install_node
  fi
else
  warn "Node.js が見つかりません"
  install_node
fi

# === 2. pnpm チェック ===
info "pnpm を確認しています..."

if command -v pnpm &>/dev/null; then
  PNPM_VERSION=$(pnpm -v | cut -d. -f1)
  if [ "$PNPM_VERSION" -ge "$REQUIRED_PNPM_MAJOR" ]; then
    ok "pnpm v$(pnpm -v) (>= $REQUIRED_PNPM_MAJOR)"
  else
    warn "pnpm v$(pnpm -v) が見つかりましたが、v$REQUIRED_PNPM_MAJOR 以上が必要です"
    info "pnpm を更新します..."
    npm install -g pnpm@latest
  fi
else
  info "pnpm をインストールします..."
  if command -v corepack &>/dev/null; then
    corepack enable
    corepack prepare pnpm@latest --activate
  else
    npm install -g pnpm@latest
  fi
fi

ok "pnpm v$(pnpm -v)"

# === 3. 依存関係のインストール ===
info "依存関係をインストールしています..."
pnpm install
ok "依存関係のインストール完了"

# === 4. Playwright ブラウザ (E2E テスト用、オプション) ===
if [ -t 0 ]; then
  # 対話モード: ユーザーに確認
  read -r -p "$(printf "\033[1;34m[INFO]\033[0m  Playwright ブラウザをインストールしますか？(E2E テスト用) [y/N]: ")" INSTALL_PW
else
  # 非対話モード (パイプ/IDE ターミナル等): スキップ
  INSTALL_PW="N"
fi
if [[ "$INSTALL_PW" =~ ^[Yy]$ ]]; then
  pnpm exec playwright install chromium
  ok "Playwright Chromium インストール完了"
else
  info "スキップしました (後から pnpm exec playwright install chromium で実行できます)"
fi

# === 完了 ===
echo ""
echo "============================================================"
ok "セットアップ完了！"
echo ""
info "開発サーバー:  pnpm dev          → http://localhost:3000"
info "Storybook:     pnpm storybook    → http://localhost:6006"
info "テスト:        pnpm test"
info "ビルド:        pnpm build"
echo "============================================================"
