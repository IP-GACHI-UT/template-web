import { expect, test } from "@playwright/test";

test.describe("Dropdown template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/dropdown");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Dropdown" }),
    ).toBeVisible();
  });

  test("opens basic dropdown and shows menu items", async ({ page }) => {
    await page.getByRole("button", { name: "Options" }).click();
    await expect(
      page.getByRole("menuitem", { name: "Edit" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "Duplicate" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "Archive" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("menuitem", { name: "Delete" }).first(),
    ).toBeVisible();
  });

  test("shows With Sections dropdown", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "With Sections" }),
    ).toBeVisible();
    await page.getByRole("button", { name: "More actions" }).click();
    await expect(page.getByRole("menuitem", { name: "Move" })).toBeVisible();
  });

  test("shows With Description & Shortcut dropdown", async ({ page }) => {
    await page
      .getByRole("button", { name: "Actions", exact: true })
      .first()
      .click();
    await expect(
      page.getByRole("menuitem", { name: "Edit" }).first(),
    ).toBeVisible();
    await expect(page.getByText("Modify this item")).toBeVisible();
  });
});
