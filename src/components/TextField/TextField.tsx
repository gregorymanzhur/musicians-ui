import React, { FC, ChangeEvent, FocusEvent, KeyboardEvent, useState, useMemo, useCallback, forwardRef } from 'react';

import { Omit } from '../../helpers/types';
import { StandardProps, FieldVariants } from '../commonTypes';
import { Icon, IconProps } from '../Icon';
import { MaskedInput, Mask, Pipe } from './MaskedInput';
import { Wrapper, InputWrapper, LabelWrapper, IconWrapper } from './styled';

export interface TextFieldProps extends StandardProps {
  variant?: FieldVariants;
  label: string;
  value?: string;
  defaultValue?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  multiline?: boolean;
  active?: boolean;
  mask?: Mask;
  pipe?: Pipe;

  iconLeft?: IconProps;
  iconRight?: IconProps;

  onChange?: (value: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({
  variant = FieldVariants.Outlined,
  label,
  type = 'text',
  required = false,
  disabled = false,
  readOnly = false,
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
  value: propsValue = '',
  defaultValue,
  active,
}, inputRef) => {
  const [value, setValue] = useState<string>(propsValue || defaultValue || '');

  const InputComponent = useMemo(
    () => multiline ? InputWrapper.withComponent('textarea') : InputWrapper,
    [multiline],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(event.target.value);
      if (onChange) { onChange(event.target.value); }
    },
    [],
  );

  const ref = typeof inputRef.current === 'undefined' ? undefined : inputRef;

  return (
    <Wrapper disabled={disabled}>
      <MaskedInput
        ref={ref}
        mask={mask}
        pipe={pipe}
        guide={false}
        keepCharPositions
        onChange={handleChange}
        value={propsValue || value}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        type={type}
        defaultValue={undefined}
        render={(ref: string & ((inputElement: HTMLElement) => string), props: Omit<TextFieldProps, 'onChange'>) => (
          <InputComponent
            ref={ref}
            multiline={multiline}
            iconLeft={iconLeft}
            iconRight={iconRight}
            variant={variant}
            active={active}
            value={propsValue || value}
            readOnly={readOnly}
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

export const TextFieldWithRef = forwardRef(TextField);
