import { expect, test } from "@playwright/test";

test.describe("Alert template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/alert");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Alert" }),
    ).toBeVisible();
  });

  test("opens and closes basic alert dialog", async ({ page }) => {
    await page.getByRole("button", { name: "Open Alert" }).click();
    await expect(page.getByText("Are you sure?")).toBeVisible();
    await expect(page.getByText("This action cannot be undone.")).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
    await expect(page.getByText("Are you sure?")).not.toBeVisible();
  });

  test("opens small size alert", async ({ page }) => {
    await page.getByRole("button", { name: "Small (sm)" }).click();
    await expect(page.getByText("Confirm action")).toBeVisible();
    await page.getByRole("button", { name: "No" }).click();
  });

  test("opens large size alert", async ({ page }) => {
    await page.getByRole("button", { name: "Large (lg)" }).click();
    await expect(page.getByText("Delete account")).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });
});
