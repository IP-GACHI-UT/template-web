import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>名前</TableHeader>
          <TableHeader>メールアドレス</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>田中太郎</TableCell>
          <TableCell>tanaka@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>佐藤花子</TableCell>
          <TableCell>sato@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Dense: Story = {
  render: () => (
    <Table dense={true}>
      <TableHead>
        <TableRow>
          <TableHeader>名前</TableHeader>
          <TableHeader>メールアドレス</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>田中太郎</TableCell>
          <TableCell>tanaka@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>佐藤花子</TableCell>
          <TableCell>sato@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Grid: Story = {
  render: () => (
    <Table grid={true}>
      <TableHead>
        <TableRow>
          <TableHeader>名前</TableHeader>
          <TableHeader>メールアドレス</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>田中太郎</TableCell>
          <TableCell>tanaka@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>佐藤花子</TableCell>
          <TableCell>sato@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table striped={true}>
      <TableHead>
        <TableRow>
          <TableHeader>名前</TableHeader>
          <TableHeader>メールアドレス</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>田中太郎</TableCell>
          <TableCell>tanaka@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>佐藤花子</TableCell>
          <TableCell>sato@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>鈴木一郎</TableCell>
          <TableCell>suzuki@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>高橋美咲</TableCell>
          <TableCell>takahashi@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Bleed: Story = {
  render: () => (
    <Table bleed={true}>
      <TableHead>
        <TableRow>
          <TableHeader>名前</TableHeader>
          <TableHeader>メールアドレス</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>田中太郎</TableCell>
          <TableCell>tanaka@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>佐藤花子</TableCell>
          <TableCell>sato@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithLink: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>名前</TableHeader>
          <TableHeader>メールアドレス</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow href="#" title="田中太郎の詳細">
          <TableCell>田中太郎</TableCell>
          <TableCell>tanaka@example.com</TableCell>
        </TableRow>
        <TableRow href="#" title="佐藤花子の詳細">
          <TableCell>佐藤花子</TableCell>
          <TableCell>sato@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
