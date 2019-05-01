import React, { FC } from 'react';
import { StringDict } from "../../common/types";
import { TextWrapper } from './styled';

export enum TextVariants {
  Heading = 'heading',
  Title = 'title',
  Subtitle = 'subtitle',
  Body = 'body',
  Caption = 'caption',
  Button = 'button',
}

export enum TextWeights {
  Light = 'light',
  Regular = 'regular',
  Medium = 'medium',
  Bold = 'bold',
}

const defaultTagsDict: StringDict = {
  heading: 'h1',
  title: 'h2',
  subtitle: 'h3',
  body: 'div',
  caption: 'div',
  button: 'span',
};

export interface TextProps {
  variant?: TextVariants;
  weight?: TextWeights;
  tag?: string;
}

export const Text: FC<TextProps> = ({ children, tag, variant, weight }) => (
  <TextWrapper tag={tag || defaultTagsDict[variant!]} variant={variant} weight={weight}>{children}</TextWrapper>
);

Text.defaultProps = {
  variant: TextVariants.Body,
  weight: TextWeights.Regular,
};
