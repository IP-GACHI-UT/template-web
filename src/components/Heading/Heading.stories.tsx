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

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>見出しレベル 1</Heading>
      <Heading level={2}>見出しレベル 2</Heading>
      <Heading level={3}>見出しレベル 3</Heading>
      <Heading level={4}>見出しレベル 4</Heading>
      <Heading level={5}>見出しレベル 5</Heading>
      <Heading level={6}>見出しレベル 6</Heading>
    </div>
  ),
};

export const SubheadingLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Subheading level={1}>サブ見出しレベル 1</Subheading>
      <Subheading level={2}>サブ見出しレベル 2</Subheading>
      <Subheading level={3}>サブ見出しレベル 3</Subheading>
      <Subheading level={4}>サブ見出しレベル 4</Subheading>
      <Subheading level={5}>サブ見出しレベル 5</Subheading>
      <Subheading level={6}>サブ見出しレベル 6</Subheading>
    </div>
  ),
};
