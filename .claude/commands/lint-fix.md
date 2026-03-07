コードの品質チェックと修正を実行してください。

## 手順

1. `pnpm lint` で Biome チェックを実行
2. エラーがあれば `pnpm lint:fix` で自動修正
3. 自動修正できない問題があれば手動で修正
4. `pnpm format` でフォーマット統一
5. 最終確認: `pnpm lint` でクリーンになったことを確認

## Biome ルール (主要)

- Double quotes, semicolons 必須
- `import type` を型のみのインポートに使用
- 未使用インポートは削除
- React hooks の依存配列を正確に
