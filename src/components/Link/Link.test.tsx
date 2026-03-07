import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  it("renders with href and children", () => {
    render(<Link href="/test">Test Link</Link>);
    const link = screen.getByText("Test Link");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/test");
  });

  it("renders as an anchor element", () => {
    render(<Link href="/page">Page</Link>);
    const link = screen.getByRole("link", { name: "Page" });
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe("A");
  });

  it("passes additional HTML attributes", () => {
    render(
      <Link href="/ext" target="_blank" rel="noopener">
        External
      </Link>,
    );
    const link = screen.getByRole("link", { name: "External" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener");
  });

  it("applies custom className", () => {
    render(
      <Link href="/styled" className="custom-link">
        Styled
      </Link>,
    );
    const link = screen.getByRole("link", { name: "Styled" });
    expect(link).toHaveClass("custom-link");
  });

  it("renders children correctly", () => {
    render(
      <Link href="/complex">
        <span>Icon</span> Click here
      </Link>,
    );
    expect(screen.getByText("Icon")).toBeInTheDocument();
    expect(screen.getByText(/Click here/)).toBeInTheDocument();
  });
});
