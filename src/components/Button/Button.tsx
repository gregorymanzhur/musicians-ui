import React, { FC } from 'react';
import { StandardProps } from '../commonTypes';
import { ButtonWrapper } from './styled';
import { Text, TextVariants, Spinner, SpinnerSizes, SpinnerColorSchemes, Box, BoxSizes, Icon, IconProps } from '..';

export enum ButtonVariants {
  Primary = 'primary',
  Secondary = 'secondary',
  Borderless = 'borderless',
}

export interface ButtonProps extends StandardProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: IconProps;
  iconRight?: IconProps;
}

export const Button: FC<ButtonProps> = ({ children, iconLeft, iconRight, ...restProps }) => (
  <ButtonWrapper {...restProps}>
    {iconLeft && (
      <Box mr={children ? BoxSizes.XXS : undefined}>
        <Icon {...iconLeft} />
      </Box>
    )}
    <Text variant={TextVariants.Button}>
      {children}
    </Text>
    {iconRight && (
      <Box ml={BoxSizes.XXS}>
        <Icon {...iconRight} />
      </Box>
    )}
    {restProps.loading && (
      <Box ml={children ? BoxSizes.XXS : undefined}>
        <Spinner
          size={SpinnerSizes.Small}
          colorScheme={restProps.variant === ButtonVariants.Primary
            ? SpinnerColorSchemes.Dark
            : SpinnerColorSchemes.Light
          }
        />
      </Box>
    )}
  </ButtonWrapper>
);

Button.defaultProps = {
  variant: ButtonVariants.Primary,
  disabled: false,
  loading: false,
  type: 'submit',
};
