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
    await expect(page.getByText("Dashboard").first()).toBeVisible();
    await expect(page.getByText("Orders").first()).toBeVisible();
    await expect(page.getByText("Products").first()).toBeVisible();
  });

  test("shows main content area", async ({ page }) => {
    await expect(
      page.getByText("This is the main content area of the sidebar layout."),
    ).toBeVisible();
  });
});
