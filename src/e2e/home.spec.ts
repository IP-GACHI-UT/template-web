import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("displays title", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "コンポーネント テンプレート",
      }),
    ).toBeVisible();
  });

  test("shows 5 category sections", async ({ page }) => {
    for (const category of [
      "フォーム",
      "データ表示",
      "フィードバック",
      "ナビゲーション",
      "レイアウト",
    ]) {
      await expect(
        page.getByRole("heading", { level: 2, name: category }),
      ).toBeVisible();
    }
  });

  test("has 27 component links", async ({ page }) => {
    const links = page.getByRole("link").filter({ hasText: "パターンを見る" });
    await expect(links).toHaveCount(27);
  });

  test("Button link navigates to /template/button", async ({ page }) => {
    await page.getByRole("link", { name: "Button" }).click();
    await expect(page).toHaveURL(/\/template\/button/);
  });

  test("Table link navigates to /template/table", async ({ page }) => {
    await page.getByRole("link", { name: "Table" }).click();
    await expect(page).toHaveURL(/\/template\/table/);
  });
});
