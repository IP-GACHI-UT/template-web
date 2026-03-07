コンポーネント `$ARGUMENTS` のテンプレートショーケースページを作成してください。

## 手順

### 1. ページ作成

`src/app/template/[slug]/page.tsx` を参考に、`$ARGUMENTS` 用のテンプレートページを作成。
slug はケバブケースに変換 (例: SidebarLayout → sidebar-layout)。

ページには以下を含める:
- `TemplatePageHeader` でコンポーネント名と説明
- `DemoSection` で各バリアントのデモ
- コンポーネントの主要なバリエーションをすべて網羅

### 2. サイドバー更新

`src/app/template/_components/TemplateSidebar.tsx` の `categories` 配列に、適切なカテゴリへエントリを追加。

### 3. E2E テスト作成

`src/e2e/[slug].spec.ts` を作成:

```ts
import { expect, test } from "@playwright/test";

test.describe("$ARGUMENTS template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/[slug]");
  });

  test("displays component", async ({ page }) => {
    // コンポーネントの表示を検証
  });
});
```

### 4. 動作確認

- `pnpm build` でビルドエラーがないことを確認
