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
        <DemoSection
          title="Disabled Fieldset"
          description="フィールドセット全体の無効化。"
        >
          <div className="max-w-lg">
            <Fieldset disabled>
              <Legend>Account details</Legend>
              <FieldGroup>
                <Field>
                  <Label>Username</Label>
                  <Input type="text" defaultValue="john_doe" />
                </Field>
                <Field>
                  <Label>Email</Label>
                  <Input type="email" defaultValue="john@example.com" />
                </Field>
                <Field>
                  <Label>Role</Label>
                  <Select>
                    <option>Admin</option>
                    <option>Member</option>
                  </Select>
                </Field>
              </FieldGroup>
            </Fieldset>
          </div>
        </DemoSection>
        <DemoSection
          title="エラーメッセージ"
          description="バリデーションエラーの表示例。"
        >
          <div className="max-w-lg">
            <Field>
              <Label>電話番号</Label>
              <Input type="tel" placeholder="090-1234-5678" invalid />
              <ErrorMessage>有効な電話番号を入力してください</ErrorMessage>
            </Field>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
