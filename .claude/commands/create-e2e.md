コンポーネント `$ARGUMENTS` の E2E テストを作成してください。

## 手順

### 1. テンプレートページ確認

`src/app/template/` で該当コンポーネントのデモページを確認。
slug はケバブケース (例: SidebarLayout → sidebar-layout)。

### 2. E2E テスト作成

`src/e2e/[slug].spec.ts` を作成:

```ts
import { expect, test } from "@playwright/test";

test.describe("$ARGUMENTS template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/[slug]");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1 }),
    ).toContainText("$ARGUMENTS");
  });

  test("displays demo sections", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2 }).first(),
    ).toBeVisible();
  });

  // コンポーネント固有のテストを追加
});
```

### 3. テスト実行

`pnpm test:e2e -- [slug]` で確認。

### 4. 既存テストとの整合性

`src/e2e/all-pages.spec.ts` に該当コンポーネントが含まれていることを確認。
