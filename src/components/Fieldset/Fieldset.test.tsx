import { render, screen } from "@testing-library/react";
import {
  Description,
  ErrorMessage,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "./Fieldset";

describe("Fieldset", () => {
  it("renders legend text", () => {
    render(
      <Fieldset>
        <Legend>Test Legend</Legend>
      </Fieldset>,
    );
    expect(screen.getByText("Test Legend")).toBeInTheDocument();
  });

  it("renders Label text inside Field", () => {
    render(
      <Field>
        <Label>Username</Label>
      </Field>,
    );
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("renders Description text inside Field", () => {
    render(
      <Field>
        <Label>Username</Label>
        <Description>Enter your username</Description>
      </Field>,
    );
    expect(screen.getByText("Enter your username")).toBeInTheDocument();
  });

  it("renders ErrorMessage text inside Field", () => {
    render(
      <Field>
        <Label>Email</Label>
        <ErrorMessage>This field is required</ErrorMessage>
      </Field>,
    );
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("renders FieldGroup with data-slot attribute", () => {
    const { container } = render(
      <FieldGroup>
        <input type="text" />
      </FieldGroup>,
    );
    expect(
      container.querySelector("[data-slot='control']"),
    ).toBeInTheDocument();
  });
});
