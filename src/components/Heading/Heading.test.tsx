import { render, screen } from "@testing-library/react";
import { Heading, Subheading } from "./Heading";

describe("Heading", () => {
  it("renders heading text", () => {
    render(<Heading>Main Title</Heading>);
    expect(
      screen.getByRole("heading", { name: "Main Title" }),
    ).toBeInTheDocument();
  });

  it("renders subheading", () => {
    render(<Subheading>Sub Title</Subheading>);
    expect(
      screen.getByRole("heading", { name: "Sub Title" }),
    ).toBeInTheDocument();
  });

  it("renders as h1 by default", () => {
    render(<Heading>Default</Heading>);
    const heading = screen.getByRole("heading", { name: "Default" });
    expect(heading.tagName).toBe("H1");
  });

  it("renders with custom level", () => {
    render(<Heading level={3}>Level 3</Heading>);
    const heading = screen.getByRole("heading", { name: "Level 3" });
    expect(heading.tagName).toBe("H3");
  });

  it("renders Subheading as h2 by default", () => {
    render(<Subheading>Sub Default</Subheading>);
    const heading = screen.getByRole("heading", { name: "Sub Default" });
    expect(heading.tagName).toBe("H2");
  });

  it("applies custom className to Heading", () => {
    render(<Heading className="custom-heading">Styled</Heading>);
    const heading = screen.getByRole("heading", { name: "Styled" });
    expect(heading).toHaveClass("custom-heading");
  });

  it("applies custom className to Subheading", () => {
    render(<Subheading className="custom-sub">Styled Sub</Subheading>);
    const heading = screen.getByRole("heading", { name: "Styled Sub" });
    expect(heading).toHaveClass("custom-sub");
  });
});
