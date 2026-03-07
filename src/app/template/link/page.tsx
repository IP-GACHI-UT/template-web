import { Link as CatalystLink } from "@/components/Link";
import { Text } from "@/components/Text";
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
        <DemoSection title="Basic Link" description="基本的なリンク。">
          <div className="space-y-2">
            <CatalystLink href="#">Default link</CatalystLink>
          </div>
        </DemoSection>
        <DemoSection
          title="In Paragraph"
          description="文章中のインラインリンク。"
        >
          <Text>
            This is a paragraph with an{" "}
            <CatalystLink href="#">inline link</CatalystLink> embedded in the
            text. Links within body text inherit the text style and add an
            underline for clarity. You can also link to{" "}
            <CatalystLink href="#">another page</CatalystLink> seamlessly.
          </Text>
        </DemoSection>
      </div>
    </div>
  );
}
