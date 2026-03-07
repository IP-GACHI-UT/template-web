"use client";

import { Avatar } from "@/components/Avatar";
import {
  Sidebar,
  SidebarBody,
  SidebarDivider,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "@/components/Sidebar";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function SidebarPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Sidebar"
        description="サイドバーコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Sidebar" description="サイドバーのデモ。">
          <div className="h-[600px] w-64 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <Sidebar>
              <SidebarHeader>
                <SidebarSection>
                  <SidebarItem href="#">
                    <Avatar initials="AC" className="size-6" />
                    <SidebarLabel>Acme Inc</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              </SidebarHeader>
              <SidebarBody>
                <SidebarSection>
                  <SidebarHeading>Main</SidebarHeading>
                  <SidebarItem href="#" current>
                    <SidebarLabel>Dashboard</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="#">
                    <SidebarLabel>Orders</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="#">
                    <SidebarLabel>Products</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
                <SidebarDivider />
                <SidebarSection>
                  <SidebarHeading>Settings</SidebarHeading>
                  <SidebarItem href="#">
                    <SidebarLabel>General</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="#">
                    <SidebarLabel>Billing</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
                <SidebarSpacer />
              </SidebarBody>
              <SidebarFooter>
                <SidebarSection>
                  <SidebarItem href="#">
                    <Avatar initials="JD" className="size-6" />
                    <SidebarLabel>John Doe</SidebarLabel>
                  </SidebarItem>
                </SidebarSection>
              </SidebarFooter>
            </Sidebar>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
