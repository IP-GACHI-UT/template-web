import { Avatar } from "@/components/Avatar";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function AvatarPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Avatar"
        description="アバターコンポーネントのバリエーション。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="With Initials" description="イニシャル表示。">
          <div className="flex items-center gap-4">
            <Avatar initials="AB" className="size-8" />
            <Avatar initials="CD" className="size-10" />
            <Avatar initials="EF" className="size-12" />
            <Avatar initials="GH" className="size-16" />
          </div>
        </DemoSection>
        <DemoSection title="Square" description="角型アバター。">
          <div className="flex items-center gap-4">
            <Avatar initials="SQ" square className="size-8" />
            <Avatar initials="SQ" square className="size-10" />
            <Avatar initials="SQ" square className="size-12" />
          </div>
        </DemoSection>
        <DemoSection title="With Image" description="画像アバター。">
          <div className="flex items-center gap-4">
            <Avatar src="/avatars/1.svg" className="size-8" />
            <Avatar src="/avatars/2.svg" className="size-10" />
            <Avatar src="/avatars/3.svg" className="size-12" />
            <Avatar src="/avatars/4.svg" className="size-16" />
          </div>
        </DemoSection>
        <DemoSection
          title="Square with Image"
          description="角型アバターに画像を表示。"
        >
          <div className="flex items-center gap-4">
            <Avatar src="/avatars/1.svg" square className="size-8" />
            <Avatar src="/avatars/2.svg" square className="size-10" />
            <Avatar src="/avatars/3.svg" square className="size-12" />
            <Avatar src="/avatars/4.svg" square className="size-16" />
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
