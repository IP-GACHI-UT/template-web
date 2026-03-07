import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    outline: true,
    children: "Outline",
  },
};

export const Plain: Story = {
  args: {
    plain: true,
    children: "Plain",
  },
};

export const Indigo: Story = {
  args: {
    color: "indigo",
    children: "Indigo",
  },
};

export const Red: Story = {
  args: {
    color: "red",
    children: "Red",
  },
};
