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
      </div>
    </div>
  );
}
