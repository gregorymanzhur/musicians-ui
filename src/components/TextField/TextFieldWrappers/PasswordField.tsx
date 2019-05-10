import React, { FC, useState, useCallback } from 'react';
import { Omit } from '../../../helpers/types';
import { IconTypes } from '../../Icon';
import { TextField, TextFieldProps } from '../TextField';

export interface PasswordFieldProps extends Omit<TextFieldProps, 'type' | 'iconLeft' | 'iconRight'> {}

export const PasswordField: FC<PasswordFieldProps> = props => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = useCallback(() => setIsVisible(prevIsVisible => !prevIsVisible), []);

  return (
    <TextField
      type={isVisible ? 'text' : 'password'}
      iconRight={{
        type: IconTypes.FA,
        title: isVisible ? 'FaEye' : 'FaEyeSlash',
        onClick: toggleVisibility,
      }}
      {...props}
    />
  )
};
