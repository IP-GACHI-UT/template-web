import type { Meta, StoryObj } from "@storybook/react";
import {
  Navbar,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "../Navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "../Sidebar";
import { StackedLayout } from "./StackedLayout";

const meta = {
  title: "Components/StackedLayout",
  component: StackedLayout,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "480px",
          overflow: "hidden",
          borderRadius: "8px",
          border: "1px solid #e4e4e7",
          transform: "scale(1)",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StackedLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navbar: (
      <Navbar>
        <NavbarSection>
          <NavbarItem href="#" current>
            <NavbarLabel>Dashboard</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <NavbarLabel>Orders</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <NavbarLabel>Settings</NavbarLabel>
          </NavbarItem>
        </NavbarSection>
        <NavbarSpacer />
      </Navbar>
    ),
    sidebar: (
      <Sidebar>
        <SidebarBody>
          <SidebarSection>
            <SidebarItem href="#" current>
              <SidebarLabel>Dashboard</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="#">
              <SidebarLabel>Orders</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="#">
              <SidebarLabel>Settings</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
        </SidebarBody>
      </Sidebar>
    ),
    children: (
      <div>
        <h1 className="text-2xl font-semibold text-zinc-950 dark:text-white">
          Dashboard
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Main content area of the stacked layout.
        </p>
      </div>
    ),
  },
};
