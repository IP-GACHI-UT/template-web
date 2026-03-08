import { Badge } from "@/components/Badge";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

const colors = [
  "zinc",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

export default function BadgePage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Badge"
        description="バッジコンポーネントの全カラーバリエーション。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="All Colors" description="利用可能な全カラー。">
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <Badge key={color} color={color}>
                {color}
              </Badge>
            ))}
          </div>
        </DemoSection>
        <DemoSection
          title="コンテンツバリエーション"
          description="異なるコンテンツを含むバッジの表示例。"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge color="blue">新着</Badge>
            <Badge color="green">公開中のステータス</Badge>
            <Badge color="red">99+</Badge>
            <Badge color="amber">3</Badge>
            <Badge color="purple">プレミアムプラン</Badge>
            <Badge color="zinc">0</Badge>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
