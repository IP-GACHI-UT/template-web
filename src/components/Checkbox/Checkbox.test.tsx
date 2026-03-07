import { render } from "@testing-library/react";
import { Checkbox, CheckboxField, CheckboxGroup } from "./Checkbox";

describe("Checkbox", () => {
  it("renders without crashing", () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Checkbox className="custom-checkbox" />);
    expect(container.firstChild).toHaveClass("custom-checkbox");
  });

  it("renders with color prop", () => {
    const { container } = render(<Checkbox color="red" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders CheckboxGroup", () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>,
    );
    expect(container.firstChild).toHaveAttribute("data-slot", "control");
  });

  it("renders CheckboxField", () => {
    const { container } = render(
      <CheckboxField>
        <Checkbox />
      </CheckboxField>,
    );
    expect(container.querySelector("[data-slot='field']")).toBeInTheDocument();
  });
});
