import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/DescriptionList";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function DescriptionListPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="DescriptionList"
        description="説明リストコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="User Profile"
          description="ユーザープロフィール表示例。"
        >
          <DescriptionList>
            <DescriptionTerm>Full name</DescriptionTerm>
            <DescriptionDetails>Margot Foster</DescriptionDetails>
            <DescriptionTerm>Email address</DescriptionTerm>
            <DescriptionDetails>margotfoster@example.com</DescriptionDetails>
            <DescriptionTerm>Role</DescriptionTerm>
            <DescriptionDetails>Admin</DescriptionDetails>
            <DescriptionTerm>Salary</DescriptionTerm>
            <DescriptionDetails>$120,000</DescriptionDetails>
            <DescriptionTerm>About</DescriptionTerm>
            <DescriptionDetails>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat.
            </DescriptionDetails>
          </DescriptionList>
        </DemoSection>
      </div>
    </div>
  );
}
