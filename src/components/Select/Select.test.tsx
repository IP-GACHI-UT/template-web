import { render, screen } from "@testing-library/react";
import { Select } from "./Select";

describe("Select", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Select>
        <option value="1">Option 1</option>
      </Select>,
    );
    expect(container.querySelector("select")).toBeInTheDocument();
  });

  it("renders options", () => {
    render(
      <Select>
        <option value="a">Alpha</option>
        <option value="b">Beta</option>
      </Select>,
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("applies custom className to wrapper span", () => {
    const { container } = render(
      <Select className="custom-select">
        <option value="1">Option 1</option>
      </Select>,
    );
    const span = container.querySelector("[data-slot='control']");
    expect(span).toHaveClass("custom-select");
  });

  it("renders with multiple attribute", () => {
    const { container } = render(
      <Select multiple>
        <option value="a">A</option>
        <option value="b">B</option>
      </Select>,
    );
    const select = container.querySelector("select");
    expect(select).toHaveAttribute("multiple");
  });

  it("renders chevron icon for single select", () => {
    const { container } = render(
      <Select>
        <option value="1">Option 1</option>
      </Select>,
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });
});
