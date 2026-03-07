import { render } from "@testing-library/react";
import { Switch, SwitchGroup } from "./Switch";

describe("Switch", () => {
  it("renders without crashing", () => {
    const { container } = render(<Switch />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<Switch className="custom-switch" />);
    expect(container.firstChild).toHaveClass("custom-switch");
  });

  it("renders with color prop", () => {
    const { container } = render(<Switch color="blue" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with data-slot attribute", () => {
    const { container } = render(<Switch />);
    expect(
      container.querySelector("[data-slot='control']"),
    ).toBeInTheDocument();
  });

  it("renders SwitchGroup with data-slot", () => {
    const { container } = render(
      <SwitchGroup>
        <Switch />
      </SwitchGroup>,
    );
    expect(
      container.querySelector("[data-slot='control']"),
    ).toBeInTheDocument();
  });
});
