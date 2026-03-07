import { render, screen } from "@testing-library/react";
import {
  Listbox,
  ListboxDescription,
  ListboxLabel,
  ListboxOption,
} from "./Listbox";

describe("Listbox", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Listbox value="a" onChange={() => {}}>
        <ListboxOption value="a">
          <ListboxLabel>Option A</ListboxLabel>
        </ListboxOption>
      </Listbox>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with aria-label", () => {
    render(
      <Listbox value="a" onChange={() => {}} aria-label="Choose option">
        <ListboxOption value="a">
          <ListboxLabel>Option A</ListboxLabel>
        </ListboxOption>
      </Listbox>,
    );
    expect(screen.getByLabelText("Choose option")).toBeInTheDocument();
  });

  it("renders ListboxLabel", () => {
    render(<ListboxLabel>Label text</ListboxLabel>);
    expect(screen.getByText("Label text")).toBeInTheDocument();
  });

  it("renders ListboxDescription", () => {
    render(<ListboxDescription>Description text</ListboxDescription>);
    expect(screen.getByText("Description text")).toBeInTheDocument();
  });

  it("applies custom className to ListboxLabel", () => {
    render(<ListboxLabel className="custom-label">Styled</ListboxLabel>);
    expect(screen.getByText("Styled")).toHaveClass("custom-label");
  });
});
