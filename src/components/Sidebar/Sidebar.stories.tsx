import type { Meta, StoryObj } from "@storybook/react";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "./Sidebar";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const HomeIcon = () => (
  <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
    <path
      d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.84 2a2 2 0 0 0-1.96 1.613l-.2 1A2.07 2.07 0 0 1 4.4 6.2l-.91-.416a2 2 0 0 0-2.48.77L.16 8.445a2 2 0 0 0 .52 2.384l.71.584a2.07 2.07 0 0 1 0 2.174l-.71.584a2 2 0 0 0-.52 2.384l.85 1.472a2 2 0 0 0 2.48.77l.91-.416a2.07 2.07 0 0 1 1.28 1.587l.2 1A2 2 0 0 0 7.84 22h1.7a2 2 0 0 0 1.96-1.613l.2-1a2.07 2.07 0 0 1 1.28-1.587l.91.416a2 2 0 0 0 2.48-.77l.85-1.472a2 2 0 0 0-.52-2.384l-.71-.584a2.07 2.07 0 0 1 0-2.174l.71-.584a2 2 0 0 0 .52-2.384l-.85-1.472a2 2 0 0 0-2.48-.77l-.91.416A2.07 2.07 0 0 1 11.7 4.613l-.2-1A2 2 0 0 0 9.54 2H7.84ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
);

const UserIcon = () => (
  <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
  </svg>
);

const DocumentIcon = () => (
  <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
    />
  </svg>
);

export const Default: Story = {
  render: () => (
    <Sidebar>
      <SidebarHeader>
        <SidebarSection>
          <SidebarItem href="#">
            <SidebarLabel>Dashboard</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="#">
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Sidebar>
      <SidebarHeader>
        <SidebarSection>
          <SidebarItem href="#">
            <SidebarLabel>Dashboard</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="#">
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <SidebarLabel>Projects</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter>
        <SidebarSection>
          <SidebarItem href="#">
            <SidebarLabel>ログアウト</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarFooter>
    </Sidebar>
  ),
};

export const WithCurrentItem: Story = {
  render: () => (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="#" current>
            <SidebarLabel>Dashboard</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <SidebarLabel>Projects</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Sidebar>
      <SidebarBody>
        <SidebarSection>
          <SidebarHeading>メインメニュー</SidebarHeading>
          <SidebarItem href="#">
            <SidebarLabel>Dashboard</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <SidebarLabel>Projects</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSection>
          <SidebarHeading>管理</SidebarHeading>
          <SidebarItem href="#">
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <SidebarLabel>Users</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  ),
};

export const FullLayout: Story = {
  render: () => (
    <Sidebar>
      <SidebarHeader>
        <SidebarSection>
          <SidebarItem href="#">
            <HomeIcon />
            <SidebarLabel>Acme Inc.</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          <SidebarHeading>メインメニュー</SidebarHeading>
          <SidebarItem href="#" current>
            <HomeIcon />
            <SidebarLabel>Dashboard</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <DocumentIcon />
            <SidebarLabel>Documents</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <UserIcon />
            <SidebarLabel>Users</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSection>
          <SidebarHeading>設定</SidebarHeading>
          <SidebarItem href="#">
            <SettingsIcon />
            <SidebarLabel>General</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSpacer />
        <SidebarSection>
          <SidebarItem href="#">
            <SidebarLabel>ヘルプ</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter>
        <SidebarSection>
          <SidebarItem href="#">
            <UserIcon />
            <SidebarLabel>田中太郎</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarFooter>
    </Sidebar>
  ),
};
