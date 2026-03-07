"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/components/Link";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/Sidebar";

const categories = [
  {
    name: "フォーム",
    items: [
      { name: "Button", href: "/template/button" },
      { name: "Checkbox", href: "/template/checkbox" },
      { name: "Combobox", href: "/template/combobox" },
      { name: "Fieldset", href: "/template/fieldset" },
      { name: "Input", href: "/template/input" },
      { name: "Listbox", href: "/template/listbox" },
      { name: "Radio", href: "/template/radio" },
      { name: "Select", href: "/template/select" },
      { name: "Switch", href: "/template/switch" },
      { name: "Textarea", href: "/template/textarea" },
    ],
  },
  {
    name: "データ表示",
    items: [
      { name: "Avatar", href: "/template/avatar" },
      { name: "Badge", href: "/template/badge" },
      { name: "DescriptionList", href: "/template/description-list" },
      { name: "Heading", href: "/template/heading" },
      { name: "Table", href: "/template/table" },
      { name: "Text", href: "/template/text" },
    ],
  },
  {
    name: "フィードバック",
    items: [
      { name: "Alert", href: "/template/alert" },
      { name: "Dialog", href: "/template/dialog" },
      { name: "Dropdown", href: "/template/dropdown" },
    ],
  },
  {
    name: "ナビゲーション",
    items: [
      { name: "Link", href: "/template/link" },
      { name: "Navbar", href: "/template/navbar" },
      { name: "Pagination", href: "/template/pagination" },
      { name: "Sidebar", href: "/template/sidebar" },
    ],
  },
  {
    name: "レイアウト",
    items: [
      { name: "AuthLayout", href: "/template/auth-layout" },
      { name: "Divider", href: "/template/divider" },
      { name: "SidebarLayout", href: "/template/sidebar-layout" },
      { name: "StackedLayout", href: "/template/stacked-layout" },
    ],
  },
];

export function TemplateSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          href="/"
          className="text-base font-semibold text-zinc-950 dark:text-white"
        >
          コンポーネント テンプレート
        </Link>
      </SidebarHeader>
      <SidebarBody>
        {categories.map((category) => (
          <SidebarSection key={category.name}>
            <SidebarHeading>{category.name}</SidebarHeading>
            {category.items.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href}
                current={pathname === item.href}
              >
                <SidebarLabel>{item.name}</SidebarLabel>
              </SidebarItem>
            ))}
          </SidebarSection>
        ))}
      </SidebarBody>
    </Sidebar>
  );
}
