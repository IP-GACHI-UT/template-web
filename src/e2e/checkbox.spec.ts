import { expect, test } from "@playwright/test";

test.describe("Checkbox template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/checkbox");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Checkbox" }),
    ).toBeVisible();
  });

  test("basic checkbox toggles on click", async ({ page }) => {
    const checkbox = page.getByRole("checkbox", {
      name: "Accept terms and conditions",
    });
    await expect(checkbox).not.toBeChecked();
    await checkbox.click();
    await expect(checkbox).toBeChecked();
  });

  test("shows group with default checked state", async ({ page }) => {
    const emailCheckbox = page.getByRole("checkbox", {
      name: "Email notifications",
    });
    const smsCheckbox = page.getByRole("checkbox", {
      name: "SMS notifications",
    });
    await expect(emailCheckbox).toBeVisible();
    await expect(emailCheckbox).toBeChecked();
    await expect(smsCheckbox).not.toBeChecked();
  });

  test("shows Colors section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Colors" }),
    ).toBeVisible();
  });
});
