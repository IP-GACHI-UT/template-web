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
    <Combobox options={options} displayValue={(v) => v ?? ""}>
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
    <Combobox options={options} displayValue={(v) => v ?? ""} disabled>
      {(option) => (
        <ComboboxOption value={option}>
          <ComboboxLabel>{option}</ComboboxLabel>
        </ComboboxOption>
      )}
    </Combobox>
  ),
};

export const AnchorTop: StoryObj = {
  render: () => (
    <div className="mt-60">
      <Combobox
        options={options}
        displayValue={(v) => v ?? ""}
        anchor="top"
        placeholder="ドロップダウンが上に開きます"
      >
        {(option) => (
          <ComboboxOption value={option}>
            <ComboboxLabel>{option}</ComboboxLabel>
          </ComboboxOption>
        )}
      </Combobox>
    </div>
  ),
};

export const WithAriaLabel: StoryObj = {
  render: () => (
    <Combobox
      options={options}
      displayValue={(v) => v ?? ""}
      aria-label="果物を選択"
      placeholder="果物を検索..."
    >
      {(option) => (
        <ComboboxOption value={option}>
          <ComboboxLabel>{option}</ComboboxLabel>
        </ComboboxOption>
      )}
    </Combobox>
  ),
};
