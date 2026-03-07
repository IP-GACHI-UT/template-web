import { render, screen } from "@testing-library/react";
import { Input, InputGroup } from "./Input";

describe("Input", () => {
  it("renders without crashing", () => {
    const { container } = render(<Input type="text" />);
    expect(container.querySelector("input")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(<Input type="text" placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
  });

  it("renders with different types", () => {
    const { container } = render(<Input type="email" />);
    const input = container.querySelector("input");
    expect(input).toHaveAttribute("type", "email");
  });

  it("applies custom className to wrapper span", () => {
    const { container } = render(
      <Input type="text" className="custom-input" />,
    );
    const span = container.querySelector("[data-slot='control']");
    expect(span).toHaveClass("custom-input");
  });

  it("renders InputGroup with data-slot", () => {
    const { container } = render(
      <InputGroup>
        <Input type="text" />
      </InputGroup>,
    );
    expect(
      container.querySelector("[data-slot='control']"),
    ).toBeInTheDocument();
  });
});
