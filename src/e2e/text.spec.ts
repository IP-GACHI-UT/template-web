import { expect, test } from "@playwright/test";

test.describe("Text template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/text");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Text" }),
    ).toBeVisible();
  });

  test("shows Paragraph section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "Paragraph" }),
    ).toBeVisible();
    await expect(page.getByText("Lorem ipsum dolor sit amet")).toBeVisible();
  });

  test("shows With Strong section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "With Strong" }),
    ).toBeVisible();
    await expect(
      page.locator("strong").getByText("strong emphasis"),
    ).toBeVisible();
  });

  test("shows With Code section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "With Code" }),
    ).toBeVisible();
    await expect(page.locator("code").getByText("npm install")).toBeVisible();
  });

  test("shows With Link section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "With Link" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "our documentation" }),
    ).toBeVisible();
  });
});
