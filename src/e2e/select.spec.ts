import { expect, test } from "@playwright/test";

test.describe("Select template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/select");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Select" }),
    ).toBeVisible();
  });

  test("has 4 select elements", async ({ page }) => {
    const selects = page.locator("select");
    await expect(selects).toHaveCount(4);
  });

  test("disabled select is disabled", async ({ page }) => {
    const disabledSelect = page.locator("select[disabled]");
    await expect(disabledSelect).toBeDisabled();
  });
});
