import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Base, FieldVariants, IconTypes } from '..';
import { Select } from '.';

const stories = storiesOf('Select', module);

stories
  .add('Base', () => (
    <Base>
      <Select
        label="Base select"
        variant={select('variant', Object.values(FieldVariants), FieldVariants.Outlined )}
        options={[{ label: 'First', value: 'first' }, { label: 'Second', value: 'second' }]}
      />
    </Base>
  ))
  .add('With value', () => (
    <Base>
      <Select
        label="Base select"
        variant={select('variant', Object.values(FieldVariants), FieldVariants.Outlined )}
        options={[{ label: 'First', value: 'first' }, { label: 'Second', value: 'second' }]}
        defaultValue="second"
      />
    </Base>
  ))
  .add('Disabled', () => (
    <Base>
      <Select
        label="Base select"
        variant={select('variant', Object.values(FieldVariants), FieldVariants.Outlined )}
        options={[{ label: 'First', value: 'first' }, { label: 'Second', value: 'second' }]}
        disabled
      />
    </Base>
  ))
  .add('Required', () => (
    <Base>
      <Select
        label="Base select"
        variant={select('variant', Object.values(FieldVariants), FieldVariants.Outlined )}
        options={[{ label: 'First', value: 'first' }, { label: 'Second', value: 'second' }]}
        required
      />
    </Base>
  ))
  .add('Icon left', () => (
    <Base>
      <Select
        label="Base select"
        variant={select('variant', Object.values(FieldVariants), FieldVariants.Outlined )}
        options={[{ label: 'First', value: 'first' }, { label: 'Second', value: 'second' }]}
        iconLeft={{ type: IconTypes.FA, title: "FaApple" }}
      />
    </Base>
  ))
  .add('Editable (Autocomplete)', () => (
    <Base>
      <Select
        label="Editable select"
        variant={select('variant', Object.values(FieldVariants), FieldVariants.Outlined )}
        options={[{ label: 'First', value: 'first' }, { label: 'Second', value: 'second' }]}
        editable
      />
    </Base>
  ));
