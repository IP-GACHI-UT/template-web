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
      </div>
    </div>
  );
}
