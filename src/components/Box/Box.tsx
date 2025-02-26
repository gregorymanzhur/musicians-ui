import React, { FC } from 'react';
import { StandardProps } from '../commonTypes';
import { BoxWrapper } from './styled';

export enum BoxSizes {
  XXS = 'xxs',
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XXL = 'xxl',
}

export interface BoxProps extends StandardProps {
  m?: BoxSizes;
  mv?: BoxSizes;
  mh?: BoxSizes;
  mt?: BoxSizes;
  mr?: BoxSizes;
  mb?: BoxSizes;
  ml?: BoxSizes;

  p?: BoxSizes;
  pv?: BoxSizes;
  ph?: BoxSizes;
  pt?: BoxSizes;
  pr?: BoxSizes;
  pb?: BoxSizes;
  pl?: BoxSizes;

  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'center' | 'baseline' | 'flex-start' | 'flex-end';
  flexDirection?: 'row' | 'column';
}

export const Box: FC<BoxProps> = ({ children, flexDirection = 'column', ...restProps }) => (
  <BoxWrapper flexDirection={flexDirection} {...restProps}>{children}</BoxWrapper>
);
