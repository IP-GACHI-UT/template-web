import { expect, test } from "@playwright/test";

test.describe("Pagination template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/pagination");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Pagination" }),
    ).toBeVisible();
  });

  test("shows Basic section with page numbers", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Basic" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Page 2" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Page 10" }).first(),
    ).toBeVisible();
  });

  test("has Previous and Next navigation", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: "Previous page" }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Next page" }).first(),
    ).toBeVisible();
  });

  test("first page section has disabled Previous", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "First Page (Previous Disabled)",
      }),
    ).toBeVisible();
    const disabledPrevious = page.getByRole("button", {
      name: "Previous page",
    });
    await expect(disabledPrevious).toBeDisabled();
  });
});
