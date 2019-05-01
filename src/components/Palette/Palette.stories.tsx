import React from 'react';
import { storiesOf } from '@storybook/react';
import { Base } from '..';
import { Palette, ColorsColumn, ColorBlock } from './styled';
import { paletteBase, mainColorsBase } from '../../theme/palette';

const stories = storiesOf('Palette', module);

stories.add('Base', () => (
  <Base>
    <Palette>
      {Object.keys(mainColorsBase).map((mainColorName: string) => (
        <ColorsColumn key={`column-${mainColorName}`}>
          {
            Object.keys(paletteBase)
              .filter((paletteColorName: string) => paletteColorName.startsWith(mainColorName))
              .map((colorName: string) => (
                <ColorBlock color={paletteBase[colorName]}>{colorName}</ColorBlock>
              ))
          }
        </ColorsColumn>
      ))}
    </Palette>
  </Base>
));
