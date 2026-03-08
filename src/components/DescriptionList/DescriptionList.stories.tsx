import type { Meta, StoryObj } from "@storybook/react";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "./DescriptionList";

const meta = {
  title: "Components/DescriptionList",
  component: DescriptionList,
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionTerm>Name</DescriptionTerm>
      <DescriptionDetails>John Doe</DescriptionDetails>
      <DescriptionTerm>Email</DescriptionTerm>
      <DescriptionDetails>john@example.com</DescriptionDetails>
    </DescriptionList>
  ),
};

export const ManyItems: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionTerm>氏名</DescriptionTerm>
      <DescriptionDetails>山田 太郎</DescriptionDetails>
      <DescriptionTerm>メールアドレス</DescriptionTerm>
      <DescriptionDetails>taro.yamada@example.com</DescriptionDetails>
      <DescriptionTerm>所属部署</DescriptionTerm>
      <DescriptionDetails>プロダクト開発部</DescriptionDetails>
      <DescriptionTerm>役職</DescriptionTerm>
      <DescriptionDetails>シニアエンジニア</DescriptionDetails>
      <DescriptionTerm>電話番号</DescriptionTerm>
      <DescriptionDetails>03-1234-5678</DescriptionDetails>
      <DescriptionTerm>勤務地</DescriptionTerm>
      <DescriptionDetails>東京都渋谷区</DescriptionDetails>
      <DescriptionTerm>入社日</DescriptionTerm>
      <DescriptionDetails>2020年4月1日</DescriptionDetails>
    </DescriptionList>
  ),
};

export const LongContent: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionTerm>プロジェクト概要</DescriptionTerm>
      <DescriptionDetails>
        本プロジェクトは、次世代のUIコンポーネントライブラリを構築し、社内の複数プロダクトで共通利用可能なデザインシステムを提供することを目的としています。React
        19とNext.js
        16をベースに、アクセシビリティとパフォーマンスを両立したコンポーネント群を開発します。
      </DescriptionDetails>
      <DescriptionTerm>技術スタック</DescriptionTerm>
      <DescriptionDetails>
        Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4,
        Headless UI, Storybook v10, Jest 30, Playwright 1.58, Biome v2, pnpm
      </DescriptionDetails>
      <DescriptionTerm>備考</DescriptionTerm>
      <DescriptionDetails>
        このコンポーネントは長いテキストが含まれる場合の折り返し動作を確認するためのストーリーです。レスポンシブデザインにより、画面幅に応じてレイアウトが1カラムまたは2カラムに切り替わります。各項目のテキストが長い場合でも、適切に折り返されて表示されることを確認してください。
      </DescriptionDetails>
    </DescriptionList>
  ),
};
