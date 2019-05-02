import React, { FC } from 'react';
import { StandardProps } from '../commonTypes';
import { ButtonWrapper } from './styled';
import { Text, TextVariants, Spinner, SpinnerSizes, SpinnerColorSchemes, Box, BoxSizes } from '..';

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
}

export const Button: FC<ButtonProps> = ({ children, ...restProps }) => (
  <ButtonWrapper {...restProps}>
    <Text variant={TextVariants.Button}>
      {children}
    </Text>
    {restProps.loading && (
      <Box ml={BoxSizes.XXS}>
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
