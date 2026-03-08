import { expect, test } from "@playwright/test";

test.describe("Link template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/link");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Link" }),
    ).toBeVisible();
  });

  test("shows TextLink section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "TextLink" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Styled text link" }),
    ).toBeVisible();
  });

  test("shows inline links in paragraph", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "In Paragraph" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "inline link" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "another page" }),
    ).toBeVisible();
  });
});
