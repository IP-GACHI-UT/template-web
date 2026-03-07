"use client";

import { useState } from "react";
import { Checkbox, CheckboxField, CheckboxGroup } from "@/components/Checkbox";
import { Description, Label } from "@/components/Fieldset";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

const checkboxColors = [
  "dark/zinc",
  "dark/white",
  "white",
  "dark",
  "zinc",
  "red",
  "orange",
  "green",
  "blue",
  "indigo",
  "violet",
  "purple",
  "pink",
] as const;

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Checkbox"
        description="チェックボックスコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Basic" description="基本的なチェックボックス。">
          <CheckboxField>
            <Checkbox checked={checked} onChange={setChecked} />
            <Label>Accept terms and conditions</Label>
          </CheckboxField>
        </DemoSection>
        <DemoSection
          title="With Description"
          description="説明文付きチェックボックス。"
        >
          <CheckboxGroup>
            <CheckboxField>
              <Checkbox defaultChecked />
              <Label>Email notifications</Label>
              <Description>Get notified when something happens.</Description>
            </CheckboxField>
            <CheckboxField>
              <Checkbox />
              <Label>SMS notifications</Label>
              <Description>Receive text messages for updates.</Description>
            </CheckboxField>
          </CheckboxGroup>
        </DemoSection>
        <DemoSection title="Colors" description="カラーバリエーション。">
          <div className="flex flex-wrap gap-4">
            {checkboxColors.map((color) => (
              <Checkbox key={color} color={color} defaultChecked />
            ))}
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
