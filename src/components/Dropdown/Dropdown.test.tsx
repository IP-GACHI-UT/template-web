import { render, screen } from "@testing-library/react";
import { Button } from "../Button";
import {
  Dropdown,
  DropdownButton,
  DropdownHeader,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "./Dropdown";

describe("Dropdown", () => {
  it("renders the button", () => {
    render(
      <Dropdown>
        <DropdownButton as={Button}>Options</DropdownButton>
        <DropdownMenu>
          <DropdownItem>
            <DropdownLabel>Edit</DropdownLabel>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );
    expect(screen.getByRole("button", { name: "Options" })).toBeInTheDocument();
  });

  it("renders DropdownButton with custom text", () => {
    render(
      <Dropdown>
        <DropdownButton as={Button}>Actions</DropdownButton>
        <DropdownMenu>
          <DropdownItem>
            <DropdownLabel>Delete</DropdownLabel>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );
    expect(screen.getByRole("button", { name: "Actions" })).toBeInTheDocument();
  });

  it("renders DropdownLabel text", () => {
    render(<DropdownLabel>Label text</DropdownLabel>);
    expect(screen.getByText("Label text")).toBeInTheDocument();
  });

  it("renders DropdownHeader", () => {
    render(
      <DropdownHeader data-testid="header">Header content</DropdownHeader>,
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("Header content")).toBeInTheDocument();
  });

  it("applies custom className to DropdownLabel", () => {
    render(<DropdownLabel className="custom-label">Styled</DropdownLabel>);
    expect(screen.getByText("Styled")).toHaveClass("custom-label");
  });
});
