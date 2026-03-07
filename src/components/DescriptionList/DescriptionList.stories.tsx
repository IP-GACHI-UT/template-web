import type { Meta, StoryObj } from "@storybook/react";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "./DescriptionList";

const meta = {
  title: "Components/DescriptionList",
  component: DescriptionList,
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionTerm>Name</DescriptionTerm>
      <DescriptionDetails>John Doe</DescriptionDetails>
      <DescriptionTerm>Email</DescriptionTerm>
      <DescriptionDetails>john@example.com</DescriptionDetails>
    </DescriptionList>
  ),
};
