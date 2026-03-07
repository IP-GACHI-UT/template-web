import { expect, test } from "@playwright/test";

test.describe("Input template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/input");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Input" }),
    ).toBeVisible();
  });

  test("shows Input Types section with various inputs", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Input Types" }),
    ).toBeVisible();
    await expect(page.getByPlaceholder("Enter text...")).toBeVisible();
    await expect(page.getByPlaceholder("you@example.com")).toBeVisible();
    await expect(page.getByPlaceholder("Enter password")).toBeVisible();
  });

  test("disabled input is disabled", async ({ page }) => {
    await expect(page.getByPlaceholder("Disabled input")).toBeDisabled();
  });

  test("shows With Icon section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "With Icon" }),
    ).toBeVisible();
    await expect(page.getByPlaceholder("Search...")).toBeVisible();
    await expect(page.getByPlaceholder("0.00")).toBeVisible();
  });
});
