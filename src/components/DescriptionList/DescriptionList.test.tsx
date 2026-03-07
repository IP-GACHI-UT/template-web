import { render, screen } from "@testing-library/react";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "./DescriptionList";

describe("DescriptionList", () => {
  it("renders with term and details text", () => {
    render(
      <DescriptionList>
        <DescriptionTerm>Term</DescriptionTerm>
        <DescriptionDetails>Details</DescriptionDetails>
      </DescriptionList>,
    );
    expect(screen.getByText("Term")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
  });

  it("renders as a dl element", () => {
    const { container } = render(
      <DescriptionList>
        <DescriptionTerm>Key</DescriptionTerm>
        <DescriptionDetails>Value</DescriptionDetails>
      </DescriptionList>,
    );
    expect(container.querySelector("dl")).toBeInTheDocument();
  });

  it("renders DescriptionTerm as dt element", () => {
    const { container } = render(
      <DescriptionList>
        <DescriptionTerm>Key</DescriptionTerm>
      </DescriptionList>,
    );
    expect(container.querySelector("dt")).toBeInTheDocument();
  });

  it("renders DescriptionDetails as dd element", () => {
    const { container } = render(
      <DescriptionList>
        <DescriptionDetails>Value</DescriptionDetails>
      </DescriptionList>,
    );
    expect(container.querySelector("dd")).toBeInTheDocument();
  });

  it("applies custom className to each sub-component", () => {
    const { container } = render(
      <DescriptionList className="custom-dl">
        <DescriptionTerm className="custom-dt">Key</DescriptionTerm>
        <DescriptionDetails className="custom-dd">Value</DescriptionDetails>
      </DescriptionList>,
    );
    expect(container.querySelector("dl")).toHaveClass("custom-dl");
    expect(container.querySelector("dt")).toHaveClass("custom-dt");
    expect(container.querySelector("dd")).toHaveClass("custom-dd");
  });
});
