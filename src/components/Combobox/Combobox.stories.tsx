import type { Meta, StoryObj } from "@storybook/react";
import { Combobox, ComboboxLabel, ComboboxOption } from "./Combobox";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export default meta;
const options = ["Apple", "Banana", "Cherry"];

export const Default: StoryObj = {
  render: () => (
    <Combobox
      options={options}
      displayValue={(v) => v ?? ""}
      value={null}
      onChange={() => {}}
    >
      {(option) => (
        <ComboboxOption value={option}>
          <ComboboxLabel>{option}</ComboboxLabel>
        </ComboboxOption>
      )}
    </Combobox>
  ),
};

export const WithPlaceholder: StoryObj = {
  render: () => (
    <Combobox
      options={options}
      displayValue={(v) => v ?? ""}
      value={null}
      onChange={() => {}}
      placeholder="Search a fruit..."
    >
      {(option) => (
        <ComboboxOption value={option}>
          <ComboboxLabel>{option}</ComboboxLabel>
        </ComboboxOption>
      )}
    </Combobox>
  ),
};

export const WithDefaultValue: StoryObj = {
  render: () => (
    <Combobox
      options={options}
      displayValue={(v) => v ?? ""}
      defaultValue="Banana"
      onChange={() => {}}
    >
      {(option) => (
        <ComboboxOption value={option}>
          <ComboboxLabel>{option}</ComboboxLabel>
        </ComboboxOption>
      )}
    </Combobox>
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <Combobox
      options={options}
      displayValue={(v) => v ?? ""}
      value={null}
      onChange={() => {}}
      disabled
    >
      {(option) => (
        <ComboboxOption value={option}>
          <ComboboxLabel>{option}</ComboboxLabel>
        </ComboboxOption>
      )}
    </Combobox>
  ),
};
