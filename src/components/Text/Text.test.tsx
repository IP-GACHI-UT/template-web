import { render, screen } from "@testing-library/react";
import { Code, Strong, Text, TextLink } from "./Text";

describe("Text", () => {
  it("renders paragraph text", () => {
    render(<Text>Hello world</Text>);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("renders strong text", () => {
    render(<Strong>Bold text</Strong>);
    expect(screen.getByText("Bold text")).toBeInTheDocument();
  });

  it("renders code text", () => {
    render(<Code>code</Code>);
    expect(screen.getByText("code")).toBeInTheDocument();
  });

  it("renders Text as p element with data-slot", () => {
    const { container } = render(<Text>Paragraph</Text>);
    const p = container.querySelector("p");
    expect(p).toBeInTheDocument();
    expect(p).toHaveAttribute("data-slot", "text");
  });

  it("applies custom className to Text", () => {
    render(<Text className="custom-text">Styled</Text>);
    expect(screen.getByText("Styled")).toHaveClass("custom-text");
  });

  it("applies custom className to Strong", () => {
    render(<Strong className="custom-strong">Bold</Strong>);
    expect(screen.getByText("Bold")).toHaveClass("custom-strong");
  });

  it("applies custom className to Code", () => {
    render(<Code className="custom-code">snippet</Code>);
    expect(screen.getByText("snippet")).toHaveClass("custom-code");
  });

  it("renders TextLink as an anchor", () => {
    render(<TextLink href="/about">About</TextLink>);
    const link = screen.getByRole("link", { name: "About" });
    expect(link).toHaveAttribute("href", "/about");
  });
});
