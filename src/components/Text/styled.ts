import { createElement, FC } from 'react';
import { styled } from '../../theme';
import { StringDict } from "../../common/types";
import { TextProps } from './Text';

const fontSizesDict: StringDict = {
  heading: '32px',
  title: '24px',
  subtitle: '16px',
  body: '14px',
  caption: '12px',
  button: '14px',
};

const lineHeightsDict: StringDict = {
  heading: '40px',
  title: '30px',
  subtitle: '24px',
  body: '20px',
  caption: '16px',
  button: '16px',
};

const weightsDict: StringDict = {
  regular: 'normal',
  medium: '500',
  bold: 'bold',
  light: '300',
};

export const TextWrapper: FC<TextProps> = styled(({ tag, children, ...props }) =>
  createElement(tag!, props, children))`

  font-size: ${p => fontSizesDict[p.variant!]};
  line-height: ${p => lineHeightsDict[p.variant!]};
  font-weight: ${p => weightsDict[p.weight!]};
  font-family: Roboto, sans-serif;
  margin: 0;
  text-transform: ${p => p.variant === 'button' ? 'uppercase' : 'inherit'};
  letter-spacing: ${p => p.variant === 'button' ? '0.5px' : 'inherit'};
`;
