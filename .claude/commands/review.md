コンポーネント `$ARGUMENTS` のコードレビューを実施してください。

## レビュー対象ファイル

`src/components/$ARGUMENTS/` 配下の全ファイルを確認:
- `$ARGUMENTS.tsx` (コンポーネント本体)
- `$ARGUMENTS.stories.tsx` (Storybook)
- `$ARGUMENTS.test.tsx` (テスト)
- `index.ts` (barrel export)

## レビュー項目

### 1. コード品質
- `forwardRef` パターンに準拠しているか
- `clsx` で条件付きクラスを構成しているか
- Named export のみか (default export 不使用)
- TypeScript の型定義が適切か
- Headless UI の使い方が正しいか

### 2. アクセシビリティ
- 適切な ARIA 属性が付与されているか
- セマンティック HTML を使用しているか
- キーボード操作に対応しているか
- フォーカス管理が適切か

### 3. テストカバレッジ
- `@testing-library/react` でアクセシビリティベースのクエリを使用しているか
- 主要なバリアントがテストされているか
- エッジケースが考慮されているか

### 4. Storybook
- 全バリアントが Story として定義されているか
- Meta が `satisfies Meta<typeof Component>` パターンか
- title が `Components/$ARGUMENTS` 形式か

### 5. スタイリング
- Tailwind CSS クラスが適切か
- レスポンシブデザインに対応しているか

## 出力

レビュー結果をまとめて報告。問題があれば修正を提案または実行。
