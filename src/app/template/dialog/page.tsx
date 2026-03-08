"use client";

import { useReducer } from "react";
import { Button } from "@/components/Button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/Dialog";
import { Field, Label } from "@/components/Fieldset";
import { Input } from "@/components/Input";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

type DialogState = {
  basic: boolean;
  form: boolean;
  sm: boolean;
  lg: boolean;
  xl: boolean;
  destructive: boolean;
};

type DialogAction =
  | { type: "open"; dialog: keyof DialogState }
  | { type: "close"; dialog: keyof DialogState };

function dialogReducer(state: DialogState, action: DialogAction): DialogState {
  return { ...state, [action.dialog]: action.type === "open" };
}

export default function DialogPage() {
  const [dialogs, dispatch] = useReducer(dialogReducer, {
    basic: false,
    form: false,
    sm: false,
    lg: false,
    xl: false,
    destructive: false,
  });

  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Dialog"
        description="ダイアログ（モーダル）のパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection title="Basic Dialog" description="基本的なダイアログ。">
          <Button onClick={() => dispatch({ type: "open", dialog: "basic" })}>
            Open Dialog
          </Button>
          <Dialog
            open={dialogs.basic}
            onClose={() => dispatch({ type: "close", dialog: "basic" })}
          >
            <DialogTitle>Payment successful</DialogTitle>
            <DialogDescription>
              Your payment has been successfully processed.
            </DialogDescription>
            <DialogActions>
              <Button
                onClick={() => dispatch({ type: "close", dialog: "basic" })}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </DemoSection>
        <DemoSection
          title="Dialog with Form"
          description="フォーム付きダイアログ。"
        >
          <Button onClick={() => dispatch({ type: "open", dialog: "form" })}>
            Edit Profile
          </Button>
          <Dialog
            open={dialogs.form}
            onClose={() => dispatch({ type: "close", dialog: "form" })}
          >
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your account details below.
            </DialogDescription>
            <DialogBody>
              <Field>
                <Label>Name</Label>
                <Input type="text" placeholder="Your name" />
              </Field>
            </DialogBody>
            <DialogActions>
              <Button
                plain
                onClick={() => dispatch({ type: "close", dialog: "form" })}
              >
                Cancel
              </Button>
              <Button
                onClick={() => dispatch({ type: "close", dialog: "form" })}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </DemoSection>
        <DemoSection
          title="Sizes"
          description="サイズバリエーション（sm, lg, 2xl）。"
        >
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => dispatch({ type: "open", dialog: "sm" })}>
              Small (sm)
            </Button>
            <Button onClick={() => dispatch({ type: "open", dialog: "lg" })}>
              Large (lg)
            </Button>
            <Button onClick={() => dispatch({ type: "open", dialog: "xl" })}>
              2XL (2xl)
            </Button>
          </div>
          <Dialog
            size="sm"
            open={dialogs.sm}
            onClose={() => dispatch({ type: "close", dialog: "sm" })}
          >
            <DialogTitle>Small dialog</DialogTitle>
            <DialogDescription>
              This is a compact dialog for simple messages.
            </DialogDescription>
            <DialogActions>
              <Button onClick={() => dispatch({ type: "close", dialog: "sm" })}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            size="lg"
            open={dialogs.lg}
            onClose={() => dispatch({ type: "close", dialog: "lg" })}
          >
            <DialogTitle>Large dialog</DialogTitle>
            <DialogDescription>
              This dialog has more space for detailed content and forms.
            </DialogDescription>
            <DialogBody>
              <Field>
                <Label>Email</Label>
                <Input type="email" placeholder="you@example.com" />
              </Field>
            </DialogBody>
            <DialogActions>
              <Button
                plain
                onClick={() => dispatch({ type: "close", dialog: "lg" })}
              >
                Cancel
              </Button>
              <Button onClick={() => dispatch({ type: "close", dialog: "lg" })}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            size="2xl"
            open={dialogs.xl}
            onClose={() => dispatch({ type: "close", dialog: "xl" })}
          >
            <DialogTitle>Extra large dialog</DialogTitle>
            <DialogDescription>
              This is the widest dialog variant, suitable for complex forms or
              detailed content.
            </DialogDescription>
            <DialogBody>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <Label>First name</Label>
                  <Input type="text" placeholder="First name" />
                </Field>
                <Field>
                  <Label>Last name</Label>
                  <Input type="text" placeholder="Last name" />
                </Field>
              </div>
            </DialogBody>
            <DialogActions>
              <Button
                plain
                onClick={() => dispatch({ type: "close", dialog: "xl" })}
              >
                Cancel
              </Button>
              <Button onClick={() => dispatch({ type: "close", dialog: "xl" })}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </DemoSection>
        <DemoSection
          title="削除確認"
          description="危険なアクションを確認するダイアログ。"
        >
          <Button
            color="red"
            onClick={() => dispatch({ type: "open", dialog: "destructive" })}
          >
            アカウントを削除
          </Button>
          <Dialog
            open={dialogs.destructive}
            onClose={() => dispatch({ type: "close", dialog: "destructive" })}
          >
            <DialogTitle>アカウントの削除</DialogTitle>
            <DialogDescription>
              この操作は取り消せません。アカウントに関連するすべてのデータが完全に削除されます。本当に削除しますか？
            </DialogDescription>
            <DialogActions>
              <Button
                plain
                onClick={() =>
                  dispatch({ type: "close", dialog: "destructive" })
                }
              >
                キャンセル
              </Button>
              <Button
                color="red"
                onClick={() =>
                  dispatch({ type: "close", dialog: "destructive" })
                }
              >
                削除する
              </Button>
            </DialogActions>
          </Dialog>
        </DemoSection>
      </div>
    </div>
  );
}
