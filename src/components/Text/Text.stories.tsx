import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Base } from '..';
import { Text, TextWeights, TextVariants } from '.';

const stories = storiesOf('Text', module);

stories
  .add('Heading', () => (
    <Base>
      <Text variant={TextVariants.Heading} weight={select('weight', Object.values(TextWeights), TextWeights.Regular)}>Заглавие</Text>
    </Base>
  ))
  .add('Title', () => (
    <Base>
      <Text variant={TextVariants.Title} weight={select('weight', Object.values(TextWeights), TextWeights.Regular)}>Заголовок</Text>
    </Base>
  ))
  .add('Subtitle', () => (
    <Base>
      <Text variant={TextVariants.Subtitle} weight={select('weight', Object.values(TextWeights), TextWeights.Regular)}>Подзаголовок</Text>
    </Base>
  ))
  .add('Body', () => (
    <Base>
      <Text weight={select('weight', Object.values(TextWeights), TextWeights.Regular)}>Текст</Text>
    </Base>
  ))
  .add('Caption', () => (
    <Base>
      <Text variant={TextVariants.Caption} weight={select('weight', Object.values(TextWeights), TextWeights.Regular)}>Подсказка</Text>
    </Base>
  ))
  .add('Button', () => (
    <Base>
      <Text variant={TextVariants.Button} weight={select('weight', Object.values(TextWeights), TextWeights.Regular)}>Кнопка</Text>
    </Base>
  ))
  .add('Heading (with custom tag h5)', () => (
    <Base>
      <Text
        tag="h5"
        variant={TextVariants.Heading}
        weight={select('weight', Object.values(TextWeights), TextWeights.Regular)}
      >
        Заглавие
      </Text>
    </Base>
  ));
