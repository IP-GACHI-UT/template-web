import { Divider } from "@/components/Divider";
import { Heading, Subheading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function DividerPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Divider"
        description="区切り線コンポーネントのバリエーション。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="Default"
          description="デフォルトスタイルの区切り線。"
        >
          <div className="space-y-4">
            <Subheading>プロフィール</Subheading>
            <Text>
              アカウント情報やプロフィール設定を管理できます。変更は即時反映されます。
            </Text>
            <Divider />
            <Subheading>通知設定</Subheading>
            <Text>
              メール通知やプッシュ通知の受信設定をカスタマイズできます。
            </Text>
          </div>
        </DemoSection>
        <DemoSection
          title="Soft"
          description="ソフトスタイルの区切り線。より控えめな視覚的分離。"
        >
          <div className="space-y-4">
            <Subheading>プロフィール</Subheading>
            <Text>
              アカウント情報やプロフィール設定を管理できます。変更は即時反映されます。
            </Text>
            <Divider soft />
            <Subheading>通知設定</Subheading>
            <Text>
              メール通知やプッシュ通知の受信設定をカスタマイズできます。
            </Text>
          </div>
        </DemoSection>
        <DemoSection
          title="リスト内の区切り線"
          description="リストアイテム間の区切りとして使用。"
        >
          <ul className="space-y-0">
            {[
              {
                name: "田中太郎",
                role: "プロジェクトマネージャー",
                email: "tanaka@example.com",
              },
              {
                name: "佐藤花子",
                role: "デザイナー",
                email: "sato@example.com",
              },
              {
                name: "鈴木一郎",
                role: "エンジニア",
                email: "suzuki@example.com",
              },
            ].map((person, index) => (
              <li key={person.email}>
                {index > 0 && <Divider soft />}
                <div className="py-3">
                  <p className="text-sm font-medium text-zinc-950 dark:text-white">
                    {person.name}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {person.role} · {person.email}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </DemoSection>
        <DemoSection
          title="セクション間の区切り"
          description="ページ内のセクションを分離するパターン。"
        >
          <div>
            <Heading level={3}>注文概要</Heading>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500 dark:text-zinc-400">小計</span>
                <span className="text-zinc-950 dark:text-white">¥12,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500 dark:text-zinc-400">送料</span>
                <span className="text-zinc-950 dark:text-white">¥500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500 dark:text-zinc-400">消費税</span>
                <span className="text-zinc-950 dark:text-white">¥1,250</span>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-zinc-950 dark:text-white">合計</span>
              <span className="text-zinc-950 dark:text-white">¥13,750</span>
            </div>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
