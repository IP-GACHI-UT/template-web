import type { Meta, StoryObj } from "@storybook/react";
import { Description, Label } from "../Fieldset";
import { Checkbox, CheckboxField, CheckboxGroup } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
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
        <Checkbox key={color} color={color} defaultChecked />
      ))}
    </div>
  ),
};

export const WithLabel: StoryObj = {
  render: () => (
    <CheckboxGroup>
      <CheckboxField>
        <Checkbox defaultChecked />
        <Label>Accept terms and conditions</Label>
      </CheckboxField>
      <CheckboxField>
        <Checkbox />
        <Label>Subscribe to newsletter</Label>
        <Description>Receive updates about new features.</Description>
      </CheckboxField>
    </CheckboxGroup>
  ),
};
