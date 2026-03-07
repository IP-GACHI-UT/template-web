import { expect, test } from "@playwright/test";

test.describe("Fieldset template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/fieldset");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Fieldset" }),
    ).toBeVisible();
  });

  test("shows legend text", async ({ page }) => {
    const legend = page.locator("[data-slot='legend']");
    await expect(legend).toBeVisible();
    await expect(legend).toContainText("Shipping details");
  });

  test("has 4 form fields", async ({ page }) => {
    await expect(page.getByText("Full name").first()).toBeVisible();
    await expect(page.getByText("Street address")).toBeVisible();
    await expect(page.getByText("Country").first()).toBeVisible();
    await expect(page.getByText("Delivery notes")).toBeVisible();
  });
});
