import { expect, test } from "@playwright/test";

test.describe("Combobox template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/combobox");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Combobox" }),
    ).toBeVisible();
  });

  test("shows initial selected value", async ({ page }) => {
    const combobox = page.getByRole("combobox").first();
    await expect(combobox).toHaveValue("Tom Cook");
  });

  test("shows With Description section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "With Description" }),
    ).toBeVisible();
  });

  test("shows Disabled section with disabled combobox", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Disabled" }),
    ).toBeVisible();
    const disabledCombobox = page.getByRole("combobox").nth(2);
    await expect(disabledCombobox).toBeDisabled();
  });
});
