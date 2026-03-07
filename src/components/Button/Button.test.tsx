import { render, screen } from "@testing-library/react";
import { Button, TouchTarget } from "./Button";

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Button className="custom-btn">Styled</Button>);
    const button = screen.getByRole("button", { name: "Styled" });
    expect(button).toHaveClass("custom-btn");
  });

  it("renders as a link when href is provided", () => {
    render(<Button href="/test">Go</Button>);
    const link = screen.getByRole("link", { name: "Go" });
    expect(link).toHaveAttribute("href", "/test");
  });

  it("renders outline variant", () => {
    render(<Button outline>Outline</Button>);
    expect(screen.getByRole("button", { name: "Outline" })).toBeInTheDocument();
  });

  it("renders plain variant", () => {
    render(<Button plain>Plain</Button>);
    expect(screen.getByRole("button", { name: "Plain" })).toBeInTheDocument();
  });
});

describe("TouchTarget", () => {
  it("renders children", () => {
    render(<TouchTarget>Touch content</TouchTarget>);
    expect(screen.getByText("Touch content")).toBeInTheDocument();
  });
});
