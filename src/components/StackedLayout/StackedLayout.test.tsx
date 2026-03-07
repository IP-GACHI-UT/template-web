import { render, screen } from "@testing-library/react";
import { StackedLayout } from "./StackedLayout";

describe("StackedLayout", () => {
  it("renders children", () => {
    render(
      <StackedLayout navbar={<nav />} sidebar={<aside />}>
        <div>Stacked content</div>
      </StackedLayout>,
    );
    expect(screen.getByText("Stacked content")).toBeInTheDocument();
  });

  it("renders main element", () => {
    render(
      <StackedLayout navbar={<nav />} sidebar={<aside />}>
        <div>Content</div>
      </StackedLayout>,
    );
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders navbar content", () => {
    render(
      <StackedLayout navbar={<span>Top navbar</span>} sidebar={<aside />}>
        <div>Content</div>
      </StackedLayout>,
    );
    expect(screen.getByText("Top navbar")).toBeInTheDocument();
  });

  it("renders open navigation button", () => {
    render(
      <StackedLayout navbar={<nav />} sidebar={<aside />}>
        <div>Content</div>
      </StackedLayout>,
    );
    expect(
      screen.getByRole("button", { name: "Open navigation" }),
    ).toBeInTheDocument();
  });

  it("renders header element", () => {
    render(
      <StackedLayout navbar={<nav />} sidebar={<aside />}>
        <div>Content</div>
      </StackedLayout>,
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
