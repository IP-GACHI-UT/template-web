import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { href: "#", children: "Click me" },
};

export const WithClassName: Story = {
  args: {
    href: "#",
    children: "カスタムスタイルのリンク",
    className: "text-blue-600 underline hover:text-blue-800",
  },
};
