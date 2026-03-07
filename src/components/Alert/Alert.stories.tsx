import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import {
  Alert,
  AlertActions,
  AlertBody,
  AlertDescription,
  AlertTitle,
} from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
export const Default: StoryObj = {
  render: () => (
    <Alert open onClose={() => {}}>
      <AlertTitle>Are you sure?</AlertTitle>
      <AlertDescription>
        This action cannot be undone. This will permanently delete the item.
      </AlertDescription>
      <AlertBody />
      <AlertActions>
        <Button plain>Cancel</Button>
        <Button color="red">Delete</Button>
      </AlertActions>
    </Alert>
  ),
};

export const SmallSize: StoryObj = {
  render: () => (
    <Alert open onClose={() => {}} size="xs">
      <AlertTitle>Confirm</AlertTitle>
      <AlertDescription>Proceed with this action?</AlertDescription>
      <AlertActions>
        <Button plain>No</Button>
        <Button>Yes</Button>
      </AlertActions>
    </Alert>
  ),
};

export const LargeSize: StoryObj = {
  render: () => (
    <Alert open onClose={() => {}} size="xl">
      <AlertTitle>Important Notice</AlertTitle>
      <AlertDescription>
        This alert uses the xl size variant to provide a wider panel. It is
        suitable for alerts that need to display more detailed content or longer
        descriptions.
      </AlertDescription>
      <AlertBody>
        <p className="text-sm text-zinc-500">
          Additional context can be placed in the alert body.
        </p>
      </AlertBody>
      <AlertActions>
        <Button plain>Dismiss</Button>
        <Button>Acknowledge</Button>
      </AlertActions>
    </Alert>
  ),
};
