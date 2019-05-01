import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Base } from '..';
import { Spinner, SpinnerSizes, SpinnerColorSchemes } from '.';

const stories = storiesOf('Spinner', module);

stories
  .add('Light', () => (
    <Base>
      <Spinner size={select('size', Object.values(SpinnerSizes), SpinnerSizes.Small)} />
    </Base>
  ))
  .add('Dark', () => (
    <Base>
      <div style={{ backgroundColor: 'crimson', height: '100vh' }}>
        <Spinner size={select('size', Object.values(SpinnerSizes), SpinnerSizes.Small)} colorScheme={SpinnerColorSchemes.Dark} />
      </div>
    </Base>
  ));
