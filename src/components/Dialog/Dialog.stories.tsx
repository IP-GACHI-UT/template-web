import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "./Dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
export const Default: StoryObj = {
  render: () => (
    <Dialog open onClose={() => {}}>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogBody>Dialog content goes here.</DialogBody>
      <DialogActions>
        <Button plain>Cancel</Button>
        <Button>Confirm</Button>
      </DialogActions>
    </Dialog>
  ),
};

export const SmallSize: StoryObj = {
  render: () => (
    <Dialog open onClose={() => {}} size="sm">
      <DialogTitle>Small Dialog</DialogTitle>
      <DialogBody>This is a small-sized dialog panel.</DialogBody>
      <DialogActions>
        <Button plain>Cancel</Button>
        <Button>OK</Button>
      </DialogActions>
    </Dialog>
  ),
};

export const MediumSize: StoryObj = {
  render: () => (
    <Dialog open onClose={() => {}} size="md">
      <DialogTitle>Medium Dialog</DialogTitle>
      <DialogBody>
        This is a medium-sized dialog panel. It provides a balanced width for
        standard forms and confirmation messages.
      </DialogBody>
      <DialogActions>
        <Button plain>Cancel</Button>
        <Button>OK</Button>
      </DialogActions>
    </Dialog>
  ),
};

export const ExtraLargeSize: StoryObj = {
  render: () => (
    <Dialog open onClose={() => {}} size="xl">
      <DialogTitle>Extra Large Dialog</DialogTitle>
      <DialogBody>
        This is an extra-large dialog panel. It offers a wider layout suitable
        for displaying rich content, data tables, or multi-column forms.
      </DialogBody>
      <DialogActions>
        <Button plain>Cancel</Button>
        <Button>Confirm</Button>
      </DialogActions>
    </Dialog>
  ),
};

export const LargeSize: StoryObj = {
  render: () => (
    <Dialog open onClose={() => {}} size="2xl">
      <DialogTitle>Large Dialog</DialogTitle>
      <DialogBody>
        This is a large-sized dialog panel with more room for content. It uses
        the 2xl size variant to provide a wider layout suitable for complex
        forms or detailed information.
      </DialogBody>
      <DialogActions>
        <Button plain>Cancel</Button>
        <Button>Confirm</Button>
      </DialogActions>
    </Dialog>
  ),
};

export const WithDescription: StoryObj = {
  render: () => (
    <Dialog open onClose={() => {}}>
      <DialogTitle>Delete item</DialogTitle>
      <DialogDescription>
        Are you sure you want to delete this item? This action cannot be undone.
      </DialogDescription>
      <DialogBody>All associated data will be permanently removed.</DialogBody>
      <DialogActions>
        <Button plain>Cancel</Button>
        <Button color="red">Delete</Button>
      </DialogActions>
    </Dialog>
  ),
};
