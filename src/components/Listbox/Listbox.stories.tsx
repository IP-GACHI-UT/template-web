import type { Meta, StoryObj } from "@storybook/react";
import { Listbox, ListboxLabel, ListboxOption } from "./Listbox";

const meta = {
  title: "Components/Listbox",
  component: Listbox,
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Listbox value="apple" onChange={() => {}} placeholder="Select a fruit">
      <ListboxOption value="apple">
        <ListboxLabel>Apple</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="banana">
        <ListboxLabel>Banana</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="cherry">
        <ListboxLabel>Cherry</ListboxLabel>
      </ListboxOption>
    </Listbox>
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <Listbox value={null} onChange={() => {}} placeholder="Select a fruit">
      <ListboxOption value="apple">
        <ListboxLabel>Apple</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="banana">
        <ListboxLabel>Banana</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="cherry">
        <ListboxLabel>Cherry</ListboxLabel>
      </ListboxOption>
    </Listbox>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Listbox
      value="apple"
      onChange={() => {}}
      disabled
      placeholder="Select a fruit"
    >
      <ListboxOption value="apple">
        <ListboxLabel>Apple</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="banana">
        <ListboxLabel>Banana</ListboxLabel>
      </ListboxOption>
    </Listbox>
  ),
};

export const ManyOptions: Story = {
  render: () => (
    <Listbox value="item-1" onChange={() => {}} placeholder="Select an item">
      {Array.from({ length: 20 }, (_, i) => (
        <ListboxOption key={`item-${i + 1}`} value={`item-${i + 1}`}>
          <ListboxLabel>Item {i + 1}</ListboxLabel>
        </ListboxOption>
      ))}
    </Listbox>
  ),
};
