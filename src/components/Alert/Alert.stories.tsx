import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import {
  Alert,
  AlertActions,
  AlertBody,
  AlertDescription,
  AlertTitle,
} from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Alert open onClose={() => {}}>
      <AlertTitle>Are you sure?</AlertTitle>
      <AlertDescription>
        This action cannot be undone. This will permanently delete the item.
      </AlertDescription>
      <AlertActions>
        <Button plain>Cancel</Button>
        <Button color="red">Delete</Button>
      </AlertActions>
    </Alert>
  ),
};

export const SmallSize: StoryObj = {
  render: () => (
    <Alert open onClose={() => {}} size="xs">
      <AlertTitle>Confirm</AlertTitle>
      <AlertDescription>Proceed with this action?</AlertDescription>
      <AlertActions>
        <Button plain>No</Button>
        <Button>Yes</Button>
      </AlertActions>
    </Alert>
  ),
};

export const LargeSize: StoryObj = {
  render: () => (
    <Alert open onClose={() => {}} size="xl">
      <AlertTitle>Important Notice</AlertTitle>
      <AlertDescription>
        This alert uses the xl size variant to provide a wider panel. It is
        suitable for alerts that need to display more detailed content or longer
        descriptions.
      </AlertDescription>
      <AlertBody>
        <p className="text-sm text-zinc-500">
          Additional context can be placed in the alert body.
        </p>
      </AlertBody>
      <AlertActions>
        <Button plain>Dismiss</Button>
        <Button>Acknowledge</Button>
      </AlertActions>
    </Alert>
  ),
};

export const WithBody: StoryObj = {
  render: () => (
    <Alert open onClose={() => {}}>
      <AlertTitle>利用規約の更新</AlertTitle>
      <AlertDescription>
        利用規約が更新されました。内容をご確認ください。
      </AlertDescription>
      <AlertBody>
        <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <p>主な変更点:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>プライバシーポリシーの改定</li>
            <li>データ保持期間の変更</li>
            <li>第三者提供に関する条項の追加</li>
          </ul>
        </div>
      </AlertBody>
      <AlertActions>
        <Button plain>後で確認</Button>
        <Button>同意する</Button>
      </AlertActions>
    </Alert>
  ),
};

export const AllSizes: StoryObj = {
  render: () => {
    const sizes = [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
    ] as const;
    return (
      <div className="space-y-4">
        {sizes.map((size) => (
          <Alert key={size} open onClose={() => {}} size={size}>
            <AlertTitle>サイズ: {size}</AlertTitle>
            <AlertDescription>
              このアラートは {size} サイズで表示されています。
            </AlertDescription>
            <AlertActions>
              <Button plain>閉じる</Button>
              <Button>確認</Button>
            </AlertActions>
          </Alert>
        ))}
      </div>
    );
  },
};
