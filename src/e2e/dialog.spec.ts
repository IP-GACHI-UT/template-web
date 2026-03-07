import { expect, test } from "@playwright/test";

test.describe("Dialog template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/dialog");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Dialog" }),
    ).toBeVisible();
  });

  test("opens and closes basic dialog", async ({ page }) => {
    await page.getByRole("button", { name: "Open Dialog" }).click();
    await expect(page.getByText("Payment successful")).toBeVisible();
    await page.getByRole("button", { name: "OK" }).click();
    await expect(page.getByText("Payment successful")).not.toBeVisible();
  });

  test("opens form dialog with input", async ({ page }) => {
    await page.getByRole("button", { name: "Edit Profile" }).click();
    await expect(
      page.getByText("Update your account details below."),
    ).toBeVisible();
    await expect(page.getByPlaceholder("Your name")).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test("shows Sizes section with sm, lg, 2xl buttons", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Sizes" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Small (sm)" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Large (lg)" }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "2XL (2xl)" })).toBeVisible();
  });
});
