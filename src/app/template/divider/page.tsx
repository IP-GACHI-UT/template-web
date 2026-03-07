import { Divider } from "@/components/Divider";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function DividerPage() {
  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Divider"
        description="区切り線コンポーネントのバリエーション。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Default" description="デフォルトスタイル。">
          <div className="space-y-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Content above the divider
            </p>
            <Divider />
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Content below the divider
            </p>
          </div>
        </DemoSection>
        <DemoSection title="Soft" description="ソフトスタイル。">
          <div className="space-y-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Content above the soft divider
            </p>
            <Divider soft />
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Content below the soft divider
            </p>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}
