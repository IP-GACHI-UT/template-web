import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Field, Label } from "../Fieldset";
import { Heading } from "../Heading";
import { Input } from "../Input";
import { Text, TextLink } from "../Text";
import { AuthLayout } from "./AuthLayout";

const meta = {
  title: "Components/AuthLayout",
  component: AuthLayout,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "520px",
          overflow: "hidden",
          borderRadius: "8px",
          border: "1px solid #e4e4e7",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "min-h-full",
    children: (
      <div className="w-full max-w-sm">
        <div className="text-center">
          <div className="mx-auto flex size-10 items-center justify-center rounded-lg bg-zinc-950 dark:bg-white">
            <span className="text-sm font-bold text-white dark:text-zinc-950">
              A
            </span>
          </div>
          <Heading className="mt-4">Sign in</Heading>
          <Text className="mt-1">
            Don&apos;t have an account? <TextLink href="#">Sign up</TextLink>
          </Text>
        </div>
        <div className="mt-8 space-y-6">
          <Field>
            <Label>Email</Label>
            <Input type="email" placeholder="you@example.com" />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input type="password" />
          </Field>
          <Button className="w-full">Sign in</Button>
        </div>
      </div>
    ),
  },
};
