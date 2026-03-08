"use client";

import { useState } from "react";
import {
  Alert,
  AlertActions,
  AlertBody,
  AlertDescription,
  AlertTitle,
} from "@/components/Alert";
import { Button } from "@/components/Button";
import { DemoSection } from "../_components/DemoSection";
import { TemplatePageHeader } from "../_components/TemplatePageHeader";

export default function AlertPage() {
  const [open, setOpen] = useState(false);
  const [smOpen, setSmOpen] = useState(false);
  const [lgOpen, setLgOpen] = useState(false);
  const [bodyOpen, setBodyOpen] = useState(false);

  return (
    <div className="max-w-4xl">
      <TemplatePageHeader
        title="Alert"
        description="アラートダイアログのパターン。"
      />
      <div className="mt-8 space-y-6">
        <DemoSection
          title="Basic Alert"
          description="基本的なアラートダイアログ。"
        >
          <Button onClick={() => setOpen(true)}>Open Alert</Button>
          <Alert open={open} onClose={() => setOpen(false)}>
            <AlertTitle>Are you sure?</AlertTitle>
            <AlertDescription>This action cannot be undone.</AlertDescription>
            <AlertActions>
              <Button plain onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button color="red" onClick={() => setOpen(false)}>
                Delete
              </Button>
            </AlertActions>
          </Alert>
        </DemoSection>
        <DemoSection
          title="Sizes"
          description="サイズバリエーション（sm, md, lg）。"
        >
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => setSmOpen(true)}>Small (sm)</Button>
            <Button onClick={() => setOpen(true)}>Medium (md)</Button>
            <Button onClick={() => setLgOpen(true)}>Large (lg)</Button>
          </div>
          <Alert size="sm" open={smOpen} onClose={() => setSmOpen(false)}>
            <AlertTitle>Confirm action</AlertTitle>
            <AlertDescription>
              Are you sure you want to proceed?
            </AlertDescription>
            <AlertActions>
              <Button plain onClick={() => setSmOpen(false)}>
                No
              </Button>
              <Button onClick={() => setSmOpen(false)}>Yes</Button>
            </AlertActions>
          </Alert>
          <Alert size="lg" open={lgOpen} onClose={() => setLgOpen(false)}>
            <AlertTitle>Delete account</AlertTitle>
            <AlertDescription>
              This will permanently delete your account and all associated data.
              This action cannot be reversed. Are you absolutely sure?
            </AlertDescription>
            <AlertBody>
              削除対象: アカウント、プロフィール、投稿データなど全ての関連情報
            </AlertBody>
            <AlertActions>
              <Button plain onClick={() => setLgOpen(false)}>
                Cancel
              </Button>
              <Button color="red" onClick={() => setLgOpen(false)}>
                Delete my account
              </Button>
            </AlertActions>
          </Alert>
        </DemoSection>
        <DemoSection
          title="AlertBody"
          description="AlertBody を使用した構造化コンテンツ付きアラート。"
        >
          <Button onClick={() => setBodyOpen(true)}>
            Open Alert with Body
          </Button>
          <Alert open={bodyOpen} onClose={() => setBodyOpen(false)}>
            <AlertTitle>データを削除しますか？</AlertTitle>
            <AlertDescription>
              以下の項目が完全に削除されます。この操作は取り消せません。
            </AlertDescription>
            <AlertBody>
              <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                <li>ユーザープロフィール情報</li>
                <li>投稿データおよびコメント</li>
                <li>アップロード済みファイル</li>
                <li>アカウント設定と通知設定</li>
              </ul>
            </AlertBody>
            <AlertActions>
              <Button plain onClick={() => setBodyOpen(false)}>
                キャンセル
              </Button>
              <Button color="red" onClick={() => setBodyOpen(false)}>
                削除する
              </Button>
            </AlertActions>
          </Alert>
        </DemoSection>
      </div>
    </div>
  );
}
