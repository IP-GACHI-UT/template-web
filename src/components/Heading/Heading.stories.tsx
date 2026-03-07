import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Subheading } from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Heading",
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    children: "Level 2 Heading",
  },
};

export const Sub: Story = {
  render: () => <Subheading>Subheading</Subheading>,
};
