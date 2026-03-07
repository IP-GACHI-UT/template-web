import type { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "./Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationPrevious href="#" />
      <PaginationList>
        <PaginationPage href="#" current>
          1
        </PaginationPage>
        <PaginationPage href="#">2</PaginationPage>
        <PaginationPage href="#">3</PaginationPage>
      </PaginationList>
      <PaginationNext href="#" />
    </Pagination>
  ),
};
