import React, { FC, MouseEvent } from 'react';
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

  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  type = 'submit',
  variant = ButtonVariants.Primary,
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  onClick,
}) => (
  <ButtonWrapper
    type={type}
    disabled={disabled}
    loading={loading}
    variant={variant}
    onClick={onClick}
  >
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
    {loading && (
      <Box ml={children ? BoxSizes.XXS : undefined}>
        <Spinner
          size={SpinnerSizes.Small}
          colorScheme={variant === ButtonVariants.Primary
            ? SpinnerColorSchemes.Dark
            : SpinnerColorSchemes.Light
          }
        />
      </Box>
    )}
  </ButtonWrapper>
);
