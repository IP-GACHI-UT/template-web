import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import { Checkbox, CheckboxField } from "@/components/Checkbox";
import { Field, Label } from "@/components/Fieldset";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { Text, TextLink } from "@/components/Text";
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
          title="サインイン"
          description="メールアドレスとパスワードによるサインインフォーム。"
        >
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-700">
            <AuthLayout className="min-h-[480px]">
              <div className="w-full max-w-sm">
                <div className="text-center">
                  <div className="mx-auto flex size-10 items-center justify-center rounded-lg bg-zinc-950 dark:bg-white">
                    <span className="text-sm font-bold text-white dark:text-zinc-950">
                      A
                    </span>
                  </div>
                  <Heading className="mt-4">アカウントにサインイン</Heading>
                  <Text className="mt-1">
                    アカウントをお持ちでない方は{" "}
                    <TextLink href="#">新規登録</TextLink>
                  </Text>
                </div>
                <div className="mt-8 space-y-6">
                  <Field>
                    <Label>メールアドレス</Label>
                    <Input type="email" placeholder="you@example.com" />
                  </Field>
                  <Field>
                    <Label>パスワード</Label>
                    <Input type="password" />
                  </Field>
                  <div className="flex items-center justify-between">
                    <CheckboxField>
                      <Checkbox name="remember" />
                      <Label>ログイン状態を保持</Label>
                    </CheckboxField>
                    <TextLink href="#" className="text-sm">
                      パスワードを忘れた方
                    </TextLink>
                  </div>
                  <Button className="w-full">サインイン</Button>
                </div>
              </div>
            </AuthLayout>
          </div>
        </DemoSection>
        <DemoSection
          title="新規登録"
          description="新規アカウント作成フォーム。"
        >
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-700">
            <AuthLayout className="min-h-[540px]">
              <div className="w-full max-w-sm">
                <div className="text-center">
                  <div className="mx-auto flex size-10 items-center justify-center rounded-lg bg-zinc-950 dark:bg-white">
                    <span className="text-sm font-bold text-white dark:text-zinc-950">
                      A
                    </span>
                  </div>
                  <Heading className="mt-4">新規アカウント作成</Heading>
                  <Text className="mt-1">
                    既にアカウントをお持ちの方は{" "}
                    <TextLink href="#">サインイン</TextLink>
                  </Text>
                </div>
                <div className="mt-8 space-y-6">
                  <Field>
                    <Label>名前</Label>
                    <Input type="text" placeholder="山田太郎" />
                  </Field>
                  <Field>
                    <Label>メールアドレス</Label>
                    <Input type="email" placeholder="you@example.com" />
                  </Field>
                  <Field>
                    <Label>パスワード</Label>
                    <Input type="password" />
                  </Field>
                  <Button className="w-full">アカウントを作成</Button>
                  <Text className="text-center text-xs">
                    登録することで <TextLink href="#">利用規約</TextLink> と{" "}
                    <TextLink href="#">プライバシーポリシー</TextLink>{" "}
                    に同意したことになります。
                  </Text>
                </div>
              </div>
            </AuthLayout>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
