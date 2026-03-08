import { expect, test } from "@playwright/test";

test.describe("StackedLayout template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/stacked-layout");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "StackedLayout" }),
    ).toBeVisible();
  });

  test("shows embedded navbar items", async ({ page }) => {
    await expect(page.getByText("ダッシュボード").first()).toBeVisible();
    await expect(page.getByText("注文").first()).toBeVisible();
    await expect(page.getByText("商品").first()).toBeVisible();
  });

  test("shows main content", async ({ page }) => {
    await expect(
      page.getByText("売上の概要と最近の注文状況を確認できます。"),
    ).toBeVisible();
  });
});
