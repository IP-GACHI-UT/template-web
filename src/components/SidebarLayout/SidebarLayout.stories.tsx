import type { Meta, StoryObj } from "@storybook/react";
import { SidebarLayout } from "./SidebarLayout";

const meta = {
  title: "Components/SidebarLayout",
  component: SidebarLayout,
} satisfies Meta<typeof SidebarLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navbar: <nav>Navbar</nav>,
    sidebar: <aside>Sidebar</aside>,
    children: <div>Main content</div>,
  },
};
