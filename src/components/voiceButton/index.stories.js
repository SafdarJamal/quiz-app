import React from 'react';
import { Button } from 'semantic-ui-react';

// 1. "Default export" tells Storybook where this component belongs in the sidebar menu
export default {
  title: 'Sandbox/Voice Button', // This creates a "Sandbox" folder in the menu
  component: Button,
};

// 2. These "Named exports" are the actual examples/variations we want to see

export const RegularBlueButton = () => (
  <Button
    icon="volume up"
    circular
    color="blue"
    onClick={() => alert("The voice would play now!")}
    title="Read Question out loud"
  />
);

export const DisabledButton = () => (
  <Button
    icon="volume up"
    circular
    disabled
    onClick={() => alert("This shouldn't trigger!")}
  />
);

export const RedButtonWithText = () => (
  <Button
    icon="volume up"
    color="red"
    content="Listen Again"
    labelPosition="left"
  />
);
