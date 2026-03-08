import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputGroup } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
  },
};

export const Password: Story = {
  args: {
    type: "password",
  },
};

export const WithPlaceholder: Story = {
  render: () => <Input type="text" placeholder="Enter text..." />,
};

export const Disabled: Story = {
  args: {
    type: "text",
    disabled: true,
    placeholder: "入力できません",
  },
};

export const WithInputGroup: Story = {
  render: () => (
    <InputGroup>
      <svg
        data-slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
          clipRule="evenodd"
        />
      </svg>
      <Input type="search" placeholder="検索..." />
    </InputGroup>
  ),
};
