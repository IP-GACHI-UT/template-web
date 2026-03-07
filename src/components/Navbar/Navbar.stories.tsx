import type { Meta, StoryObj } from "@storybook/react";
import {
  Navbar,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "./Navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Navbar>
      <NavbarSection>
        <NavbarItem href="#">
          <NavbarLabel>Home</NavbarLabel>
        </NavbarItem>
        <NavbarItem href="#">
          <NavbarLabel>About</NavbarLabel>
        </NavbarItem>
      </NavbarSection>
      <NavbarSpacer />
    </Navbar>
  ),
};
