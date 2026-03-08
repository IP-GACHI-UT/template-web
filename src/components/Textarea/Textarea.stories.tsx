import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NonResizable: Story = {
  args: { resizable: false },
};

export const WithPlaceholder: Story = {
  args: { placeholder: "ここにテキストを入力してください" },
};

export const Disabled: Story = {
  args: { disabled: true },
};
