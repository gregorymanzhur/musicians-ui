import React, { FC } from 'react';
import { StandardProps } from '../commonTypes';
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

export interface SpinnerProps extends StandardProps {
  size?: SpinnerSizes;
  colorScheme?: SpinnerColorSchemes;
}

export const Spinner: FC<SpinnerProps> = ({
  size = SpinnerSizes.Medium,
  colorScheme = SpinnerColorSchemes.Light,
}) => (
  <SpinnerWrapper size={size} colorScheme={colorScheme} />
);

