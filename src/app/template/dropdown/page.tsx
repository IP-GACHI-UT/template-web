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
      </div>
    </div>
  );
}
