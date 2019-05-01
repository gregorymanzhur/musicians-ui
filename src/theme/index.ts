import { default as emotionStyled, CreateStyled } from '@emotion/styled'
import { paletteBase, Palette } from './palette';

export interface Theme {
  core: {
    palette: Palette;
  };
}

export interface Themed {
  theme?: Theme;
}

export interface Themes {
  [themeName: string]: Theme,
}

export const themes: Themes = {
  base: {
    core: {
      palette: paletteBase,
    },
  },
};


export const styled = emotionStyled as CreateStyled<Theme>;
export * from '@emotion/core';
export * from '@emotion/styled';
export * from 'emotion-theming';