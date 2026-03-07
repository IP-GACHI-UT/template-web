import { expect, test } from "@playwright/test";

test.describe("Sidebar template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/sidebar");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Sidebar" }),
    ).toBeVisible();
  });

  test("shows sidebar items", async ({ page }) => {
    // Inside the demo sidebar (not the template sidebar)
    await expect(page.getByText("Acme Inc").first()).toBeVisible();
    await expect(page.getByText("Orders").first()).toBeVisible();
    await expect(page.getByText("Products")).toBeVisible();
  });

  test("shows section headings", async ({ page }) => {
    await expect(page.getByText("Main").first()).toBeVisible();
    await expect(page.getByText("Settings").first()).toBeVisible();
  });

  test("Dashboard item has current state", async ({ page }) => {
    const currentItems = page.locator("[data-current=true]");
    await expect(currentItems.first()).toBeVisible();
  });
});
