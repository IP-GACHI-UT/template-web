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
        <DemoSection
          title="Link Button"
          description="href 付きのリンクボタン。"
        >
          <div className="flex flex-wrap gap-2">
            <Button href="#">Solid Link</Button>
            <Button href="#" outline>
              Outline Link
            </Button>
            <Button href="#" plain>
              Plain Link
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
        <DemoSection
          title="アイコン付き"
          description="アイコンとテキストを組み合わせたボタン。"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Button color="indigo">
              <svg
                data-slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
              追加する
            </Button>
            <Button outline>
              <svg
                data-slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
              次へ進む
            </Button>
            <Button color="indigo">
              <svg
                data-slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-label="追加"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            </Button>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
