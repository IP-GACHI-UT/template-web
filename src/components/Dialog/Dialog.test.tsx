import { render, screen } from "@testing-library/react";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "./Dialog";

describe("Dialog", () => {
  it("renders when open", async () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogTitle>Test Dialog</DialogTitle>
      </Dialog>,
    );
    expect(await screen.findByText("Test Dialog")).toBeInTheDocument();
  });

  it("renders DialogDescription text", async () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogDescription>Dialog description</DialogDescription>
      </Dialog>,
    );
    expect(await screen.findByText("Dialog description")).toBeInTheDocument();
  });

  it("renders DialogBody children", async () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogBody>
          <p>Body content</p>
        </DialogBody>
      </Dialog>,
    );
    expect(await screen.findByText("Body content")).toBeInTheDocument();
  });

  it("renders DialogActions with buttons", async () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogActions>
          <button type="button">Cancel</button>
          <button type="button">Confirm</button>
        </DialogActions>
      </Dialog>,
    );
    expect(
      await screen.findByRole("button", { name: "Cancel" }),
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: "Confirm" }),
    ).toBeInTheDocument();
  });

  it("applies custom className to DialogBody", async () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogBody data-testid="dialog-body" className="custom-body">
          Content
        </DialogBody>
      </Dialog>,
    );
    expect(await screen.findByTestId("dialog-body")).toHaveClass("custom-body");
  });
});
