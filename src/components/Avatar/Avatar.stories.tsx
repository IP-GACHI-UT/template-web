import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initials: "AB",
  },
};

export const WithImage: Story = {
  args: {
    src: "/avatars/1.svg",
  },
};

export const Square: Story = {
  args: {
    square: true,
    initials: "SQ",
  },
};

export const SquareWithImage: Story = {
  args: {
    square: true,
    src: "/avatars/1.svg",
    alt: "ユーザーアバター",
  },
};

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar className="size-6" initials="XS" />
      <Avatar className="size-8" initials="SM" />
      <Avatar className="size-10" initials="MD" />
      <Avatar className="size-12" initials="LG" />
      <Avatar className="size-16" initials="XL" />
    </div>
  ),
};

export const WithAlt: Story = {
  args: {
    src: "/avatars/1.svg",
    alt: "田中太郎のプロフィール画像",
  },
};
