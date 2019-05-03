import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Base, IconTypes } from '..';
import { Button, ButtonVariants } from '.';

const stories = storiesOf('Button', module);

stories
  .add('Base', () => (
    <Base>
      <Button variant={select('variant', Object.values(ButtonVariants), ButtonVariants.Primary)}>
        Кнопка
      </Button>
    </Base>
  ))
  .add('Disabled', () => (
    <Base>
      <Button variant={select('variant', Object.values(ButtonVariants), ButtonVariants.Primary)} disabled>
        Кнопка
      </Button>
    </Base>
  ))
  .add('Icon', () => (
    <Base>
      <Button
        variant={select('variant', Object.values(ButtonVariants), ButtonVariants.Primary)}
        iconLeft={{ type: IconTypes.FA, title: "FaCheck" }}
      />
    </Base>
  ))
  .add('Icon left', () => (
    <Base>
      <Button
        variant={select('variant', Object.values(ButtonVariants), ButtonVariants.Primary)}
        iconLeft={{ type: IconTypes.FA, title: "FaCheck" }}
      >
        Кнопка с иконкой слева
      </Button>
    </Base>
  ))
  .add('Icon right', () => (
    <Base>
      <Button
        variant={select('variant', Object.values(ButtonVariants), ButtonVariants.Primary)}
        iconRight={{ type: IconTypes.FA, title: "FaCheck" }}
      >
        Кнопка с иконкой справа
      </Button>
    </Base>
  ))
  .add('Loading', () => (
    <Base>
      <Button variant={select('variant', Object.values(ButtonVariants), ButtonVariants.Primary)} loading>
        Кнопка
      </Button>
    </Base>
  ));
