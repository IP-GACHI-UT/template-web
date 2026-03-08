import type { Meta, StoryObj } from "@storybook/react";
import { Code, Strong, Text, TextLink } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "これはテキストの段落です。" },
};

export const WithStrong: Story = {
  render: () => (
    <Text>
      この文には<Strong>強調されたテキスト</Strong>が含まれています。
    </Text>
  ),
};

export const WithCode: Story = {
  render: () => (
    <Text>
      <Code>console.log()</Code> 関数を使用してください。
    </Text>
  ),
};

export const WithTextLink: Story = {
  render: () => (
    <Text>
      詳細は<TextLink href="#">こちらのリンク</TextLink>をご覧ください。
    </Text>
  ),
};

export const Combined: Story = {
  render: () => (
    <Text>
      <Strong>重要:</Strong> <Code>npm install</Code> を実行した後、
      <TextLink href="#">ドキュメント</TextLink>
      を参照してください。
    </Text>
  ),
};
