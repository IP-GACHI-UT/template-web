import { Description, Field, Label } from "@/components/Fieldset";
import { Input, InputGroup } from "@/components/Input";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

function MagnifyingGlassIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CurrencyDollarIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
    >
      <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V4c-.46.1-.88.287-1.25.546-.442.318-.75.79-.75 1.354 0 .576.326 1.012.723 1.322.359.28.83.49 1.222.656l.063.027c.434.184.798.341 1.06.552.2.162.282.313.282.493 0 .204-.08.36-.282.497-.224.153-.561.255-.968.273V10a.75.75 0 0 0 1.5 0v-.252c.46-.1.88-.287 1.25-.546.442-.318.75-.79.75-1.354 0-.576-.326-1.012-.723-1.322-.359-.28-.83-.49-1.222-.656l-.063-.027c-.434-.184-.798-.341-1.06-.552-.2-.162-.282-.313-.282-.493 0-.204.08-.36.282-.497.224-.153.561-.255.968-.273V4.75Z" />
    </svg>
  );
}

export default function InputPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Input"
        description="テキスト入力フィールドのバリエーション。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Input Types" description="各種入力タイプ。">
          <div className="max-w-sm space-y-8">
            <Field>
              <Label>Text</Label>
              <Input type="text" placeholder="Enter text..." />
            </Field>
            <Field>
              <Label>Email</Label>
              <Description>We&apos;ll never share your email.</Description>
              <Input type="email" placeholder="you@example.com" />
            </Field>
            <Field>
              <Label>Password</Label>
              <Input type="password" placeholder="Enter password" />
            </Field>
            <Field>
              <Label>Number</Label>
              <Input type="number" placeholder="0" />
            </Field>
            <Field>
              <Label>Date</Label>
              <Input type="date" />
            </Field>
            <Field>
              <Label>Disabled</Label>
              <Input type="text" disabled placeholder="Disabled input" />
            </Field>
          </div>
        </DemoSection>
        <DemoSection
          title="With Icon"
          description="InputGroup によるアイコン付き入力。"
        >
          <div className="max-w-sm space-y-8">
            <Field>
              <Label>Search</Label>
              <InputGroup>
                <MagnifyingGlassIcon data-slot="icon" />
                <Input type="search" placeholder="Search..." />
              </InputGroup>
            </Field>
            <Field>
              <Label>Amount</Label>
              <InputGroup>
                <CurrencyDollarIcon data-slot="icon" />
                <Input type="number" placeholder="0.00" />
              </InputGroup>
            </Field>
          </div>
        </DemoSection>
        <DemoSection
          title="無効状態"
          description="無効化された入力フィールド。"
        >
          <div className="max-w-sm space-y-8">
            <Field>
              <Label>プレースホルダー付き</Label>
              <Input type="text" disabled placeholder="入力できません" />
            </Field>
            <Field>
              <Label>値付き</Label>
              <Input type="text" disabled defaultValue="変更できない値" />
            </Field>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
