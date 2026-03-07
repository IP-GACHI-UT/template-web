import { expect, test } from "@playwright/test";

const templatePages = [
  { path: "/template/alert", title: "Alert" },
  { path: "/template/auth-layout", title: "AuthLayout" },
  { path: "/template/avatar", title: "Avatar" },
  { path: "/template/badge", title: "Badge" },
  { path: "/template/button", title: "Button" },
  { path: "/template/checkbox", title: "Checkbox" },
  { path: "/template/combobox", title: "Combobox" },
  { path: "/template/description-list", title: "DescriptionList" },
  { path: "/template/dialog", title: "Dialog" },
  { path: "/template/divider", title: "Divider" },
  { path: "/template/dropdown", title: "Dropdown" },
  { path: "/template/fieldset", title: "Fieldset" },
  { path: "/template/heading", title: "Heading" },
  { path: "/template/input", title: "Input" },
  { path: "/template/link", title: "Link" },
  { path: "/template/listbox", title: "Listbox" },
  { path: "/template/navbar", title: "Navbar" },
  { path: "/template/pagination", title: "Pagination" },
  { path: "/template/radio", title: "Radio" },
  { path: "/template/select", title: "Select" },
  { path: "/template/sidebar", title: "Sidebar" },
  { path: "/template/sidebar-layout", title: "SidebarLayout" },
  { path: "/template/stacked-layout", title: "StackedLayout" },
  { path: "/template/switch", title: "Switch" },
  { path: "/template/table", title: "Table" },
  { path: "/template/text", title: "Text" },
  { path: "/template/textarea", title: "Textarea" },
];

for (const { path, title } of templatePages) {
  test.describe(`${title} page (${path})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(path);
    });

    test("displays page title", async ({ page }) => {
      await expect(
        page.getByRole("heading", { level: 1, name: title, exact: true }),
      ).toBeVisible();
    });

    test("has at least one demo section", async ({ page }) => {
      const h2 = page.getByRole("heading", { level: 2 });
      await expect(h2.first()).toBeVisible();
    });

    test("shows sidebar navigation at desktop viewport", async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await expect(page.locator("nav").getByText("フォーム")).toBeVisible();
    });
  });
}
