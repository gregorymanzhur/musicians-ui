import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from "@storybook/addon-info";

addDecorator(withKnobs);
addDecorator(withInfo());

const req = require.context('../src', true, /stories.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
