import { Heading, Subheading } from "@/components/Heading";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function HeadingPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Heading"
        description="見出しコンポーネントのレベル別パターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="Heading Levels"
          description="見出しレベルのバリエーション。"
        >
          <div className="space-y-4">
            <Heading level={1}>Heading Level 1</Heading>
            <Heading level={2}>Heading Level 2</Heading>
            <Heading level={3}>Heading Level 3</Heading>
          </div>
        </DemoSection>
        <DemoSection
          title="Subheading Levels"
          description="サブ見出しレベルのバリエーション。"
        >
          <div className="space-y-4">
            <Subheading level={2}>Subheading Level 2</Subheading>
            <Subheading level={3}>Subheading Level 3</Subheading>
            <Subheading level={4}>Subheading Level 4</Subheading>
          </div>
        </DemoSection>
        <DemoSection
          title="全レベル"
          description="Heading（レベル1〜6）と Subheading（レベル2〜6）の一覧。"
        >
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <Heading level={1}>Heading 1</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
              <Heading level={4}>Heading 4</Heading>
              <Heading level={5}>Heading 5</Heading>
              <Heading level={6}>Heading 6</Heading>
            </div>
            <div className="space-y-4">
              <Subheading level={2}>Subheading 2</Subheading>
              <Subheading level={3}>Subheading 3</Subheading>
              <Subheading level={4}>Subheading 4</Subheading>
              <Subheading level={5}>Subheading 5</Subheading>
              <Subheading level={6}>Subheading 6</Subheading>
            </div>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
