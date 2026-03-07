import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Red: Story = {
  args: {
    color: "red",
    children: "Badge",
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
    children: "Badge",
  },
};

export const Green: Story = {
  args: {
    color: "green",
    children: "Badge",
  },
};

export const Colors: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(
        [
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
        ] as const
      ).map((color) => (
        <Badge key={color} color={color}>
          {color}
        </Badge>
      ))}
    </div>
  ),
};

export const CustomColor: Story = {
  args: {
    color: "purple",
    children: "Custom Badge",
  },
};
