import React from 'react';
import {storiesOf} from '@storybook/react';
import {select} from '@storybook/addon-knobs';
import { Base } from '..';
import { TextField, TextFieldVariants } from '.';

const stories = storiesOf('TextField', module);

stories
  .add('Base', () => (
    <Base>
      <TextField
        label="Base text field"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
      />
    </Base>
  ));
