import React from 'react';
import { storiesOf } from '@storybook/react';
import { Base } from '..';
import { Icon, IconTypes } from '.';

const stories = storiesOf('Icon', module);

stories
  .add('Base', () => (
    <Base>
      <Icon type={IconTypes.FA} title="FaPlus" />
      <Icon type={IconTypes.MD} title="MdCallToAction" />
    </Base>
  ));