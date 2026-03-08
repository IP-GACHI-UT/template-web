"use client";

import { useState } from "react";
import {
  Combobox,
  ComboboxDescription,
  ComboboxLabel,
  ComboboxOption,
} from "@/components/Combobox";
import { Field, Label } from "@/components/Fieldset";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

const employees = [
  { id: 1, name: "Tom Cook", role: "Director of Operations" },
  { id: 2, name: "Wade Cooper", role: "Senior Developer" },
  { id: 3, name: "Tanya Fox", role: "Product Designer" },
  { id: 4, name: "Arlene Mccoy", role: "Marketing Lead" },
  { id: 5, name: "Devon Webb", role: "QA Engineer" },
];

export default function ComboboxPage() {
  const [empty, setEmpty] = useState<(typeof people)[number] | null>(null);
  const [selected, setSelected] = useState<(typeof people)[number] | null>(
    people[0],
  );
  const [selectedEmployee, setSelectedEmployee] = useState<
    (typeof employees)[number] | null
  >(employees[0]);
  const [topSelected, setTopSelected] = useState<
    (typeof people)[number] | null
  >(people[0]);

  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Combobox"
        description="コンボボックスコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="Empty"
          description="未選択状態（プレースホルダー表示）。"
        >
          <div className="max-w-sm">
            <Field>
              <Label>Assignee</Label>
              <Combobox
                options={people}
                displayValue={(person) => person?.name}
                value={empty}
                onChange={(val) => setEmpty(val)}
                placeholder="Select a person..."
              >
                {(person) => (
                  <ComboboxOption value={person}>
                    <ComboboxLabel>{person.name}</ComboboxLabel>
                  </ComboboxOption>
                )}
              </Combobox>
            </Field>
          </div>
        </DemoSection>
        <DemoSection title="Basic" description="基本的なコンボボックス。">
          <div className="max-w-sm">
            <Field>
              <Label>Assignee</Label>
              <Combobox
                options={people}
                displayValue={(person) => person?.name}
                value={selected}
                onChange={(val) => setSelected(val)}
                placeholder="Select a person..."
              >
                {(person) => (
                  <ComboboxOption value={person}>
                    <ComboboxLabel>{person.name}</ComboboxLabel>
                  </ComboboxOption>
                )}
              </Combobox>
            </Field>
          </div>
        </DemoSection>
        <DemoSection
          title="With Description"
          description="補足情報付きオプション。"
        >
          <div className="max-w-sm">
            <Field>
              <Label>Employee</Label>
              <Combobox
                options={employees}
                displayValue={(person) => person?.name}
                value={selectedEmployee}
                onChange={(val) => setSelectedEmployee(val)}
                placeholder="Search employees..."
              >
                {(person) => (
                  <ComboboxOption value={person}>
                    <ComboboxLabel>{person.name}</ComboboxLabel>
                    <ComboboxDescription>{person.role}</ComboboxDescription>
                  </ComboboxOption>
                )}
              </Combobox>
            </Field>
          </div>
        </DemoSection>
        <DemoSection title="Disabled" description="無効化状態。">
          <div className="max-w-sm">
            <Field disabled>
              <Label>Assignee</Label>
              <Combobox
                options={people}
                displayValue={(person) => person?.name}
                value={people[0]}
                onChange={() => {}}
                placeholder="Select a person..."
              >
                {(person) => (
                  <ComboboxOption value={person}>
                    <ComboboxLabel>{person.name}</ComboboxLabel>
                  </ComboboxOption>
                )}
              </Combobox>
            </Field>
          </div>
        </DemoSection>
        <DemoSection
          title="上方向に開く"
          description="ドロップダウンが上方向に展開されるコンボボックス。"
        >
          <div className="mt-40 max-w-sm">
            <Field>
              <Label>Assignee</Label>
              <Combobox
                options={people}
                displayValue={(person) => person?.name}
                value={topSelected}
                onChange={(val) => setTopSelected(val)}
                placeholder="Select a person..."
                anchor="top"
              >
                {(person) => (
                  <ComboboxOption value={person}>
                    <ComboboxLabel>{person.name}</ComboboxLabel>
                  </ComboboxOption>
                )}
              </Combobox>
            </Field>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
