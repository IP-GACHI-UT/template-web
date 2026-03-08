"use client";

import { Badge } from "@/components/Badge";
import { Heading, Subheading } from "@/components/Heading";
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "@/components/Navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/Sidebar";
import { StackedLayout } from "@/components/StackedLayout";
import { Text } from "@/components/Text";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

function SearchIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function StackedLayoutPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="StackedLayout"
        description="スタック型レイアウトのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="Stacked Layout"
          description="トップナビバー付きのスタック型レイアウト。ナビゲーションが上部に配置され、コンテンツが下に続きます。モバイルではサイドバーがスライドイン表示されます。"
        >
          <div className="h-[520px] overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
            <StackedLayout
              navbar={
                <Navbar>
                  <NavbarItem href="#">
                    <span className="flex size-6 items-center justify-center rounded bg-zinc-950 text-[10px] font-bold text-white dark:bg-white dark:text-zinc-950">
                      A
                    </span>
                    <NavbarLabel>Acme Corp</NavbarLabel>
                  </NavbarItem>
                  <NavbarDivider />
                  <NavbarSection>
                    <NavbarItem href="#" current>
                      <NavbarLabel>ダッシュボード</NavbarLabel>
                    </NavbarItem>
                    <NavbarItem href="#">
                      <NavbarLabel>注文</NavbarLabel>
                    </NavbarItem>
                    <NavbarItem href="#">
                      <NavbarLabel>商品</NavbarLabel>
                    </NavbarItem>
                    <NavbarItem href="#">
                      <NavbarLabel>顧客</NavbarLabel>
                    </NavbarItem>
                    <NavbarItem href="#">
                      <NavbarLabel>レポート</NavbarLabel>
                    </NavbarItem>
                  </NavbarSection>
                  <NavbarSpacer />
                  <NavbarSection>
                    <NavbarItem href="#">
                      <SearchIcon />
                    </NavbarItem>
                    <NavbarItem href="#">
                      <BellIcon />
                    </NavbarItem>
                  </NavbarSection>
                </Navbar>
              }
              sidebar={
                <Sidebar>
                  <SidebarBody>
                    <SidebarSection>
                      <SidebarItem href="#" current>
                        <SidebarLabel>ダッシュボード</SidebarLabel>
                      </SidebarItem>
                      <SidebarItem href="#">
                        <SidebarLabel>注文</SidebarLabel>
                      </SidebarItem>
                      <SidebarItem href="#">
                        <SidebarLabel>商品</SidebarLabel>
                      </SidebarItem>
                      <SidebarItem href="#">
                        <SidebarLabel>顧客</SidebarLabel>
                      </SidebarItem>
                      <SidebarItem href="#">
                        <SidebarLabel>レポート</SidebarLabel>
                      </SidebarItem>
                    </SidebarSection>
                  </SidebarBody>
                </Sidebar>
              }
            >
              <Heading>ダッシュボード</Heading>
              <Text className="mt-2">
                売上の概要と最近の注文状況を確認できます。
              </Text>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                  <Subheading level={3}>今月の売上</Subheading>
                  <p className="mt-1 text-2xl font-semibold text-zinc-950 dark:text-white">
                    ¥1,240,000
                  </p>
                  <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                    +12.5% 前月比
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                  <Subheading level={3}>注文数</Subheading>
                  <p className="mt-1 text-2xl font-semibold text-zinc-950 dark:text-white">
                    356
                  </p>
                  <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                    +8.2% 前月比
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                  <Subheading level={3}>顧客数</Subheading>
                  <p className="mt-1 text-2xl font-semibold text-zinc-950 dark:text-white">
                    1,204
                  </p>
                  <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                    +3.1% 前月比
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                  <Subheading level={3}>平均単価</Subheading>
                  <p className="mt-1 text-2xl font-semibold text-zinc-950 dark:text-white">
                    ¥3,483
                  </p>
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                    -2.3% 前月比
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Subheading>最近の注文</Subheading>
                <div className="mt-3 space-y-2">
                  {[
                    {
                      id: "#1234",
                      customer: "田中太郎",
                      amount: "¥12,800",
                      status: "配送済み",
                      statusColor: "green" as const,
                    },
                    {
                      id: "#1233",
                      customer: "佐藤花子",
                      amount: "¥5,400",
                      status: "処理中",
                      statusColor: "blue" as const,
                    },
                    {
                      id: "#1232",
                      customer: "鈴木一郎",
                      amount: "¥23,100",
                      status: "配送中",
                      statusColor: "amber" as const,
                    },
                  ].map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 dark:border-zinc-700"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-zinc-950 dark:text-white">
                          {order.id}
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {order.customer}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-zinc-950 dark:text-white">
                          {order.amount}
                        </span>
                        <Badge color={order.statusColor}>{order.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StackedLayout>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
