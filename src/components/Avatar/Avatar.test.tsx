import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders initials in SVG", () => {
    render(<Avatar initials="AB" />);
    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Avatar initials="CD" className="custom-avatar" />,
    );
    const span = container.querySelector("span");
    expect(span).toHaveClass("custom-avatar");
  });

  it("renders with square variant", () => {
    const { container } = render(<Avatar initials="EF" square />);
    const span = container.querySelector("span");
    expect(span).toHaveAttribute("data-slot", "avatar");
  });

  it("renders with alt text as title", () => {
    render(<Avatar initials="GH" alt="User Avatar" />);
    expect(screen.getByText("User Avatar")).toBeInTheDocument();
  });

  it("sets aria-hidden on svg when no alt is provided", () => {
    const { container } = render(<Avatar initials="IJ" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });
});
