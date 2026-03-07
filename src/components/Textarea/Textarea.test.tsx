import { render, screen } from "@testing-library/react";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders without crashing", () => {
    const { container } = render(<Textarea />);
    expect(container.querySelector("textarea")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(<Textarea placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
  });

  it("applies custom className to wrapper span", () => {
    const { container } = render(<Textarea className="custom-textarea" />);
    const span = container.querySelector("[data-slot='control']");
    expect(span).toHaveClass("custom-textarea");
  });

  it("renders with rows attribute", () => {
    const { container } = render(<Textarea rows={5} />);
    const textarea = container.querySelector("textarea");
    expect(textarea).toHaveAttribute("rows", "5");
  });

  it("renders as a textarea element", () => {
    render(<Textarea aria-label="Comment" />);
    expect(
      screen.getByRole("textbox", { name: "Comment" }),
    ).toBeInTheDocument();
  });
});
