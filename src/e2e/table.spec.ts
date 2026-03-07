import { expect, test } from "@playwright/test";

test.describe("Table template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/table");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Table" }),
    ).toBeVisible();
  });

  test("shows table headers", async ({ page }) => {
    await expect(
      page.getByRole("columnheader", { name: "Name" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Title" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Email" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Role" }),
    ).toBeVisible();
  });

  test("shows row data", async ({ page }) => {
    await expect(
      page.getByRole("cell", { name: "Lindsay Walton" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("cell", { name: "lindsay@example.com" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("cell", { name: "Leonard Krasner" }).first(),
    ).toBeVisible();
  });

  test("shows role badges", async ({ page }) => {
    await expect(page.getByText("Member").first()).toBeVisible();
    await expect(page.getByText("Admin").first()).toBeVisible();
    await expect(page.getByText("Owner").first()).toBeVisible();
  });

  test("shows Striped section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Striped" }),
    ).toBeVisible();
  });
});
