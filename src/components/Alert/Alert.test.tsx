import { render, screen } from "@testing-library/react";
import {
  Alert,
  AlertActions,
  AlertBody,
  AlertDescription,
  AlertTitle,
} from "./Alert";

describe("Alert", () => {
  it("renders when open", async () => {
    render(
      <Alert open onClose={() => {}}>
        <AlertTitle>Test Alert</AlertTitle>
      </Alert>,
    );
    expect(await screen.findByText("Test Alert")).toBeInTheDocument();
  });

  it("renders AlertDescription text", async () => {
    render(
      <Alert open onClose={() => {}}>
        <AlertDescription>This is a description</AlertDescription>
      </Alert>,
    );
    expect(
      await screen.findByText("This is a description"),
    ).toBeInTheDocument();
  });

  it("renders AlertBody children", async () => {
    render(
      <Alert open onClose={() => {}}>
        <AlertBody>
          <span>Body content</span>
        </AlertBody>
      </Alert>,
    );
    expect(await screen.findByText("Body content")).toBeInTheDocument();
  });

  it("renders AlertActions children", async () => {
    render(
      <Alert open onClose={() => {}}>
        <AlertActions>
          <button type="button">OK</button>
        </AlertActions>
      </Alert>,
    );
    expect(
      await screen.findByRole("button", { name: "OK" }),
    ).toBeInTheDocument();
  });

  it("applies custom className to AlertBody", async () => {
    render(
      <Alert open onClose={() => {}}>
        <AlertBody data-testid="alert-body" className="custom-class">
          Content
        </AlertBody>
      </Alert>,
    );
    expect(await screen.findByTestId("alert-body")).toHaveClass("custom-class");
  });
});
