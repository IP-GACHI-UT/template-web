import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Soft: Story = {
  args: {
    soft: true,
  },
};

export const InList: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <div className="py-3">
        <p className="text-sm font-medium text-zinc-950 dark:text-white">
          General Settings
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Manage your account preferences
        </p>
      </div>
      <Divider soft />
      <div className="py-3">
        <p className="text-sm font-medium text-zinc-950 dark:text-white">
          Notifications
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Configure email and push notifications
        </p>
      </div>
      <Divider soft />
      <div className="py-3">
        <p className="text-sm font-medium text-zinc-950 dark:text-white">
          Security
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Update password and two-factor authentication
        </p>
      </div>
    </div>
  ),
};
