import type { Meta, StoryObj } from "@storybook/react";
import Home from "./page";

const meta = {
  title: "Pages/Home",
  component: Home,
} satisfies Meta<typeof Home>;

export default meta;

export const Default: StoryObj = {};