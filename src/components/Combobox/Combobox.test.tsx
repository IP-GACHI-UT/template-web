import { render, screen } from "@testing-library/react";
import {
  Combobox,
  ComboboxDescription,
  ComboboxLabel,
  ComboboxOption,
} from "./Combobox";

describe("Combobox", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Combobox
        options={["a", "b"]}
        displayValue={(v) => v ?? ""}
        value={null}
        onChange={() => {}}
      >
        {(option) => (
          <ComboboxOption value={option}>
            <ComboboxLabel>{option}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(
      <Combobox
        options={["a"]}
        displayValue={(v) => v ?? ""}
        value={null}
        onChange={() => {}}
        placeholder="Select..."
      >
        {(option) => (
          <ComboboxOption value={option}>
            <ComboboxLabel>{option}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>,
    );
    expect(screen.getByPlaceholderText("Select...")).toBeInTheDocument();
  });

  it("renders with aria-label", () => {
    render(
      <Combobox
        options={["a"]}
        displayValue={(v) => v ?? ""}
        value={null}
        onChange={() => {}}
        aria-label="Choose item"
      >
        {(option) => (
          <ComboboxOption value={option}>
            <ComboboxLabel>{option}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>,
    );
    expect(screen.getByLabelText("Choose item")).toBeInTheDocument();
  });

  it("renders ComboboxLabel", () => {
    render(<ComboboxLabel>Label text</ComboboxLabel>);
    expect(screen.getByText("Label text")).toBeInTheDocument();
  });

  it("renders ComboboxDescription", () => {
    render(<ComboboxDescription>Description text</ComboboxDescription>);
    expect(screen.getByText("Description text")).toBeInTheDocument();
  });
});
