Storybook 関連のタスクを実行してください。

引数: `$ARGUMENTS`

## "build" の場合

1. `pnpm storybook:build` で Storybook をビルド
2. エラーがあれば修正

## "check" の場合

1. すべてのコンポーネントに `.stories.tsx` があるか確認
2. 不足しているストーリーファイルを報告

## コンポーネント名が指定された場合

指定コンポーネントの Story ファイルを確認・改善:
- 全バリアントが Story として網羅されているか
- args が適切に設定されているか
- Meta の title が `Components/[Name]` 形式か
