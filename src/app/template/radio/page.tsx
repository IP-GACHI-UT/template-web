"use client";

import { useState } from "react";
import { Description, Label } from "@/components/Fieldset";
import { Radio, RadioField, RadioGroup } from "@/components/Radio";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

const plans = [
  { name: "Startup", description: "12GB / 6 CPUs" },
  { name: "Business", description: "16GB / 8 CPUs" },
  { name: "Enterprise", description: "32GB / 12 CPUs" },
];

const radioColors = [
  "dark/zinc",
  "red",
  "orange",
  "green",
  "blue",
  "indigo",
  "violet",
  "purple",
  "pink",
] as const;

export default function RadioPage() {
  const [selected, setSelected] = useState("Startup");

  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Radio"
        description="ラジオボタンコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Basic" description="基本的なラジオグループ。">
          <div className="max-w-sm">
            <RadioGroup value={selected} onChange={setSelected}>
              {plans.map((plan) => (
                <RadioField key={plan.name}>
                  <Radio value={plan.name} />
                  <Label>{plan.name}</Label>
                  <Description>{plan.description}</Description>
                </RadioField>
              ))}
            </RadioGroup>
          </div>
        </DemoSection>
        <DemoSection title="Colors" description="カラーバリエーション。">
          <div className="flex flex-wrap gap-4">
            {radioColors.map((color) => (
              <RadioGroup key={color} value="a" onChange={() => {}}>
                <Radio value="a" color={color} />
              </RadioGroup>
            ))}
          </div>
        </DemoSection>
        <DemoSection title="Disabled" description="無効化状態。">
          <div className="max-w-sm">
            <RadioGroup value="a" onChange={() => {}}>
              <RadioField>
                <Radio value="a" disabled />
                <Label>Selected disabled</Label>
              </RadioField>
              <RadioField>
                <Radio value="b" disabled />
                <Label>Unselected disabled</Label>
              </RadioField>
            </RadioGroup>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
