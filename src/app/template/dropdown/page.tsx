"use client";

import { Button } from "@/components/Button";
import {
  Dropdown,
  DropdownButton,
  DropdownDescription,
  DropdownDivider,
  DropdownHeader,
  DropdownHeading,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownSection,
  DropdownShortcut,
} from "@/components/Dropdown";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function DropdownPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Dropdown"
        description="ドロップダウンメニューのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Basic" description="基本的なドロップダウン。">
          <Dropdown>
            <DropdownButton as={Button}>Options</DropdownButton>
            <DropdownMenu>
              <DropdownItem>
                <DropdownLabel>Edit</DropdownLabel>
              </DropdownItem>
              <DropdownItem>
                <DropdownLabel>Duplicate</DropdownLabel>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem>
                <DropdownLabel>Archive</DropdownLabel>
              </DropdownItem>
              <DropdownItem>
                <DropdownLabel>Delete</DropdownLabel>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DemoSection>
        <DemoSection title="With Sections" description="セクション区切り付き。">
          <Dropdown>
            <DropdownButton as={Button} outline>
              More actions
            </DropdownButton>
            <DropdownMenu>
              <DropdownHeader>
                <p className="text-sm font-medium">プロジェクト操作</p>
              </DropdownHeader>
              <DropdownDivider />
              <DropdownSection>
                <DropdownHeading>Actions</DropdownHeading>
                <DropdownItem>
                  <DropdownLabel>Edit</DropdownLabel>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLabel>Move</DropdownLabel>
                </DropdownItem>
              </DropdownSection>
              <DropdownDivider />
              <DropdownSection>
                <DropdownHeading>Danger zone</DropdownHeading>
                <DropdownItem>
                  <DropdownLabel>Delete</DropdownLabel>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </DemoSection>
        <DemoSection
          title="With Description & Shortcut"
          description="説明文とキーボードショートカット付き。"
        >
          <Dropdown>
            <DropdownButton as={Button}>Actions</DropdownButton>
            <DropdownMenu>
              <DropdownItem>
                <DropdownLabel>Edit</DropdownLabel>
                <DropdownDescription>Modify this item</DropdownDescription>
                <DropdownShortcut keys="⌘E" />
              </DropdownItem>
              <DropdownItem>
                <DropdownLabel>Duplicate</DropdownLabel>
                <DropdownDescription>Create a copy</DropdownDescription>
                <DropdownShortcut keys="⌘D" />
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem>
                <DropdownLabel>Archive</DropdownLabel>
                <DropdownDescription>Move to archive</DropdownDescription>
                <DropdownShortcut keys="⌘A" />
              </DropdownItem>
              <DropdownItem>
                <DropdownLabel>Delete</DropdownLabel>
                <DropdownDescription>
                  Permanently remove this item
                </DropdownDescription>
                <DropdownShortcut keys="⌘⌫" />
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DemoSection>
        <DemoSection
          title="Disabled Items"
          description="無効化されたアイテム。"
        >
          <Dropdown>
            <DropdownButton as={Button}>Actions</DropdownButton>
            <DropdownMenu>
              <DropdownItem>
                <DropdownLabel>Edit</DropdownLabel>
              </DropdownItem>
              <DropdownItem disabled>
                <DropdownLabel>Duplicate (disabled)</DropdownLabel>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem>
                <DropdownLabel>Archive</DropdownLabel>
              </DropdownItem>
              <DropdownItem disabled>
                <DropdownLabel>Delete (disabled)</DropdownLabel>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DemoSection>
        <DemoSection
          title="アイコン付き"
          description="アイコン付きドロップダウンアイテム。"
        >
          <Dropdown>
            <DropdownButton as={Button}>操作</DropdownButton>
            <DropdownMenu>
              <DropdownItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                  <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                </svg>
                <DropdownLabel>編集</DropdownLabel>
              </DropdownItem>
              <DropdownItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 2h2a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 9 6H7a1.5 1.5 0 0 1-1.5-1.5v-1ZM7 3.5v1h2v-1H7Z" />
                  <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h7A1.5 1.5 0 0 1 13 7.5v5A1.5 1.5 0 0 1 11.5 14h-7A1.5 1.5 0 0 1 3 12.5v-5Z" />
                </svg>
                <DropdownLabel>コピー</DropdownLabel>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5A.75.75 0 0 1 9.95 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <DropdownLabel>削除</DropdownLabel>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DemoSection>
        <DemoSection
          title="Link Items"
          description="リンクとして機能するアイテム。"
        >
          <Dropdown>
            <DropdownButton as={Button} outline>
              Navigate
            </DropdownButton>
            <DropdownMenu>
              <DropdownItem href="#">
                <DropdownLabel>Dashboard</DropdownLabel>
              </DropdownItem>
              <DropdownItem href="#">
                <DropdownLabel>Settings</DropdownLabel>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem href="#">
                <DropdownLabel>Help</DropdownLabel>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </DemoSection>
      </div>
    </div>
  );
}
