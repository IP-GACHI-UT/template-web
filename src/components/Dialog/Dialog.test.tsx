import { render, screen } from "@testing-library/react";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "./Dialog";

describe("Dialog", () => {
  it("renders when open", () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogTitle>Test Dialog</DialogTitle>
      </Dialog>,
    );
    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
  });

  it("renders DialogDescription text", () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogDescription>Dialog description</DialogDescription>
      </Dialog>,
    );
    expect(screen.getByText("Dialog description")).toBeInTheDocument();
  });

  it("renders DialogBody children", () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogBody>
          <p>Body content</p>
        </DialogBody>
      </Dialog>,
    );
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });

  it("renders DialogActions with buttons", () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogActions>
          <button type="button">Cancel</button>
          <button type="button">Confirm</button>
        </DialogActions>
      </Dialog>,
    );
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Confirm" })).toBeInTheDocument();
  });

  it("applies custom className to DialogBody", () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogBody data-testid="dialog-body" className="custom-body">
          Content
        </DialogBody>
      </Dialog>,
    );
    expect(screen.getByTestId("dialog-body")).toHaveClass("custom-body");
  });
});
