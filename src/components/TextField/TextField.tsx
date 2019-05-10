import React, { FC, ChangeEvent, FocusEvent, KeyboardEvent, useState, useMemo, useCallback } from 'react';

import { StandardProps } from '../commonTypes';
import { Icon, IconProps } from '../Icon';
import { MaskedInput, Mask, Pipe } from './MaskedInput';
import { Wrapper, InputWrapper, LabelWrapper, IconWrapper } from './styled';

export enum TextFieldVariants {
  Outlined = 'outlined',
  Filled = 'filled',
}

export interface TextFieldProps extends StandardProps {
  variant?: TextFieldVariants;
  label: string;
  value?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  mask?: Mask;
  pipe?: Pipe;

  iconLeft?: IconProps;
  iconRight?: IconProps;

  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({
  variant = TextFieldVariants.Outlined,
  label,
  type = 'text',
  required = false,
  disabled = false,
  multiline = false,
  mask = false,
  pipe,
  iconLeft,
  iconRight,
  onChange,
  onFocus,
  onBlur,
  onKeyPress,
  onKeyDown,
  onKeyUp,
  value: propsValue,
}) => {
  const [value, setValue] = useState<string>(propsValue || '' );

  const InputComponent = useMemo(
    () => multiline ? InputWrapper.withComponent('textarea') : InputWrapper,
    [multiline],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(event.target.value);
      if (onChange) { onChange(event); }
    },
    [],
  );

  return (
    <Wrapper disabled={disabled}>
      <MaskedInput
        mask={mask}
        pipe={pipe}
        guide={false}
        keepCharPositions
        onChange={handleChange}
        value={value}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        type={type}
        defaultValue={undefined}
        render={(ref: string & ((inputElement: HTMLElement) => string), props: TextFieldProps) => (
          <InputComponent
            ref={ref}
            multiline={multiline}
            iconLeft={iconLeft}
            iconRight={iconRight}
            variant={variant}
            value={value}
            {...props}
          />
        )}
      />
      {iconLeft && (
        <IconWrapper variant={variant} iconLeft={iconLeft}>
          <Icon {...iconLeft} />
        </IconWrapper>
      )}
      {iconRight && (
        <IconWrapper variant={variant} iconRight={iconRight}>
          <Icon {...iconRight} />
        </IconWrapper>
      )}
      <LabelWrapper variant={variant} iconLeft={iconLeft} required={required}>
        {label}
      </LabelWrapper>
    </Wrapper>
  );
};
