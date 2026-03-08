# template-web

Next.js 16 + React 19 ベースの UI コンポーネントテンプレートライブラリ。
[Headless UI](https://headlessui.com/) と [Tailwind CSS v4](https://tailwindcss.com/) を基盤に、27 種のコンポーネントをショーケースとして収録しています。

## クイックスタート

### 前提条件

- **Node.js** >= 22
- **pnpm** >= 10

### 1. Node.js のインストール

Node.js がインストールされていない、またはバージョンが古い場合は [fnm](https://github.com/Schniz/fnm) (推奨) か [nvm](https://github.com/nvm-sh/nvm) でインストールしてください。

```bash
# Node.js がインストールされているか確認
node -v

# バージョンが 22 未満、または未インストールの場合:

# --- fnm の場合 ---
# インストール (Windows)
winget install Schniz.fnm
# インストール (macOS / Linux)
curl -fsSL https://fnm.vercel.app/install | bash

# Node.js 22 をインストールして使用
fnm install 22
fnm use 22

# --- nvm の場合 ---
nvm install 22
nvm use 22
```

### 2. pnpm のインストール

```bash
# pnpm がインストールされているか確認
pnpm -v

# 未インストールの場合 (Node.js 16.17 以降で利用可能):
corepack enable
corepack prepare pnpm@latest --activate

# または npm 経由:
npm install -g pnpm
```

### 3. プロジェクトのセットアップ

```bash
# リポジトリをクローン
git clone <repository-url>
cd template-web

# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev
```

[http://localhost:3000](http://localhost:3000) でコンポーネント一覧、
[http://localhost:3000/template/button](http://localhost:3000/template/button) で各コンポーネントのショーケースを確認できます。

### Storybook

```bash
pnpm storybook
```

[http://localhost:6006](http://localhost:6006) で Storybook が起動します。

### テスト

```bash
# ユニットテスト
pnpm test

# E2E テスト (Chromium)
pnpm test:e2e
```

### リント・フォーマット

```bash
# チェックのみ
pnpm lint

# 自動修正
pnpm lint:fix

# フォーマット
pnpm format
```

### ビルド

```bash
pnpm build
```

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 16 (App Router) |
| UI ライブラリ | React 19, Headless UI, clsx, Motion |
| スタイリング | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| 言語 | TypeScript 5 (strict mode) |
| リンター / フォーマッター | Biome v2 |
| ユニットテスト | Jest 30 + Testing Library |
| E2E テスト | Playwright 1.58 (Chromium) |
| Storybook | v10 (`@storybook/nextjs`) |
| パッケージマネージャー | pnpm |

## アーキテクチャ

### ディレクトリ構成

```
src/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # ルートレイアウト (フォント設定)
│   ├── page.tsx                      # ホーム (コンポーネント一覧ページ)
│   ├── globals.css                   # グローバル CSS + Tailwind テーマ
│   └── template/                     # コンポーネントショーケース
│       ├── layout.tsx                # サイドバー付きレイアウト (Server Component)
│       ├── _components/              # ショーケース共通パーツ
│       │   ├── DemoSection.tsx       # デモ表示枠
│       │   ├── TemplatePageHeader.tsx # ページヘッダー
│       │   └── TemplateSidebar.tsx   # ナビゲーションサイドバー
│       └── [component]/page.tsx      # 各コンポーネントのデモページ
├── components/                       # 再利用可能 UI コンポーネント (27 種)
│   └── [Name]/
│       ├── [Name].tsx                # コンポーネント本体
│       ├── [Name].stories.tsx        # Storybook ストーリー
│       ├── [Name].test.tsx           # Jest テスト
│       └── index.ts                  # barrel export
└── e2e/                              # Playwright E2E テスト

public/
└── avatars/                          # ローカル SVG アバター
```

### コンポーネント一覧

| カテゴリ | コンポーネント |
|---------|--------------|
| フォーム | Button, Checkbox, Combobox, Fieldset, Input, Listbox, Radio, Select, Switch, Textarea |
| データ表示 | Avatar, Badge, DescriptionList, Heading, Table, Text |
| フィードバック | Alert, Dialog, Dropdown |
| ナビゲーション | Link, Navbar, Pagination, Sidebar |
| レイアウト | AuthLayout, Divider, SidebarLayout, StackedLayout |

### Server / Client Component 設計

```
Server Component                    Client Component ("use client")
─────────────────                   ────────────────────────────────
app/template/layout.tsx             app/template/_components/TemplateSidebar.tsx
  └─ レイアウト永続化                  └─ usePathname でカレント表示
     (ナビゲーションで再実行されない)

                                    components/ 内の Headless UI ラッパー (19 ファイル)
                                      └─ @headlessui/react が React hooks に依存
```

- **`app/template/layout.tsx`** は Server Component として動作し、ページ遷移時にサイドバーのスクロール位置を維持
- **`components/Link/Link.tsx`** は `next/link` を使用し、クライアントサイドナビゲーション (SPA) を実現
- Headless UI を使う全コンポーネントに `"use client"` を付与し、ハイドレーションエラーを防止

### スタイリング設計

```css
/* globals.css */
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-geist-sans), var(--font-noto-sans-jp), sans-serif;
  --font-mono: var(--font-geist-mono), monospace;
}
```

- **フォント**: Geist (Latin) + Noto Sans JP (日本語) のデュアルフォント構成。`next/font/google` で最適化ロード
- **ダークモード**: `prefers-color-scheme: dark` による CSS 変数切り替え
- **スクロールバー**: `scrollbar-width: thin` + テーマ対応カラー

## プロジェクト設計

### コンポーネント設計方針

各コンポーネントは以下のパターンに従います:

- **`forwardRef`** で DOM 参照を外部に転送
- **`clsx`** で条件付きクラス名を構成
- **Headless UI** でアクセシブルなインタラクションを実装
- **Compound component** パターンで柔軟な組み合わせを実現 (例: `Dialog` + `DialogTitle` + `DialogBody`)
- **Named export** のみ使用 (`default export` はページコンポーネントのみ)

### コーディング規約

| ルール | 設定 |
|-------|------|
| クォート | Double quotes (`"`) |
| セミコロン | 常に付与 |
| インデント | 2 スペース |
| 改行コード | LF |
| import | 型のみの場合は `import type` を使用 |
| UI テキスト | 日本語 (ラベル・説明文) |
| コード | 英語 (コンポーネント名・変数名) |

### テスト戦略

```
ユニットテスト (Jest + Testing Library)
  └─ アクセシビリティベースのクエリ (screen.getByRole)
  └─ コンポーネント単体の振る舞い検証

E2E テスト (Playwright)
  └─ /template/[component] ページの統合テスト
  └─ Chromium のみ

Storybook
  └─ 各バリアント (Default, Outline, 色違い等) を Story として定義
  └─ ビジュアルリグレッション確認
```

### 新しいコンポーネントの追加

1. `src/components/[Name]/` ディレクトリを作成
2. 以下の 4 ファイルを用意:

```
[Name]/
├── [Name].tsx            # コンポーネント実装
├── [Name].stories.tsx    # Storybook ストーリー
├── [Name].test.tsx       # ユニットテスト
└── index.ts              # barrel export
```

3. `src/app/template/[name]/page.tsx` にショーケースページを作成
4. `src/app/template/_components/TemplateSidebar.tsx` のカテゴリ配列にナビゲーション項目を追加

## ライセンス

Private
