import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders with presentation role", () => {
    render(<Divider />);
    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("renders as an hr element", () => {
    const { container } = render(<Divider />);
    expect(container.querySelector("hr")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Divider className="custom-divider" />);
    expect(screen.getByRole("presentation")).toHaveClass("custom-divider");
  });

  it("renders with soft variant", () => {
    render(<Divider soft />);
    const hr = screen.getByRole("presentation");
    expect(hr).toBeInTheDocument();
  });

  it("passes additional HTML attributes", () => {
    render(<Divider data-testid="my-divider" />);
    expect(screen.getByTestId("my-divider")).toBeInTheDocument();
  });
});
