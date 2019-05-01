import React from 'react';
import { storiesOf } from '@storybook/react';
import { Base } from '..';
import { Box, BoxSizes } from '.';

const stories = storiesOf('Box', module);

stories
  .add('Margins', () => (
    <Base>
      <Box ml={BoxSizes.M}>margin-left</Box>
      <Box mt={BoxSizes.M}>margin-top</Box>
      <Box ml={BoxSizes.M} mt={BoxSizes.M}>margin-left & margin-top</Box>
    </Base>
  ))
  .add('Paddings', () => (
    <Base>
      <Box pl={BoxSizes.M}>padding-left</Box>
      <Box pt={BoxSizes.M}>padding-top</Box>
      <Box pl={BoxSizes.M} pt={BoxSizes.M}>padding-left & padding-top</Box>
    </Base>
  ))
  .add('Justifying', () => (
    <Base>
      <Box justifyContent="space-around" flexDirection="row">
        <Box>left</Box>
        <Box>Right</Box>
      </Box>
    </Base>
  ))
  .add('Alignment', () => (
    <Base>
      <Box alignItems="center" flexDirection="row">
        <Box>left</Box>
        <Box>
          <Box>Right 1</Box>
          <Box>Right 2</Box>
        </Box>
      </Box>
      <Box alignItems="flex-end" flexDirection="row" mt={BoxSizes.M}>
        <Box>left</Box>
        <Box>
          <Box>Right 1</Box>
          <Box>Right 2</Box>
        </Box>
      </Box>
    </Base>
  ));
