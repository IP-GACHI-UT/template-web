import { render, screen } from "@testing-library/react";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarLabel,
  SidebarSpacer,
} from "./Sidebar";

describe("Sidebar", () => {
  it("renders navigation", () => {
    render(<Sidebar>Sidebar content</Sidebar>);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Sidebar className="custom-sidebar">Content</Sidebar>);
    expect(screen.getByRole("navigation")).toHaveClass("custom-sidebar");
  });

  it("renders SidebarHeader", () => {
    render(<SidebarHeader data-testid="header">Header</SidebarHeader>);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  it("renders SidebarBody and SidebarFooter", () => {
    render(
      <>
        <SidebarBody data-testid="body">Body</SidebarBody>
        <SidebarFooter data-testid="footer">Footer</SidebarFooter>
      </>,
    );
    expect(screen.getByTestId("body")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders SidebarHeading as h3", () => {
    render(<SidebarHeading>Section Title</SidebarHeading>);
    expect(
      screen.getByRole("heading", { name: "Section Title" }),
    ).toBeInTheDocument();
  });

  it("renders SidebarLabel text", () => {
    render(<SidebarLabel>Label</SidebarLabel>);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("renders SidebarSpacer with aria-hidden", () => {
    const { container } = render(<SidebarSpacer />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });
});
