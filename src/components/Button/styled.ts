import { styled, Themed } from '../../theme';
import { ButtonProps, ButtonVariants } from './Button';

const getPadding = (p: ButtonProps & Themed) => {
  if (p.variant === ButtonVariants.Borderless) return 0;
  if (p.loading) return '4px';

  return '4px 12px';
};

const getBackgroundColor = (p: ButtonProps & Themed) => {
  if (p.variant === ButtonVariants.Primary) return p.theme.core.palette.crimson;
  if (p.variant === ButtonVariants.Secondary) return p.theme.core.palette.grayLighten100;

  return 'transparent';
};

const getBackgroundColorHover = (p: ButtonProps & Themed) => {
  if (p.variant === ButtonVariants.Primary) return p.theme.core.palette.crimsonDarken20;
  if (p.variant === ButtonVariants.Secondary) return p.theme.core.palette.crimsonLighten90;

  return 'transparent';
};

const getBackgroundColorActive = (p: ButtonProps & Themed) => {
  if (p.variant === ButtonVariants.Primary) return p.theme.core.palette.crimsonDarken30;
  if (p.variant === ButtonVariants.Secondary) return p.theme.core.palette.crimsonLighten80;

  return 'transparent';
};

export const ButtonWrapper = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  padding: ${getPadding};
  color: ${p => p.variant === ButtonVariants.Primary ? p.theme.core.palette.grayLighten100 : p.theme.core.palette.crimson};
  fill: ${p => p.variant === ButtonVariants.Primary ? p.theme.core.palette.grayLighten100 : p.theme.core.palette.crimson};
  border: ${p => p.variant === ButtonVariants.Borderless ? 'none' : `1px solid ${p.theme.core.palette.crimson}`};
  background-color: ${getBackgroundColor};
  height: ${p => p.variant === ButtonVariants.Borderless ? 'auto' : '40px'};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  opacity: ${p => p.disabled || p.loading ? 0.5 : 1};
  pointer-events: ${p => p.disabled || p.loading ? 'none' : 'all'};
  
  &:hover {
    background-color: ${getBackgroundColorHover};
    border: ${p => p.variant === ButtonVariants.Borderless ? 'none' : `1px solid ${p.theme.core.palette.crimsonDarken20}`};
    color: ${p => p.variant === ButtonVariants.Primary ? p.theme.core.palette.grayLighten100 : p.theme.core.palette.crimsonDarken20};
  }
  
  &:active {
    background-color: ${getBackgroundColorActive};
    border: ${p => p.variant === ButtonVariants.Borderless ? 'none' : `1px solid ${p.theme.core.palette.crimsonDarken30}`};
    color: ${p => p.variant === ButtonVariants.Primary ? p.theme.core.palette.grayLighten100 : p.theme.core.palette.crimsonDarken30};
  }
`;
