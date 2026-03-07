import type { Meta, StoryObj } from "@storybook/react";
import { AuthLayout } from "./AuthLayout";

const meta = {
  title: "Components/AuthLayout",
  component: AuthLayout,
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="w-full max-w-sm">
        <h1>Login</h1>
      </div>
    ),
  },
};
