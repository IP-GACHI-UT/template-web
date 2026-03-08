# template-web

Next.js 16 + React 19 のUIコンポーネントテンプレートライブラリ。27種のコンポーネントを収録。

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **UI**: React 19.2.3, @headlessui/react, clsx, motion
- **Styling**: Tailwind CSS v4 (@tailwindcss/postcss)
- **Language**: TypeScript 5 (strict mode)
- **Linter/Formatter**: Biome v2 (double quotes, semicolons, 2-space indent, LF)
- **Testing**: Jest 30 + Testing Library (unit), Playwright 1.58 (E2E)
- **Storybook**: v10 (@storybook/nextjs)
- **Package Manager**: pnpm

## Commands

```bash
pnpm dev            # 開発サーバー (localhost:3000)
pnpm build          # プロダクションビルド
pnpm lint           # Biome lint チェック
pnpm lint:fix       # Biome lint 自動修正
pnpm format         # Biome フォーマット
pnpm test           # Jest ユニットテスト
pnpm test:watch     # Jest ウォッチモード
pnpm test:e2e       # Playwright E2E テスト
pnpm storybook      # Storybook (localhost:6006)
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                # ルートレイアウト (Geist, Noto Sans JP)
│   ├── page.tsx                  # ホーム (コンポーネント一覧)
│   ├── globals.css               # グローバルCSS + Tailwind テーマ + スクロールバー
│   └── template/                 # コンポーネントショーケース
│       ├── layout.tsx            # Server Component サイドバーレイアウト
│       ├── _components/          # DemoSection, TemplatePageHeader, TemplateSidebar
│       └── [component]/page.tsx  # 各コンポーネントのデモページ
├── components/                   # 再利用可能UIコンポーネント (27種)
│   └── [Name]/
│       ├── [Name].tsx            # コンポーネント本体
│       ├── [Name].stories.tsx    # Storybook ストーリー
│       ├── [Name].test.tsx       # Jest テスト
│       └── index.ts              # barrel export
├── e2e/                          # Playwright E2E テスト
public/
└── avatars/                      # ローカル SVG アバター (1.svg ~ 4.svg)
```

## Coding Conventions

### Component Pattern

- `forwardRef` でDOM参照を転送
- `clsx` で条件付きクラス名を構成
- Headless UI でインタラクティブコンポーネントを実装
- Compound component パターン (Dialog/DialogTitle など)
- Named export のみ (default export は不使用、ページ除く)
- アクセシビリティ重視 (ARIA, セマンティックHTML)

### Client/Server Component 境界

- `@headlessui/react` を使用する全コンポーネントに `"use client"` が必要
- `src/components/Link/Link.tsx` は `next/link` (NextLink) を使用 — クライアントサイドナビゲーション維持のため
- `src/app/template/layout.tsx` は Server Component — レイアウト永続化のため

### Import Alias

`@/*` → `./src/*`

### Biome Rules

- Double quotes, always semicolons
- `noUnusedImports`: warn
- `useImportType`: warn (型のみの import は `import type` を使用)
- `useExhaustiveDependencies`: warn

### Testing

- **Unit**: `@testing-library/react` + `screen.getByRole` でアクセシビリティベースのクエリ
- **E2E**: Playwright で `/template/[component]` ページをテスト、Chromium のみ
- **Stories**: 各バリアント (Default, Outline, 色違い等) を Story として定義

### UI Language

- ラベル・説明文は日本語
- コンポーネント名・コード・変数名は英語

### テンプレートページ作成時の注意

- レイアウトコンポーネント (SidebarLayout, StackedLayout) のデモでは `fixed` 要素がコンテナ外に出ないよう `style={{ transform: "scale(1)" }}` で containing block を作る
- AuthLayout のデモでは `className` prop で `min-h-dvh` をオーバーライドしてコンテナ内に収める
- 入力/選択系コンポーネントには disabled 状態や空状態のデモも含める

## Component Categories

| カテゴリ | コンポーネント |
|---------|--------------|
| フォーム | Button, Checkbox, Combobox, Fieldset, Input, Listbox, Radio, Select, Switch, Textarea |
| データ表示 | Avatar, Badge, DescriptionList, Heading, Table, Text |
| フィードバック | Alert, Dialog, Dropdown |
| ナビゲーション | Link, Navbar, Pagination, Sidebar |
| レイアウト | AuthLayout, Divider, SidebarLayout, StackedLayout |

## Global Styling

- **フォント**: `@theme inline` で `--font-sans` (Geist + Noto Sans JP) と `--font-mono` (Geist Mono) を定義
- **スクロールバー**: `scrollbar-width: thin` + テーマ対応カラー (`--scrollbar-thumb`)
- **カラーテーマ**: `:root` と `prefers-color-scheme: dark` で CSS 変数を切り替え
