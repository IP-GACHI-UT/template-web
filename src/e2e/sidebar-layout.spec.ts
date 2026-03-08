import { expect, test } from "@playwright/test";

test.describe("SidebarLayout template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/sidebar-layout");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "SidebarLayout" }),
    ).toBeVisible();
  });

  test("shows embedded sidebar items", async ({ page }) => {
    await expect(page.getByText("ダッシュボード").first()).toBeVisible();
    await expect(page.getByText("受信トレイ").first()).toBeVisible();
    await expect(page.getByText("レポート").first()).toBeVisible();
  });

  test("shows main content area", async ({ page }) => {
    await expect(
      page.getByText("プロジェクトの進捗状況とチームの活動を確認できます。"),
    ).toBeVisible();
  });
});
