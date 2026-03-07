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
    src: "https://placehold.co/100",
  },
};

export const Square: Story = {
  args: {
    square: true,
    initials: "SQ",
  },
};
