import { expect, test } from "@playwright/test";

test.describe("Button template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/button");
  });

  test("displays buttons", async ({ page }) => {
    const buttons = page.getByRole("button");
    await expect(buttons.first()).toBeVisible();
  });

  test("solid color button is visible", async ({ page }) => {
    const button = page.getByRole("button", { name: "indigo" });
    await expect(button).toBeVisible();
  });

  test("disabled button has disabled attribute", async ({ page }) => {
    const button = page.getByRole("button", { name: "Disabled Solid" });
    await expect(button).toBeDisabled();
  });
});
