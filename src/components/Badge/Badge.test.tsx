import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders with children text", () => {
    render(<Badge>Status</Badge>);
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Badge className="custom-badge">Info</Badge>);
    expect(screen.getByText("Info")).toHaveClass("custom-badge");
  });

  it("renders with color prop", () => {
    render(<Badge color="red">Error</Badge>);
    const badge = screen.getByText("Error");
    expect(badge).toBeInTheDocument();
    expect(badge.tagName).toBe("SPAN");
  });

  it("renders with default zinc color", () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText("Default")).toBeInTheDocument();
  });

  it("passes additional HTML attributes", () => {
    render(
      <Badge data-testid="my-badge" title="badge tooltip">
        Label
      </Badge>,
    );
    const badge = screen.getByTestId("my-badge");
    expect(badge).toHaveAttribute("title", "badge tooltip");
  });
});
