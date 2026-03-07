import Link from "next/link";

const categories = [
  {
    name: "フォーム",
    label: "Forms",
    components: [
      { name: "Button", href: "/template/button" },
      { name: "Checkbox", href: "/template/checkbox" },
      { name: "Combobox", href: "/template/combobox" },
      { name: "Fieldset", href: "/template/fieldset" },
      { name: "Input", href: "/template/input" },
      { name: "Listbox", href: "/template/listbox" },
      { name: "Radio", href: "/template/radio" },
      { name: "Select", href: "/template/select" },
      { name: "Switch", href: "/template/switch" },
      { name: "Textarea", href: "/template/textarea" },
    ],
  },
  {
    name: "データ表示",
    label: "Data Display",
    components: [
      { name: "Avatar", href: "/template/avatar" },
      { name: "Badge", href: "/template/badge" },
      { name: "DescriptionList", href: "/template/description-list" },
      { name: "Heading", href: "/template/heading" },
      { name: "Table", href: "/template/table" },
      { name: "Text", href: "/template/text" },
    ],
  },
  {
    name: "フィードバック",
    label: "Feedback",
    components: [
      { name: "Alert", href: "/template/alert" },
      { name: "Dialog", href: "/template/dialog" },
      { name: "Dropdown", href: "/template/dropdown" },
    ],
  },
  {
    name: "ナビゲーション",
    label: "Navigation",
    components: [
      { name: "Link", href: "/template/link" },
      { name: "Navbar", href: "/template/navbar" },
      { name: "Pagination", href: "/template/pagination" },
      { name: "Sidebar", href: "/template/sidebar" },
    ],
  },
  {
    name: "レイアウト",
    label: "Layout",
    components: [
      { name: "AuthLayout", href: "/template/auth-layout" },
      { name: "Divider", href: "/template/divider" },
      { name: "SidebarLayout", href: "/template/sidebar-layout" },
      { name: "StackedLayout", href: "/template/stacked-layout" },
    ],
  },
];

const totalCount = categories.reduce(
  (sum, cat) => sum + cat.components.length,
  0,
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
          コンポーネント テンプレート
        </h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          全{totalCount}件のコンポーネントとバリエーションパターン。
        </p>
        <div className="mt-12 space-y-10">
          {categories.map((category) => (
            <section key={category.label}>
              <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
                {category.name}
                <span className="ml-2 text-sm font-normal text-zinc-400 dark:text-zinc-500">
                  {category.label}
                </span>
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.components.map((component) => (
                  <Link
                    key={component.name}
                    href={component.href}
                    className="group rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
                  >
                    <span className="text-base font-semibold text-zinc-950 dark:text-white">
                      {component.name}
                    </span>
                    <span className="mt-1 block text-sm text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-300">
                      パターンを見る
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
