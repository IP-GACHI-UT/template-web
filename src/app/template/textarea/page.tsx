import { Description, Field, Label } from "@/components/Fieldset";
import { Textarea } from "@/components/Textarea";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function TextareaPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Textarea"
        description="テキストエリアコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="Textarea"
          description="テキストエリアのバリエーション。"
        >
          <div className="max-w-sm space-y-8">
            <Field>
              <Label>Comment</Label>
              <Textarea placeholder="Write your comment..." />
            </Field>
            <Field>
              <Label>Bio</Label>
              <Description>Write a few sentences about yourself.</Description>
              <Textarea />
            </Field>
            <Field>
              <Label>Non-resizable</Label>
              <Textarea
                resizable={false}
                placeholder="This textarea cannot be resized."
              />
            </Field>
            <Field>
              <Label>Disabled</Label>
              <Textarea disabled placeholder="This textarea is disabled." />
            </Field>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
