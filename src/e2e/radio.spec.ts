import { expect, test } from "@playwright/test";

test.describe("Radio template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/radio");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Radio" }),
    ).toBeVisible();
  });

  test("shows radio group with plan options", async ({ page }) => {
    await expect(page.getByRole("radio", { name: "Startup" })).toBeVisible();
    await expect(page.getByRole("radio", { name: "Business" })).toBeVisible();
    await expect(page.getByRole("radio", { name: "Enterprise" })).toBeVisible();
  });

  test("Startup is selected by default", async ({ page }) => {
    await expect(page.getByRole("radio", { name: "Startup" })).toBeChecked();
  });

  test("can switch radio selection", async ({ page }) => {
    // Wait for hydration by confirming the default selection is active
    await expect(page.getByRole("radio", { name: "Startup" })).toBeChecked();
    const businessRadio = page.getByRole("radio", { name: "Business" });
    await businessRadio.click();
    await expect(businessRadio).toBeChecked();
    await expect(
      page.getByRole("radio", { name: "Startup" }),
    ).not.toBeChecked();
  });
});
