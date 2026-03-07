"use client";

import { Heading } from "@/components/Heading";
import {
  Navbar,
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
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

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
          description="トップナビバー付きのスタック型レイアウト。"
        >
          <div className="h-[480px] overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
            <StackedLayout
              navbar={
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
              }
              sidebar={
                <Sidebar>
                  <SidebarBody>
                    <SidebarSection>
                      <SidebarItem href="#">
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
              }
            >
              <Heading>Dashboard</Heading>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                This is the stacked layout with a top navbar.
              </p>
            </StackedLayout>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
