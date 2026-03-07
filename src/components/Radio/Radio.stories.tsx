import type { Meta, StoryObj } from "@storybook/react";
import { Description, Label } from "../Fieldset";
import { Radio, RadioField, RadioGroup } from "./Radio";

const meta = {
  title: "Components/Radio",
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
export const Default: StoryObj = {
  render: () => (
    <RadioGroup value="a" onChange={() => {}}>
      <RadioField>
        <Radio value="a" />
        <Label>Option A</Label>
      </RadioField>
      <RadioField>
        <Radio value="b" />
        <Label>Option B</Label>
      </RadioField>
    </RadioGroup>
  ),
};

export const WithDefaultValue: StoryObj = {
  render: () => (
    <RadioGroup defaultValue="b">
      <RadioField>
        <Radio value="a" />
        <Label>Option A</Label>
      </RadioField>
      <RadioField>
        <Radio value="b" />
        <Label>Option B</Label>
      </RadioField>
      <RadioField>
        <Radio value="c" />
        <Label>Option C</Label>
      </RadioField>
    </RadioGroup>
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <RadioGroup defaultValue="a" disabled>
      <RadioField>
        <Radio value="a" />
        <Label>Option A</Label>
      </RadioField>
      <RadioField>
        <Radio value="b" />
        <Label>Option B</Label>
      </RadioField>
    </RadioGroup>
  ),
};

export const WithColor: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {(
        [
          "dark/zinc",
          "red",
          "orange",
          "amber",
          "green",
          "blue",
          "indigo",
          "violet",
          "purple",
          "pink",
          "rose",
        ] as const
      ).map((color) => (
        <RadioGroup key={color} defaultValue="a">
          <RadioField>
            <Radio value="a" color={color} />
            <Label>{color}</Label>
          </RadioField>
        </RadioGroup>
      ))}
    </div>
  ),
};

export const WithDescription: StoryObj = {
  render: () => (
    <RadioGroup defaultValue="startup">
      <RadioField>
        <Radio value="startup" />
        <Label>Startup</Label>
        <Description>Best for small teams getting started.</Description>
      </RadioField>
      <RadioField>
        <Radio value="business" />
        <Label>Business</Label>
        <Description>For growing teams that need more features.</Description>
      </RadioField>
    </RadioGroup>
  ),
};
