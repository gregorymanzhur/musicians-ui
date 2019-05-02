import { css, styled, Themed } from '../../theme';
import { TextFieldProps, TextFieldVariants } from './TextField';

export const Wrapper = styled.label`
  position: relative;
`;

const labelOutlinedStyle = (props: TextFieldProps & Themed) => css`
  top: 1px;
  left: 13px;
  background-color: ${props.theme.core.palette.grayLighten100};
`;
const labelFilledStyle = () => css`
  top: -7px;
  left: 13px;
  background-color: transparent;
`;

export const LabelWrapper = styled.span<TextFieldProps>`
  position: absolute;
  font-size: 14px;
  line-height: 20px;
  cursor: text;
  transition: all 0.15s;
  color: ${p => p.theme.core.palette.grayLighten30};
  pointer-events: none;
  
  ${p => p.variant === TextFieldVariants.Filled ? labelFilledStyle : labelOutlinedStyle};
`;

const upperLabelStyle = (props: TextFieldProps & Themed) => css`
  top: ${props.variant === TextFieldVariants.Filled ? '-16px' : '-17px'};
  left: 9px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  padding: ${props.variant === TextFieldVariants.Filled ? '0 3px' : '0 4px'};
  color: ${props.theme.core.palette.gray};
`;

const inputOutlinedStyle = (props: TextFieldProps & Themed) => css`
  border: 1px solid ${props.theme.core.palette.grayLighten40};
  border-radius: 4px;
  background-color: ${props.theme.core.palette.grayLighten100};
  padding: 0 12px;
  
  &:hover {
    border: 1px solid ${props.theme.core.palette.gray};
  }
  
  &:focus {
    border: 1px solid ${props.theme.core.palette.crimson};
  }
`;

const inputFilledStyle = (props: TextFieldProps & Themed) => css`
  border: none;
  border-bottom: 1px solid ${props.theme.core.palette.grayLighten40};
  background-color: ${props.theme.core.palette.grayLighten90};
  padding: 17px 12px 0 12px;
  
  &:hover {
    border-bottom: 1px solid ${props.theme.core.palette.gray};
    background-color: ${props.theme.core.palette.grayLighten80};
  }
  
  &:focus {
    border-bottom: 1px solid ${props.theme.core.palette.crimson};
  }
`;

export const InputWrapper = styled.input<TextFieldProps>`
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 14px;
  line-height: 20px;
  color: ${p => p.theme.core.palette.gray};
  transition: all 0.15s;
  
  ${p => p.variant === TextFieldVariants.Filled ? inputFilledStyle : inputOutlinedStyle};

  &:focus ~ * {
    ${upperLabelStyle};
    color: ${p => p.theme.core.palette.crimson};
  }
  & ~ * {
    ${p => p.value && upperLabelStyle};
  }
`;
