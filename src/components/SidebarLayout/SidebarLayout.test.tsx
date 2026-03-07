import { render, screen } from "@testing-library/react";
import { SidebarLayout } from "./SidebarLayout";

describe("SidebarLayout", () => {
  it("renders children", () => {
    render(
      <SidebarLayout navbar={<nav />} sidebar={<aside />}>
        <div>Main content</div>
      </SidebarLayout>,
    );
    expect(screen.getByText("Main content")).toBeInTheDocument();
  });

  it("renders main element", () => {
    render(
      <SidebarLayout navbar={<nav />} sidebar={<aside />}>
        <div>Content</div>
      </SidebarLayout>,
    );
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders navbar content", () => {
    render(
      <SidebarLayout navbar={<span>Navbar content</span>} sidebar={<aside />}>
        <div>Content</div>
      </SidebarLayout>,
    );
    expect(screen.getByText("Navbar content")).toBeInTheDocument();
  });

  it("renders sidebar content", () => {
    render(
      <SidebarLayout navbar={<nav />} sidebar={<span>Sidebar content</span>}>
        <div>Content</div>
      </SidebarLayout>,
    );
    expect(
      screen.getAllByText("Sidebar content").length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders open navigation button", () => {
    render(
      <SidebarLayout navbar={<nav />} sidebar={<aside />}>
        <div>Content</div>
      </SidebarLayout>,
    );
    expect(
      screen.getByRole("button", { name: "Open navigation" }),
    ).toBeInTheDocument();
  });
});
