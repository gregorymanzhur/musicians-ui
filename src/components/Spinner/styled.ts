import { styled, keyframes, Themed } from '../../theme';
import { SpinnerProps, SpinnerColorSchemes, SpinnerSizes } from './Spinner';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const getColor = (p: SpinnerProps & Themed): string => (
  p.colorScheme === SpinnerColorSchemes.Light ? p.theme.core.palette.crimson : 'transparent'
);

const getBackgroundColor = (p: SpinnerProps & Themed): string => (
  p.colorScheme === SpinnerColorSchemes.Light
    ? p.theme.core.palette.crimsonLighten60
    : p.theme.core.palette.crimsonLighten100
);

const getDiameter = (p: SpinnerProps & Themed): string => {
  if (p.size === SpinnerSizes.Small) return '12px';
  if (p.size === SpinnerSizes.Large) return '128px';

  return '48px';
};

const getBorderWidth = (p: SpinnerProps & Themed): string => {
  if (p.size === SpinnerSizes.Small) return '2px';
  if (p.size === SpinnerSizes.Large) return '8px';

  return '3px';
};


export const SpinnerWrapper = styled.div<SpinnerProps>`
  display: inline-block;
  border: ${getBorderWidth} solid ${getBackgroundColor};
  border-radius: 50%;
  border-top: ${getBorderWidth} solid ${getColor};
  width: ${getDiameter};
  height: ${getDiameter};
  animation: ${spinAnimation} 0.5s linear infinite;
`;
