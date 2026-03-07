import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import { Field, Label } from "@/components/Fieldset";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function AuthLayoutPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="AuthLayout"
        description="認証レイアウトのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="Auth Layout"
          description="認証フォーム用の中央寄せレイアウト。"
        >
          <div className="h-[480px] overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
            <AuthLayout>
              <div className="w-full max-w-sm">
                <Heading>Sign in</Heading>
                <div className="mt-8 space-y-6">
                  <Field>
                    <Label>Email</Label>
                    <Input type="email" placeholder="you@example.com" />
                  </Field>
                  <Field>
                    <Label>Password</Label>
                    <Input type="password" />
                  </Field>
                  <Button className="w-full">Sign in</Button>
                </div>
              </div>
            </AuthLayout>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
