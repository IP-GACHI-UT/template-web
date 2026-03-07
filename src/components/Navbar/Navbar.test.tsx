import { render, screen } from "@testing-library/react";
import { Navbar, NavbarDivider, NavbarLabel, NavbarSpacer } from "./Navbar";

describe("Navbar", () => {
  it("renders navigation", () => {
    render(<Navbar>Nav content</Navbar>);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders children inside nav", () => {
    render(<Navbar>Navigation items</Navbar>);
    expect(screen.getByText("Navigation items")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Navbar className="custom-nav">Content</Navbar>);
    expect(screen.getByRole("navigation")).toHaveClass("custom-nav");
  });

  it("renders NavbarDivider with aria-hidden", () => {
    const { container } = render(<NavbarDivider />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });

  it("renders NavbarLabel text", () => {
    render(<NavbarLabel>Dashboard</NavbarLabel>);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("renders NavbarSpacer with aria-hidden", () => {
    const { container } = render(<NavbarSpacer />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });
});
