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
    await expect(page.getByText("Dashboard").first()).toBeVisible();
    await expect(page.getByText("Orders").first()).toBeVisible();
    await expect(page.getByText("Settings").first()).toBeVisible();
  });

  test("shows main content", async ({ page }) => {
    await expect(
      page.getByText("This is the stacked layout with a top navbar."),
    ).toBeVisible();
  });
});
