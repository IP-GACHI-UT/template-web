import { expect, test } from "@playwright/test";

test.describe("Badge template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/badge");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Badge" }),
    ).toBeVisible();
  });

  test("shows All Colors section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 2, name: "All Colors" }),
    ).toBeVisible();
  });

  test("displays all 18 color badges", async ({ page }) => {
    const colors = [
      "zinc",
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
    ];
    for (const color of colors) {
      await expect(
        page.getByText(color, { exact: true }).first(),
      ).toBeVisible();
    }
  });
});
