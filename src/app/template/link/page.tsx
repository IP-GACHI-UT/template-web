import { Link as CatalystLink } from "@/components/Link";
import { Text, TextLink } from "@/components/Text";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function LinkPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Link"
        description="リンクコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="TextLink"
          description="文章中で使うスタイル付きリンク。"
        >
          <div className="space-y-2">
            <TextLink href="#">Styled text link</TextLink>
          </div>
        </DemoSection>
        <DemoSection
          title="In Paragraph"
          description="文章中のインラインリンク。"
        >
          <Text>
            This is a paragraph with an{" "}
            <TextLink href="#">inline link</TextLink> embedded in the text.
            Links within body text use a blue color and underline for clarity.
            You can also link to <TextLink href="#">another page</TextLink>{" "}
            seamlessly.
          </Text>
        </DemoSection>
        <DemoSection
          title="Base Link"
          description="スタイルなしのベースリンク（Button, Sidebar 等の基盤）。"
        >
          <CatalystLink href="#" className="text-sm">
            Unstyled base link
          </CatalystLink>
        </DemoSection>
      </div>
    </div>
  );
}
