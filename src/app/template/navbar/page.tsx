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
        <DemoSection
          title="アイコン付き"
          description="アイコン付きナビゲーション項目。"
        >
          <div className="rounded-lg border border-zinc-200 p-2 dark:border-zinc-800">
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
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <NavbarLabel>検索</NavbarLabel>
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
                      d="M10 2a6 6 0 00-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 00.515 1.076 32.91 32.91 0 003.256.508 3.5 3.5 0 006.972 0 32.903 32.903 0 003.256-.508.75.75 0 00.515-1.076A11.448 11.448 0 0116 8a6 6 0 00-6-6zM8.05 14.943a33.54 33.54 0 003.9 0 2 2 0 01-3.9 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <NavbarLabel>通知</NavbarLabel>
                </NavbarItem>
                <NavbarItem href="#">
                  <svg
                    data-slot="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                  </svg>
                  <NavbarLabel>プロフィール</NavbarLabel>
                </NavbarItem>
              </NavbarSection>
            </Navbar>
          </div>
        </DemoSection>
        <DemoSection
          title="アクティブ状態"
          description="current プロパティでアクティブなページを示すアンダーライン表示。"
        >
          <div className="rounded-lg border border-zinc-200 p-2 dark:border-zinc-800">
            <Navbar>
              <NavbarSection>
                <NavbarItem href="#">
                  <NavbarLabel>Dashboard</NavbarLabel>
                </NavbarItem>
                <NavbarItem href="#" current>
                  <NavbarLabel>Orders</NavbarLabel>
                </NavbarItem>
                <NavbarItem href="#">
                  <NavbarLabel>Settings</NavbarLabel>
                </NavbarItem>
                <NavbarItem href="#">
                  <NavbarLabel>Reports</NavbarLabel>
                </NavbarItem>
              </NavbarSection>
            </Navbar>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
