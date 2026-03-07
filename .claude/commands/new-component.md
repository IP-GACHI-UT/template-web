新しいコンポーネント `$ARGUMENTS` を作成してください。

以下の4ファイルを `src/components/$ARGUMENTS/` に作成:

## 1. $ARGUMENTS.tsx (コンポーネント本体)

```tsx
import clsx from "clsx";
import type React from "react";
import { forwardRef } from "react";

// 必要に応じて @headlessui/react からインポート

type ${ARGUMENTS}Props = {
  className?: string;
  children: React.ReactNode;
};

export const $ARGUMENTS = forwardRef(function $ARGUMENTS(
  { className, children, ...props }: ${ARGUMENTS}Props,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={clsx(className)} {...props}>
      {children}
    </div>
  );
});
```

## 2. $ARGUMENTS.stories.tsx (Storybook)

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { $ARGUMENTS } from "./$ARGUMENTS";

const meta = {
  title: "Components/$ARGUMENTS",
  component: $ARGUMENTS,
} satisfies Meta<typeof $ARGUMENTS>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "$ARGUMENTS",
  },
};
```

## 3. $ARGUMENTS.test.tsx (Jest テスト)

```tsx
import { render, screen } from "@testing-library/react";
import { $ARGUMENTS } from "./$ARGUMENTS";

describe("$ARGUMENTS", () => {
  it("renders with children", () => {
    render(<$ARGUMENTS>Test</$ARGUMENTS>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
```

## 4. index.ts (barrel export)

```ts
export { $ARGUMENTS } from "./$ARGUMENTS";
```

## 追加作業

- 作成後、`pnpm test -- --testPathPattern=$ARGUMENTS` でテストが通ることを確認
- 必要に応じて `src/app/template/_components/TemplateSidebar.tsx` の `categories` に追加
