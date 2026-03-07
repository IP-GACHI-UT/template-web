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
            <Avatar
              src="https://catalyst-demo.tailwindui.com/users/1.jpg"
              className="size-8"
            />
            <Avatar
              src="https://catalyst-demo.tailwindui.com/users/2.jpg"
              className="size-10"
            />
            <Avatar
              src="https://catalyst-demo.tailwindui.com/users/3.jpg"
              className="size-12"
            />
            <Avatar
              src="https://catalyst-demo.tailwindui.com/users/4.jpg"
              className="size-16"
            />
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
