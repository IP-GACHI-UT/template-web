import { Code, Strong, Text, TextLink } from "@/components/Text";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function TextPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Text"
        description="テキストコンポーネントのバリエーション。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Paragraph" description="段落テキスト。">
          <div className="max-w-prose">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
        </DemoSection>
        <DemoSection title="With Strong" description="太字テキスト。">
          <div className="max-w-prose">
            <Text>
              This is regular text with <Strong>strong emphasis</Strong> inside
              it.
            </Text>
          </div>
        </DemoSection>
        <DemoSection title="With Code" description="コード表示。">
          <div className="max-w-prose">
            <Text>
              Run <Code>npm install</Code> to install dependencies, then{" "}
              <Code>npm run dev</Code> to start.
            </Text>
          </div>
        </DemoSection>
        <DemoSection title="With Link" description="リンク付きテキスト。">
          <div className="max-w-prose">
            <Text>
              Visit <TextLink href="#">our documentation</TextLink> for more
              information.
            </Text>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
