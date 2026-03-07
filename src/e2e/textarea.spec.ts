import { expect, test } from "@playwright/test";

test.describe("Textarea template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/textarea");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Textarea" }),
    ).toBeVisible();
  });

  test("has 4 textareas", async ({ page }) => {
    const textareas = page.getByRole("textbox");
    await expect(textareas).toHaveCount(4);
  });

  test("shows placeholder text", async ({ page }) => {
    await expect(page.getByPlaceholder("Write your comment...")).toBeVisible();
  });

  test("disabled textarea is disabled", async ({ page }) => {
    await expect(
      page.getByPlaceholder("This textarea is disabled."),
    ).toBeDisabled();
  });
});
