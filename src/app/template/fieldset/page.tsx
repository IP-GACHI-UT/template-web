import {
  Description,
  ErrorMessage,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/components/Fieldset";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function FieldsetPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Fieldset"
        description="フィールドセットコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="Shipping Details"
          description="フォームフィールドのグループ化例。"
        >
          <div className="max-w-lg">
            <Fieldset>
              <Legend>Shipping details</Legend>
              <FieldGroup>
                <Field>
                  <Label>Full name</Label>
                  <Input type="text" />
                </Field>
                <Field>
                  <Label>Street address</Label>
                  <Input type="text" />
                </Field>
                <Field>
                  <Label>Country</Label>
                  <Select>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </Select>
                </Field>
                <Field>
                  <Label>Email</Label>
                  <Input type="email" placeholder="you@example.com" invalid />
                  <ErrorMessage>
                    有効なメールアドレスを入力してください
                  </ErrorMessage>
                </Field>
                <Field>
                  <Label>Delivery notes</Label>
                  <Description>
                    Leave any special instructions for the courier.
                  </Description>
                  <Textarea />
                </Field>
              </FieldGroup>
            </Fieldset>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
