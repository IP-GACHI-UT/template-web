import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    outline: true,
    children: "Outline",
  },
};

export const Plain: Story = {
  args: {
    plain: true,
    children: "Plain",
  },
};

export const Indigo: Story = {
  args: {
    color: "indigo",
    children: "Indigo",
  },
};

export const Red: Story = {
  args: {
    color: "red",
    children: "Red",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "無効なボタン",
  },
};

export const AsLink: Story = {
  args: {
    href: "#",
    children: "リンクボタン",
  },
};

export const Colors: StoryObj = {
  render: () => {
    const colors = [
      "dark/zinc",
      "light",
      "dark/white",
      "dark",
      "white",
      "zinc",
      "indigo",
      "cyan",
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "sky",
      "blue",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
    ] as const;
    return (
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <Button key={color} color={color}>
            {color}
          </Button>
        ))}
      </div>
    );
  },
};

export const OutlineVariants: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button outline>デフォルト</Button>
      <Button outline disabled>
        無効
      </Button>
      <Button outline href="#">
        リンク
      </Button>
    </div>
  ),
};

export const PlainVariants: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button plain>デフォルト</Button>
      <Button plain disabled>
        無効
      </Button>
      <Button plain href="#">
        リンク
      </Button>
    </div>
  ),
};
