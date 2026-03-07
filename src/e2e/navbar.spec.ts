import { expect, test } from "@playwright/test";

test.describe("Navbar template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/navbar");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Navbar" }),
    ).toBeVisible();
  });

  test("shows Basic navbar with items", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Basic" }),
    ).toBeVisible();
    await expect(page.getByText("Dashboard").first()).toBeVisible();
    await expect(page.getByText("Orders").first()).toBeVisible();
    await expect(page.getByText("Settings").first()).toBeVisible();
  });

  test("Dashboard item has current state", async ({ page }) => {
    const currentItem = page.locator("[data-current=true]").first();
    await expect(currentItem).toBeVisible();
  });

  test("shows With Divider section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "With Divider" }),
    ).toBeVisible();
    await expect(page.getByText("Home").first()).toBeVisible();
    await expect(page.getByText("About").first()).toBeVisible();
    await expect(page.getByText("Contact").first()).toBeVisible();
  });
});
