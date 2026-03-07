"use client";

import { useState } from "react";
import { Description, Label } from "@/components/Fieldset";
import { Switch, SwitchField, SwitchGroup } from "@/components/Switch";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

const switchColors = [
  "dark/zinc",
  "dark/white",
  "dark",
  "zinc",
  "white",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

export default function SwitchPage() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Switch"
        description="スイッチコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Basic" description="基本的なスイッチ。">
          <SwitchField>
            <Label>Enable notifications</Label>
            <Description>
              Get notified when something important happens.
            </Description>
            <Switch checked={enabled} onChange={setEnabled} />
          </SwitchField>
        </DemoSection>
        <DemoSection title="Group" description="グループスイッチ。">
          <div className="max-w-lg">
            <SwitchGroup>
              <SwitchField>
                <Label>Email</Label>
                <Description>Receive email notifications.</Description>
                <Switch defaultChecked />
              </SwitchField>
              <SwitchField>
                <Label>SMS</Label>
                <Description>Receive SMS notifications.</Description>
                <Switch />
              </SwitchField>
              <SwitchField>
                <Label>Push</Label>
                <Description>Receive push notifications.</Description>
                <Switch defaultChecked />
              </SwitchField>
            </SwitchGroup>
          </div>
        </DemoSection>
        <DemoSection title="Colors" description="カラーバリエーション。">
          <div className="flex flex-wrap gap-4">
            {switchColors.map((color) => (
              <Switch key={color} color={color} defaultChecked />
            ))}
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
