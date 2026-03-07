import { expect, test } from "@playwright/test";

test.describe("Listbox template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/listbox");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Listbox" }),
    ).toBeVisible();
  });

  test("shows initial selected value", async ({ page }) => {
    await expect(page.getByText("Active").first()).toBeVisible();
  });

  test("shows placeholder listbox", async ({ page }) => {
    await expect(page.getByText("Choose an option...")).toBeVisible();
  });

  test("shows Disabled section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Disabled" }),
    ).toBeVisible();
  });
});
