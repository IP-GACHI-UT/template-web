import { expect, test } from "@playwright/test";

test.describe("Switch template page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/template/switch");
  });

  test("displays page title", async ({ page }) => {
    await expect(
      page.getByRole("heading", { level: 1, name: "Switch" }),
    ).toBeVisible();
  });

  test("basic switch toggles on click", async ({ page }) => {
    const switchEl = page.getByRole("switch", { name: "Enable notifications" });
    await expect(switchEl).not.toBeChecked();
    await switchEl.click();
    await expect(switchEl).toBeChecked();
  });

  test("group switches have correct default states", async ({ page }) => {
    const emailSwitch = page.getByRole("switch", { name: "Email" });
    const smsSwitch = page.getByRole("switch", { name: "SMS" });
    const pushSwitch = page.getByRole("switch", { name: "Push" });
    await expect(emailSwitch).toBeChecked();
    await expect(smsSwitch).not.toBeChecked();
    await expect(pushSwitch).toBeChecked();
  });
});
