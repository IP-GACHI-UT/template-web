import { expect, test } from "@playwright/test";

test.describe("Avatar template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/avatar");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Avatar" }),
    ).toBeVisible();
  });

  test("shows With Initials section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "With Initials" }),
    ).toBeVisible();
  });

  test("shows Square section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Square" }),
    ).toBeVisible();
  });

  test("shows With Image section with img elements", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "With Image" }),
    ).toBeVisible();
    const images = page.locator("img");
    await expect(images.first()).toBeVisible();
  });
});
