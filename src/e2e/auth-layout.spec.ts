import { expect, test } from "@playwright/test";

test.describe("AuthLayout template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/auth-layout");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "AuthLayout" }),
    ).toBeVisible();
  });

  test("shows Sign in heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
  });

  test("has Email and Password fields", async ({ page }) => {
    await expect(page.getByText("Email")).toBeVisible();
    await expect(page.getByText("Password")).toBeVisible();
    await expect(page.getByPlaceholder("you@example.com")).toBeVisible();
  });

  test("has Sign in button", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Sign in" })).toBeVisible();
  });
});
