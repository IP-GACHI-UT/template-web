import type { Meta, StoryObj } from "@storybook/react";
import {
  Navbar,
  NavbarDivider,
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

export const WithCurrentItem: Story = {
  render: () => (
    <Navbar>
      <NavbarSection>
        <NavbarItem href="#" current>
          <NavbarLabel>ダッシュボード</NavbarLabel>
        </NavbarItem>
        <NavbarItem href="#">
          <NavbarLabel>設定</NavbarLabel>
        </NavbarItem>
        <NavbarItem href="#">
          <NavbarLabel>プロフィール</NavbarLabel>
        </NavbarItem>
      </NavbarSection>
      <NavbarSpacer />
    </Navbar>
  ),
};

export const WithDivider: Story = {
  render: () => (
    <Navbar>
      <NavbarSection>
        <NavbarItem href="#">
          <NavbarLabel>ホーム</NavbarLabel>
        </NavbarItem>
        <NavbarItem href="#">
          <NavbarLabel>プロジェクト</NavbarLabel>
        </NavbarItem>
      </NavbarSection>
      <NavbarDivider />
      <NavbarSection>
        <NavbarItem href="#">
          <NavbarLabel>ヘルプ</NavbarLabel>
        </NavbarItem>
        <NavbarItem href="#">
          <NavbarLabel>お問い合わせ</NavbarLabel>
        </NavbarItem>
      </NavbarSection>
      <NavbarSpacer />
    </Navbar>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Navbar>
      <NavbarSection>
        <NavbarItem href="#">
          <svg
            data-slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
              clipRule="evenodd"
            />
          </svg>
          <NavbarLabel>ホーム</NavbarLabel>
        </NavbarItem>
        <NavbarItem href="#">
          <svg
            data-slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
          <NavbarLabel>設定</NavbarLabel>
        </NavbarItem>
        <NavbarItem href="#">
          <svg
            data-slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
          </svg>
          <NavbarLabel>ユーザー</NavbarLabel>
        </NavbarItem>
      </NavbarSection>
      <NavbarSpacer />
    </Navbar>
  ),
};
