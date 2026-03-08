import type { Meta, StoryObj } from "@storybook/react";
import { Navbar, NavbarItem, NavbarLabel, NavbarSection } from "../Navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "../Sidebar";
import { SidebarLayout } from "./SidebarLayout";

const meta = {
  title: "Components/SidebarLayout",
  component: SidebarLayout,
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
} satisfies Meta<typeof SidebarLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navbar: (
      <Navbar>
        <NavbarSection>
          <NavbarItem href="#">
            <NavbarLabel>App</NavbarLabel>
          </NavbarItem>
        </NavbarSection>
      </Navbar>
    ),
    sidebar: (
      <Sidebar>
        <SidebarHeader>
          <SidebarItem href="#">
            <SidebarLabel>App</SidebarLabel>
          </SidebarItem>
        </SidebarHeader>
        <SidebarBody>
          <SidebarSection>
            <SidebarItem href="#" current>
              <SidebarLabel>Dashboard</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="#">
              <SidebarLabel>Orders</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="#">
              <SidebarLabel>Products</SidebarLabel>
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
          Main content area of the sidebar layout.
        </p>
      </div>
    ),
  },
};
