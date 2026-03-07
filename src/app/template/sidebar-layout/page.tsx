"use client";

import { Heading } from "@/components/Heading";
import {
  Navbar,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
} from "@/components/Navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/Sidebar";
import { SidebarLayout } from "@/components/SidebarLayout";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

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
          description="サイドバーナビゲーション付きのレイアウト。"
        >
          <div className="h-[480px] overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
            <SidebarLayout
              navbar={
                <Navbar>
                  <NavbarSection>
                    <NavbarItem href="#">
                      <NavbarLabel>Mobile Nav</NavbarLabel>
                    </NavbarItem>
                  </NavbarSection>
                </Navbar>
              }
              sidebar={
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
                        <SidebarLabel>Products</SidebarLabel>
                      </SidebarItem>
                      <SidebarItem href="#">
                        <SidebarLabel>Settings</SidebarLabel>
                      </SidebarItem>
                    </SidebarSection>
                  </SidebarBody>
                </Sidebar>
              }
            >
              <Heading>Dashboard</Heading>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                This is the main content area of the sidebar layout.
              </p>
            </SidebarLayout>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
