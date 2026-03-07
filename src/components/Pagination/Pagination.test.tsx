import { render, screen } from "@testing-library/react";
import {
  Pagination,
  PaginationGap,
  PaginationNext,
  PaginationPrevious,
} from "./Pagination";

describe("Pagination", () => {
  it("renders navigation", () => {
    render(<Pagination>Pages</Pagination>);
    expect(
      screen.getByRole("navigation", { name: "Page navigation" }),
    ).toBeInTheDocument();
  });

  it("renders with custom aria-label", () => {
    render(<Pagination aria-label="Custom pagination">Pages</Pagination>);
    expect(
      screen.getByRole("navigation", { name: "Custom pagination" }),
    ).toBeInTheDocument();
  });

  it("renders PaginationPrevious with disabled state", () => {
    render(<PaginationPrevious />);
    expect(
      screen.getByRole("button", { name: "Previous page" }),
    ).toBeInTheDocument();
  });

  it("renders PaginationNext with disabled state", () => {
    render(<PaginationNext />);
    expect(
      screen.getByRole("button", { name: "Next page" }),
    ).toBeInTheDocument();
  });

  it("renders PaginationGap with aria-hidden", () => {
    const { container } = render(<PaginationGap />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });
});
