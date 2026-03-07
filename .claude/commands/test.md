テストを実行してください。

## 実行するテスト

引数が指定されている場合: `$ARGUMENTS`

### 引数なしの場合

1. `pnpm test` で Jest ユニットテストを実行
2. 結果を確認し、失敗したテストがあれば原因を分析

### "e2e" が指定された場合

1. `pnpm test:e2e` で Playwright E2E テストを実行
2. 失敗したテストがあれば `playwright-report/` を確認

### "all" が指定された場合

1. `pnpm test` (Jest)
2. `pnpm test:e2e` (Playwright)

### 特定コンポーネント名が指定された場合

1. `pnpm test -- --testPathPattern=[コンポーネント名]` でユニットテスト
2. 必要に応じて `pnpm test:e2e -- [コンポーネント名]` でE2Eテスト

## テスト失敗時

- エラーメッセージを分析
- 該当するソースコードを読んで原因を特定
- 修正を提案または実行
