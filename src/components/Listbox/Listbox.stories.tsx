import type { Meta, StoryObj } from "@storybook/react";
import {
  Listbox,
  ListboxDescription,
  ListboxLabel,
  ListboxOption,
} from "./Listbox";

const meta = {
  title: "Components/Listbox",
  component: Listbox,
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Listbox defaultValue="apple" placeholder="Select a fruit">
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
    <Listbox placeholder="Select a fruit">
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
    <Listbox defaultValue="apple" disabled placeholder="Select a fruit">
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
    <Listbox defaultValue="item-1" placeholder="Select an item">
      {Array.from({ length: 20 }, (_, i) => (
        <ListboxOption key={`item-${i + 1}`} value={`item-${i + 1}`}>
          <ListboxLabel>Item {i + 1}</ListboxLabel>
        </ListboxOption>
      ))}
    </Listbox>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Listbox defaultValue="tokyo" placeholder="都市を選択">
      <ListboxOption value="tokyo">
        <ListboxLabel>東京</ListboxLabel>
        <ListboxDescription>日本の首都</ListboxDescription>
      </ListboxOption>
      <ListboxOption value="osaka">
        <ListboxLabel>大阪</ListboxLabel>
        <ListboxDescription>西日本の中心都市</ListboxDescription>
      </ListboxOption>
      <ListboxOption value="kyoto">
        <ListboxLabel>京都</ListboxLabel>
        <ListboxDescription>歴史と文化の街</ListboxDescription>
      </ListboxOption>
    </Listbox>
  ),
};
