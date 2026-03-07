import { render } from "@testing-library/react";
import { Radio, RadioField, RadioGroup } from "./Radio";

describe("Radio", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <RadioGroup value="a" onChange={() => {}}>
        <Radio value="a" />
      </RadioGroup>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders RadioGroup with data-slot attribute", () => {
    const { container } = render(
      <RadioGroup value="a" onChange={() => {}}>
        <Radio value="a" />
      </RadioGroup>,
    );
    expect(
      container.querySelector("[data-slot='control']"),
    ).toBeInTheDocument();
  });

  it("renders with color prop", () => {
    const { container } = render(
      <RadioGroup value="a" onChange={() => {}}>
        <Radio value="a" color="red" />
      </RadioGroup>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders multiple radio options", () => {
    const { container } = render(
      <RadioGroup value="a" onChange={() => {}}>
        <Radio value="a" />
        <Radio value="b" />
        <Radio value="c" />
      </RadioGroup>,
    );
    const radios = container.querySelectorAll("[data-slot='control']");
    expect(radios.length).toBeGreaterThanOrEqual(1);
  });

  it("renders RadioField", () => {
    const { container } = render(
      <RadioGroup value="a" onChange={() => {}}>
        <RadioField>
          <Radio value="a" />
        </RadioField>
      </RadioGroup>,
    );
    expect(container.querySelector("[data-slot='field']")).toBeInTheDocument();
  });
});
