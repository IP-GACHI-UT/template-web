import { expect, test } from "@playwright/test";

test.describe("Divider template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/divider");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Divider" }),
    ).toBeVisible();
  });

  test("shows Default section with content above and below", async ({
    page,
  }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Default" }),
    ).toBeVisible();
    await expect(page.getByText("プロフィール").first()).toBeVisible();
    await expect(page.getByText("通知設定").first()).toBeVisible();
  });

  test("shows Soft section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Soft" }),
    ).toBeVisible();
  });
});
