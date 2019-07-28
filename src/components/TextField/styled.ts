import { css, styled, Themed } from '../../theme';
import { Omit } from '../../helpers/types';
import { FieldVariants } from '../commonTypes';
import { Box } from '../Box';
import { TextFieldProps } from './TextField';

export const Wrapper = styled.div<Pick<TextFieldProps, 'disabled'>>`
  position: relative;
  pointer-events: ${p => p.disabled ? 'none' : 'all'};
  opacity: ${p => p.disabled ? 0.5 : 1};
`;

const requiredAsteriskStyle = (props: Themed) => css`
  &:after {
     content: '*';
     margin-left: 1px;
     color: ${props.theme.core.palette.grayLighten30};
   }
`;

export const LabelWrapper = styled.label<Pick<TextFieldProps, 'variant' | 'required' | 'iconLeft'>>`
  top: 10px;
  left: ${p => p.iconLeft ? '36px' : '13px'};
  position: absolute;
  font-size: 14px;
  line-height: 20px;
  cursor: text;
  transition: all 0.15s;
  pointer-events: none;
  color: ${p => p.theme.core.palette.grayLighten30};
  background-color: ${p =>
    p.variant === FieldVariants.Filled ? p.theme.core.palette.grayLighten90 : p.theme.core.palette.grayLighten100
  };
  
  ${p => p.required && requiredAsteriskStyle};
`;

const upperLabelStyle = (props: Pick<TextFieldProps, 'variant' | 'required' | 'iconLeft' | 'active'> & Themed) => css`
  top: ${props.variant === FieldVariants.Filled ? '1px' : '-7px'};
  left: ${props.iconLeft ? '32px' : '9px'};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  padding: ${props.variant === FieldVariants.Filled ? '0 3px' : '0 4px'};
  color: ${props.active ? props.theme.core.palette.crimson :  props.theme.core.palette.gray};
`;

const inputOutlinedStyle = (props: TextFieldProps & Themed) => css`
  border: 1px solid ${props.theme.core.palette.grayLighten40};
  border-radius: 4px;
  background-color: ${props.theme.core.palette.grayLighten100};
  padding: ${props.multiline ? '10px' : 0} ${props.iconRight ? '35px' : '12px'} 0 ${props.iconLeft ? '35px' : '12px'};
  
  &:hover {
    border: 1px solid ${props.active ? props.theme.core.palette.crimson : props.theme.core.palette.gray};
  }
  
  &:focus {
    border: 1px solid ${props.theme.core.palette.crimson};
  }
  
  ${props.active && css`
    border: 1px solid ${props.theme.core.palette.crimson};
  `};
`;

const inputFilledStyle = (props: TextFieldProps & Themed) => css`
  border: none;
  border-bottom: 1px solid ${props.theme.core.palette.grayLighten40};
  background-color: ${props.theme.core.palette.grayLighten90};
  padding: 16px ${props.iconRight ? '35px' : '12px'} 0 ${props.iconLeft ? '35px' : '12px'};;
  
  &:hover {
    border-bottom: 1px solid ${props.theme.core.palette.gray};
    background-color: ${props.theme.core.palette.grayLighten80};
    
    & ~ label {
      background-color: ${props.theme.core.palette.grayLighten80};
    }
  }
  
  &:focus {
    border-bottom: 1px solid ${props.theme.core.palette.crimson};
  }
`;

export const InputWrapper = styled.input<Omit<TextFieldProps, 'onChange'> & { ref: string & ((inputElement: HTMLElement) => string) }>`
  width: 100%;
  height: ${p => p.multiline ? '80px' : '40px'};
  outline: none;
  font-size: 14px;
  line-height: 20px;
  color: ${p => p.theme.core.palette.gray};
  transition: all 0.15s;
  
  ${p => p.variant === FieldVariants.Filled ? inputFilledStyle : inputOutlinedStyle};

  &:focus ~ label {
    ${upperLabelStyle};
    color: ${p => p.theme.core.palette.crimson};
    
    &:after {
      color: ${p => p.theme.core.palette.crimson};
    }
  }
  & ~ label {
    ${p => (p.value || p.active) && upperLabelStyle};
  }
`;

export const IconWrapper = styled(Box)<Partial<TextFieldProps>>`
  position: absolute;
  color: ${p => p.theme.core.palette.grayLighten50};
  
  top: 10px;
  left: ${p => p.iconLeft ? '13px' : 'auto'};
  right: ${p => p.iconRight ? '13px' : 'auto'};
  
  cursor: ${p => (p.iconLeft && p.iconLeft.onClick) || (p.iconRight && p.iconRight.onClick) ? 'pointer' : 'default'};
`;
