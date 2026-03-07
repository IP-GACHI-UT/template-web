import type { Meta, StoryObj } from "@storybook/react";
import { StackedLayout } from "./StackedLayout";

const meta = {
  title: "Components/StackedLayout",
  component: StackedLayout,
} satisfies Meta<typeof StackedLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navbar: <nav>Navbar</nav>,
    sidebar: <aside>Sidebar</aside>,
    children: <div>Main content</div>,
  },
};
