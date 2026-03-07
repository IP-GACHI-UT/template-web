import type { Meta, StoryObj } from "@storybook/react";
import { Code, Strong, Text } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "This is a paragraph of text." },
};

export const WithStrong: Story = {
  render: () => (
    <Text>
      This has <Strong>strong text</Strong> in it.
    </Text>
  ),
};

export const WithCode: Story = {
  render: () => (
    <Text>
      Use the <Code>console.log()</Code> function.
    </Text>
  ),
};
