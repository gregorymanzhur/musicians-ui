import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Base, IconTypes } from '..';
import { TextField, TextFieldVariants, PhoneField, PasswordField, DateField, NumberField } from '.';

const stories = storiesOf('TextField', module);

stories
  .add('Base', () => (
    <Base>
      <TextField
        label="Base text field"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
      />
    </Base>
  ))
  .add('With value', () => (
    <Base>
      <TextField
        label="Base text field"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
        value="Some text"
      />
    </Base>
  ))
  .add('With left icon', () => (
    <Base>
      <TextField
        label="Text field with left icon"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
        iconLeft={{ type: IconTypes.FA, title: "FaApple" }}
      />
    </Base>
  ))
  .add('With right icon', () => (
    <Base>
      <TextField
        label="Text field with right icon"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
        iconRight={{ type: IconTypes.FA, title: "FaCheck" }}
      />
    </Base>
  ))
  .add('Disabled', () => (
    <Base>
      <TextField
        label="Disabled text field"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
        disabled
      />
    </Base>
  ))
  .add('Required', () => (
    <Base>
      <TextField
        label="Required text field"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
        required
      />
    </Base>
  ))
  .add('Multiline', () => (
    <Base>
      <TextField
        label="Multiline text field"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
        multiline
      />
    </Base>
  ))
  .add('Masked', () => (
    <Base>
      <TextField
        label="Masked text field (XXXX-XXXX, when X - digit)"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
        mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,]}
      />
    </Base>
  ))
  .add('Wrappers: Phone field', () => (
    <Base>
      <PhoneField
        label="Phone field"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
      />
    </Base>
  ))
  .add('Wrappers: Password field', () => (
    <Base>
      <PasswordField
        label="Password field"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
      />
    </Base>
  ))
  .add('Wrappers: Date field', () => (
    <Base>
      <DateField
        label="Date field"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
      />
    </Base>
  ))
  .add('Wrappers: Number field', () => (
    <Base>
      <NumberField
        label="Number field"
        variant={select('variant', Object.values(TextFieldVariants), TextFieldVariants.Outlined )}
      />
    </Base>
  ));
