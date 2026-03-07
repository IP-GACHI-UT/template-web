import { Description, Field, Label } from "@/components/Fieldset";
import { Select } from "@/components/Select";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function SelectPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Select"
        description="セレクトボックスコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="Select"
          description="セレクトボックスのバリエーション。"
        >
          <div className="max-w-sm space-y-8">
            <Field>
              <Label>Country</Label>
              <Select>
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="mx">Mexico</option>
                <option value="uk">United Kingdom</option>
                <option value="jp">Japan</option>
              </Select>
            </Field>
            <Field>
              <Label>Priority</Label>
              <Description>Set the priority level for this ticket.</Description>
              <Select>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </Select>
            </Field>
            <Field>
              <Label>Disabled</Label>
              <Select disabled>
                <option>Cannot change</option>
              </Select>
            </Field>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
