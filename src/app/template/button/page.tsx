import { Button } from "@/components/Button";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

const solidColors = [
  "dark/zinc",
  "light",
  "dark/white",
  "white",
  "zinc",
  "indigo",
  "cyan",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "sky",
  "blue",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

export default function ButtonPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Button"
        description="ボタンコンポーネントのカラーとスタイルパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="Solid Colors"
          description="全カラーバリエーション。"
        >
          <div className="flex flex-wrap gap-2">
            {solidColors.map((color) => (
              <Button key={color} color={color}>
                {color}
              </Button>
            ))}
          </div>
        </DemoSection>
        <DemoSection title="Outline" description="アウトラインスタイル。">
          <div className="flex flex-wrap gap-2">
            <Button outline>Outline</Button>
            <Button outline disabled>
              Disabled
            </Button>
          </div>
        </DemoSection>
        <DemoSection title="Plain" description="プレーンスタイル。">
          <div className="flex flex-wrap gap-2">
            <Button plain>Plain</Button>
            <Button plain disabled>
              Disabled
            </Button>
          </div>
        </DemoSection>
        <DemoSection title="Disabled" description="無効化状態。">
          <div className="flex flex-wrap gap-2">
            <Button disabled>Disabled Solid</Button>
            <Button outline disabled>
              Disabled Outline
            </Button>
            <Button plain disabled>
              Disabled Plain
            </Button>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
