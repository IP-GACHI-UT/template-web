"use client";

import { useState } from "react";
import { Field, Label } from "@/components/Fieldset";
import {
  Listbox,
  ListboxDescription,
  ListboxLabel,
  ListboxOption,
} from "@/components/Listbox";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

const statuses = [
  { id: 1, name: "Active" },
  { id: 2, name: "Paused" },
  { id: 3, name: "Delayed" },
  { id: 4, name: "Canceled" },
];

const plans = [
  { id: 1, name: "Startup", description: "12 users, 5GB storage" },
  { id: 2, name: "Business", description: "50 users, 25GB storage" },
  { id: 3, name: "Enterprise", description: "Unlimited users, 100GB storage" },
];

export default function ListboxPage() {
  const [selected, setSelected] = useState(statuses[0]);
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Listbox"
        description="リストボックスコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Listbox" description="選択リストのバリエーション。">
          <div className="max-w-sm space-y-8">
            <Field>
              <Label>Status</Label>
              <Listbox value={selected} onChange={setSelected}>
                {statuses.map((status) => (
                  <ListboxOption key={status.id} value={status}>
                    <ListboxLabel>{status.name}</ListboxLabel>
                  </ListboxOption>
                ))}
              </Listbox>
            </Field>
            <Field>
              <Label>With Placeholder</Label>
              <Listbox
                value={null}
                onChange={() => {}}
                placeholder="Choose an option..."
              >
                {statuses.map((status) => (
                  <ListboxOption key={status.id} value={status}>
                    <ListboxLabel>{status.name}</ListboxLabel>
                  </ListboxOption>
                ))}
              </Listbox>
            </Field>
          </div>
        </DemoSection>
        <DemoSection
          title="With Description"
          description="説明文付きオプション。"
        >
          <div className="max-w-sm">
            <Field>
              <Label>Plan</Label>
              <Listbox value={selectedPlan} onChange={setSelectedPlan}>
                {plans.map((plan) => (
                  <ListboxOption key={plan.id} value={plan}>
                    <ListboxLabel>{plan.name}</ListboxLabel>
                    <ListboxDescription>{plan.description}</ListboxDescription>
                  </ListboxOption>
                ))}
              </Listbox>
            </Field>
          </div>
        </DemoSection>
        <DemoSection title="Disabled" description="無効化状態。">
          <div className="max-w-sm">
            <Field disabled>
              <Label>Status</Label>
              <Listbox value={statuses[0]} onChange={() => {}}>
                {statuses.map((status) => (
                  <ListboxOption key={status.id} value={status}>
                    <ListboxLabel>{status.name}</ListboxLabel>
                  </ListboxOption>
                ))}
              </Listbox>
            </Field>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
