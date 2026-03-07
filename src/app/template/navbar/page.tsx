"use client";

import { Avatar } from "@/components/Avatar";
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "@/components/Navbar";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function NavbarPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Navbar"
        description="ナビゲーションバーのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Basic" description="基本的なナビバー。">
          <div className="rounded-lg border border-zinc-200 p-2 dark:border-zinc-800">
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
              <NavbarSection>
                <NavbarItem href="#">
                  <Avatar initials="JD" className="size-6" />
                </NavbarItem>
              </NavbarSection>
            </Navbar>
          </div>
        </DemoSection>
        <DemoSection title="With Divider" description="区切り線付きナビバー。">
          <div className="rounded-lg border border-zinc-200 p-2 dark:border-zinc-800">
            <Navbar>
              <NavbarSection>
                <NavbarItem href="#">
                  <NavbarLabel>Home</NavbarLabel>
                </NavbarItem>
                <NavbarItem href="#">
                  <NavbarLabel>About</NavbarLabel>
                </NavbarItem>
              </NavbarSection>
              <NavbarDivider />
              <NavbarSection>
                <NavbarItem href="#">
                  <NavbarLabel>Contact</NavbarLabel>
                </NavbarItem>
              </NavbarSection>
            </Navbar>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
