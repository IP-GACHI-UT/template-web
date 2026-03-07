import { render, screen } from "@testing-library/react";
import {
  Alert,
  AlertActions,
  AlertBody,
  AlertDescription,
  AlertTitle,
} from "./Alert";

describe("Alert", () => {
  it("renders when open", () => {
    render(
      <Alert open onClose={() => {}}>
        <AlertTitle>Test Alert</AlertTitle>
      </Alert>,
    );
    expect(screen.getByText("Test Alert")).toBeInTheDocument();
  });

  it("renders AlertDescription text", () => {
    render(
      <Alert open onClose={() => {}}>
        <AlertDescription>This is a description</AlertDescription>
      </Alert>,
    );
    expect(screen.getByText("This is a description")).toBeInTheDocument();
  });

  it("renders AlertBody children", () => {
    render(
      <Alert open onClose={() => {}}>
        <AlertBody>
          <span>Body content</span>
        </AlertBody>
      </Alert>,
    );
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });

  it("renders AlertActions children", () => {
    render(
      <Alert open onClose={() => {}}>
        <AlertActions>
          <button type="button">OK</button>
        </AlertActions>
      </Alert>,
    );
    expect(screen.getByRole("button", { name: "OK" })).toBeInTheDocument();
  });

  it("applies custom className to AlertBody", () => {
    render(
      <Alert open onClose={() => {}}>
        <AlertBody data-testid="alert-body" className="custom-class">
          Content
        </AlertBody>
      </Alert>,
    );
    expect(screen.getByTestId("alert-body")).toHaveClass("custom-class");
  });
});
