import { expect, test } from "@playwright/test";

test.describe("DescriptionList template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/description-list");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "DescriptionList" }),
    ).toBeVisible();
  });

  test("shows User Profile section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "User Profile" }),
    ).toBeVisible();
  });

  test("displays description terms and values", async ({ page }) => {
    await expect(page.getByText("Full name")).toBeVisible();
    await expect(page.getByText("Margot Foster")).toBeVisible();
    await expect(page.getByText("Email address")).toBeVisible();
    await expect(page.getByText("margotfoster@example.com")).toBeVisible();
  });
});
