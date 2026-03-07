import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "@/components/Pagination";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function PaginationPage_() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Pagination"
        description="ページネーションコンポーネントのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Basic" description="基本的なページネーション。">
          <Pagination>
            <PaginationPrevious href="#" />
            <PaginationList>
              <PaginationPage href="#" current>
                1
              </PaginationPage>
              <PaginationPage href="#">2</PaginationPage>
              <PaginationPage href="#">3</PaginationPage>
              <PaginationGap />
              <PaginationPage href="#">8</PaginationPage>
              <PaginationPage href="#">9</PaginationPage>
              <PaginationPage href="#">10</PaginationPage>
            </PaginationList>
            <PaginationNext href="#" />
          </Pagination>
        </DemoSection>
        <DemoSection
          title="First Page (Previous Disabled)"
          description="最初のページ（前へボタン無効）。"
        >
          <Pagination>
            <PaginationPrevious />
            <PaginationList>
              <PaginationPage href="#" current>
                1
              </PaginationPage>
              <PaginationPage href="#">2</PaginationPage>
              <PaginationPage href="#">3</PaginationPage>
            </PaginationList>
            <PaginationNext href="#" />
          </Pagination>
        </DemoSection>
      </div>
    </div>
  );
}
