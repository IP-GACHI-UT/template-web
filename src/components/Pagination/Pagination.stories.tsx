import type { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationGap,
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

export const DisabledPrevious: Story = {
  render: () => (
    <Pagination>
      <PaginationPrevious href={null} />
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

export const DisabledNext: Story = {
  render: () => (
    <Pagination>
      <PaginationPrevious href="#" />
      <PaginationList>
        <PaginationPage href="#">1</PaginationPage>
        <PaginationPage href="#">2</PaginationPage>
        <PaginationPage href="#" current>
          3
        </PaginationPage>
      </PaginationList>
      <PaginationNext href={null} />
    </Pagination>
  ),
};

export const WithGap: Story = {
  render: () => (
    <Pagination>
      <PaginationPrevious href="#" />
      <PaginationList>
        <PaginationPage href="#" current>
          1
        </PaginationPage>
        <PaginationPage href="#">2</PaginationPage>
        <PaginationGap />
        <PaginationPage href="#">9</PaginationPage>
        <PaginationPage href="#">10</PaginationPage>
      </PaginationList>
      <PaginationNext href="#" />
    </Pagination>
  ),
};
