import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Blue: Story = {
  args: { color: "blue" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const WithColor: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(
        [
          "dark/zinc",
          "red",
          "orange",
          "amber",
          "green",
          "teal",
          "sky",
          "blue",
          "indigo",
          "violet",
          "purple",
          "pink",
          "rose",
        ] as const
      ).map((color) => (
        <Switch key={color} color={color} defaultChecked />
      ))}
    </div>
  ),
};
