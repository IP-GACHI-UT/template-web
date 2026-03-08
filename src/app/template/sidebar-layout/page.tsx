"use client";

import { Badge } from "@/components/Badge";
import { Heading, Subheading } from "@/components/Heading";
import {
  Navbar,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
} from "@/components/Navbar";
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
} from "@/components/Sidebar";
import { SidebarLayout } from "@/components/SidebarLayout";
import { Text } from "@/components/Text";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

function HomeIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InboxIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 0 1 5.273 3h9.454a2.75 2.75 0 0 1 2.651 2.019l1.523 5.52c.066.239.099.485.099.732V15.25A2.75 2.75 0 0 1 16.25 18H3.75A2.75 2.75 0 0 1 1 15.25V11.27Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
      <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
    </svg>
  );
}

function CogIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
      <path d="M15.5 2A1.5 1.5 0 0 0 14 3.5v13a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 16.5 2h-1ZM9.5 6A1.5 1.5 0 0 0 8 7.5v9A1.5 1.5 0 0 0 9.5 18h1a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 6h-1ZM3.5 10A1.5 1.5 0 0 0 2 11.5v5A1.5 1.5 0 0 0 3.5 18h1A1.5 1.5 0 0 0 6 16.5v-5A1.5 1.5 0 0 0 4.5 10h-1Z" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function SidebarLayoutPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="SidebarLayout"
        description="サイドバー付きレイアウトのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="Sidebar Layout"
          description="サイドバーナビゲーション付きのレイアウト。デスクトップではサイドバーが固定表示、モバイルではハンバーガーメニューで表示されます。"
        >
          <div
            className="h-[520px] overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700"
            style={{ transform: "scale(1)" }}
          >
            <SidebarLayout
              navbar={
                <Navbar>
                  <NavbarSection>
                    <NavbarItem href="#">
                      <NavbarLabel>Acme Corp</NavbarLabel>
                    </NavbarItem>
                  </NavbarSection>
                </Navbar>
              }
              sidebar={
                <Sidebar>
                  <SidebarHeader>
                    <SidebarItem href="#">
                      <span className="flex size-6 items-center justify-center rounded bg-zinc-950 text-[10px] font-bold text-white dark:bg-white dark:text-zinc-950">
                        A
                      </span>
                      <SidebarLabel>Acme Corp</SidebarLabel>
                    </SidebarItem>
                  </SidebarHeader>
                  <SidebarBody>
                    <SidebarSection>
                      <SidebarItem href="#" current>
                        <HomeIcon />
                        <SidebarLabel>ダッシュボード</SidebarLabel>
                      </SidebarItem>
                      <SidebarItem href="#">
                        <InboxIcon />
                        <SidebarLabel>受信トレイ</SidebarLabel>
                        <Badge color="blue">12</Badge>
                      </SidebarItem>
                      <SidebarItem href="#">
                        <ChartIcon />
                        <SidebarLabel>レポート</SidebarLabel>
                      </SidebarItem>
                      <SidebarItem href="#">
                        <UsersIcon />
                        <SidebarLabel>メンバー</SidebarLabel>
                      </SidebarItem>
                    </SidebarSection>
                    <SidebarSection>
                      <SidebarHeading>プロジェクト</SidebarHeading>
                      <SidebarItem href="#">
                        <SidebarLabel>Web リニューアル</SidebarLabel>
                      </SidebarItem>
                      <SidebarItem href="#">
                        <SidebarLabel>モバイルアプリ v2</SidebarLabel>
                      </SidebarItem>
                      <SidebarItem href="#">
                        <SidebarLabel>API 基盤整備</SidebarLabel>
                      </SidebarItem>
                    </SidebarSection>
                    <SidebarSpacer />
                    <SidebarSection>
                      <SidebarItem href="#">
                        <QuestionIcon />
                        <SidebarLabel>ヘルプ</SidebarLabel>
                      </SidebarItem>
                    </SidebarSection>
                  </SidebarBody>
                  <SidebarFooter>
                    <SidebarSection>
                      <SidebarItem href="#">
                        <CogIcon />
                        <SidebarLabel>設定</SidebarLabel>
                      </SidebarItem>
                    </SidebarSection>
                  </SidebarFooter>
                </Sidebar>
              }
            >
              <Heading>ダッシュボード</Heading>
              <Text className="mt-2">
                プロジェクトの進捗状況とチームの活動を確認できます。
              </Text>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                  <Subheading level={3}>進行中のタスク</Subheading>
                  <p className="mt-1 text-2xl font-semibold text-zinc-950 dark:text-white">
                    24
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                  <Subheading level={3}>完了済み</Subheading>
                  <p className="mt-1 text-2xl font-semibold text-zinc-950 dark:text-white">
                    142
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                  <Subheading level={3}>チームメンバー</Subheading>
                  <p className="mt-1 text-2xl font-semibold text-zinc-950 dark:text-white">
                    8
                  </p>
                </div>
              </div>
            </SidebarLayout>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
