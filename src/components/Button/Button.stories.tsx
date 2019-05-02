import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Global, css } from '../../theme';
import { Base } from '..';
import { Button, ButtonVariants } from '.';

const customStyles = css`
  .squared {
    border-radius: 0 !important;
  }
  
  .b-green {
    background-color: green !important;
  }
`;

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
  .add('Custom class', () => (
    <Base>
      <Global styles={customStyles} />
      <Button
        variant={select('variant', Object.values(ButtonVariants), ButtonVariants.Primary)}
        className="b-green squared"
      >
        Кнопка
      </Button>
    </Base>
  ))
  .add('Icon', () => (
    <Base>
      <Button variant={select('variant', Object.values(ButtonVariants), ButtonVariants.Primary)} >
        <FaCheck />
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
