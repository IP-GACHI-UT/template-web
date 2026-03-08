import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input";
import {
  Description,
  ErrorMessage,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "./Fieldset";

const meta = {
  title: "Components/Fieldset",
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset>
      <Legend>Personal Information</Legend>
      <Field>
        <Label>Name</Label>
        <Description>Enter your full name</Description>
        <Input type="text" />
      </Field>
    </Fieldset>
  ),
};

export const WithFieldGroup: Story = {
  render: () => (
    <Fieldset>
      <Legend>アカウント情報</Legend>
      <FieldGroup>
        <Field>
          <Label>メールアドレス</Label>
          <Description>ログインに使用するメールアドレス</Description>
          <Input type="email" />
        </Field>
        <Field>
          <Label>パスワード</Label>
          <Description>8文字以上で入力してください</Description>
          <Input type="password" />
        </Field>
        <Field>
          <Label>表示名</Label>
          <Description>他のユーザーに表示される名前</Description>
          <Input type="text" />
        </Field>
      </FieldGroup>
    </Fieldset>
  ),
};

export const WithErrorMessage: Story = {
  render: () => (
    <Fieldset>
      <Legend>ユーザー登録</Legend>
      <FieldGroup>
        <Field>
          <Label>メールアドレス</Label>
          <Input type="email" invalid />
          <ErrorMessage>有効なメールアドレスを入力してください</ErrorMessage>
        </Field>
        <Field>
          <Label>パスワード</Label>
          <Input type="password" invalid />
          <ErrorMessage>パスワードは8文字以上で入力してください</ErrorMessage>
        </Field>
      </FieldGroup>
    </Fieldset>
  ),
};

export const DisabledFieldset: Story = {
  render: () => (
    <Fieldset disabled>
      <Legend>プロフィール設定</Legend>
      <FieldGroup>
        <Field>
          <Label>名前</Label>
          <Description>この項目は現在編集できません</Description>
          <Input type="text" />
        </Field>
        <Field>
          <Label>メールアドレス</Label>
          <Input type="email" />
        </Field>
      </FieldGroup>
    </Fieldset>
  ),
};
