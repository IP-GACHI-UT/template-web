import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input";
import { Description, Field, Fieldset, Label, Legend } from "./Fieldset";

const meta = {
  title: "Components/Fieldset",
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset>
      <Legend>Personal Information</Legend>
      <Field>
        <Label>Name</Label>
        <Description>Enter your full name</Description>
        <Input type="text" />
      </Field>
    </Fieldset>
  ),
};
