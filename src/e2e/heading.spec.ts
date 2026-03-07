import { expect, test } from "@playwright/test";

test.describe("Heading template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/heading");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Heading", exact: true }),
    ).toBeVisible();
  });

  test("shows heading levels section with h1/h2/h3", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Heading Level 1", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Heading Level 2", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Heading Level 3", exact: true }),
    ).toBeVisible();
  });

  test("shows subheading levels", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Subheading Level 2", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Subheading Level 3", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Subheading Level 4", exact: true }),
    ).toBeVisible();
  });
});
