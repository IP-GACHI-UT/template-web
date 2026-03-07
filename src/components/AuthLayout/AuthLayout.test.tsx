import { render, screen } from "@testing-library/react";
import { AuthLayout } from "./AuthLayout";

describe("AuthLayout", () => {
  it("renders with children text", () => {
    render(<AuthLayout>Test content</AuthLayout>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders a main element", () => {
    render(<AuthLayout>Content</AuthLayout>);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders multiple children", () => {
    render(
      <AuthLayout>
        <h1>Title</h1>
        <p>Description</p>
      </AuthLayout>,
    );
    expect(screen.getByRole("heading", { name: "Title" })).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("renders nested form elements", () => {
    render(
      <AuthLayout>
        <form>
          <input type="email" aria-label="Email" />
          <button type="submit">Login</button>
        </form>
      </AuthLayout>,
    );
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
});
