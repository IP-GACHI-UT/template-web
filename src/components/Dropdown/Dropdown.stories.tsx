import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import {
  Dropdown,
  DropdownButton,
  DropdownDescription,
  DropdownDivider,
  DropdownHeading,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownSection,
  DropdownShortcut,
} from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dropdown>
      <DropdownButton as={Button}>Options</DropdownButton>
      <DropdownMenu>
        <DropdownItem>
          <DropdownLabel>Edit</DropdownLabel>
        </DropdownItem>
        <DropdownItem>
          <DropdownLabel>Delete</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Dropdown>
      <DropdownButton as={Button}>Actions</DropdownButton>
      <DropdownMenu>
        <DropdownSection>
          <DropdownHeading>Edit</DropdownHeading>
          <DropdownItem>
            <DropdownLabel>Cut</DropdownLabel>
          </DropdownItem>
          <DropdownItem>
            <DropdownLabel>Copy</DropdownLabel>
          </DropdownItem>
          <DropdownItem>
            <DropdownLabel>Paste</DropdownLabel>
          </DropdownItem>
        </DropdownSection>
        <DropdownDivider />
        <DropdownSection>
          <DropdownHeading>Danger</DropdownHeading>
          <DropdownItem>
            <DropdownLabel>Delete</DropdownLabel>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <Dropdown>
      <DropdownButton as={Button}>File</DropdownButton>
      <DropdownMenu>
        <DropdownItem>
          <DropdownLabel>New</DropdownLabel>
          <DropdownShortcut keys={["Ctrl", "N"]} />
        </DropdownItem>
        <DropdownItem>
          <DropdownLabel>Open</DropdownLabel>
          <DropdownShortcut keys={["Ctrl", "O"]} />
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem>
          <DropdownLabel>Save</DropdownLabel>
          <DropdownShortcut keys={["Ctrl", "S"]} />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithLinks: Story = {
  render: () => (
    <Dropdown>
      <DropdownButton as={Button}>Navigate</DropdownButton>
      <DropdownMenu>
        <DropdownItem href="/template">
          <DropdownLabel>Dashboard</DropdownLabel>
        </DropdownItem>
        <DropdownItem href="/template/button">
          <DropdownLabel>Button</DropdownLabel>
        </DropdownItem>
        <DropdownItem href="/template/input">
          <DropdownLabel>Input</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <Dropdown>
      <DropdownButton as={Button}>Account</DropdownButton>
      <DropdownMenu>
        <DropdownItem>
          <DropdownLabel>Profile</DropdownLabel>
          <DropdownDescription>
            View and edit your profile information
          </DropdownDescription>
        </DropdownItem>
        <DropdownItem>
          <DropdownLabel>Settings</DropdownLabel>
          <DropdownDescription>
            Manage your account preferences
          </DropdownDescription>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem>
          <DropdownLabel>Sign out</DropdownLabel>
          <DropdownDescription>
            Log out of your current session
          </DropdownDescription>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <Dropdown>
      <DropdownButton as={Button}>Actions</DropdownButton>
      <DropdownMenu>
        <DropdownItem>
          <DropdownLabel>Edit</DropdownLabel>
        </DropdownItem>
        <DropdownItem>
          <DropdownLabel>Duplicate</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem disabled>
          <DropdownLabel>Archive</DropdownLabel>
        </DropdownItem>
        <DropdownItem disabled>
          <DropdownLabel>Delete</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};
