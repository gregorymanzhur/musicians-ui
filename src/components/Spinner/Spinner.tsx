import React, { FC } from 'react';
import { SpinnerWrapper } from './styled';

export enum SpinnerSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum SpinnerColorSchemes {
  Light = 'light',
  Dark = 'dark',
}

export interface SpinnerProps {
  size?: SpinnerSizes;
  colorScheme?: SpinnerColorSchemes;
}

export const Spinner: FC<SpinnerProps> = ({ size, colorScheme }) => (
  <SpinnerWrapper size={size} colorScheme={colorScheme} />
);

Spinner.defaultProps = {
  size: SpinnerSizes.Medium,
  colorScheme: SpinnerColorSchemes.Light,
};
