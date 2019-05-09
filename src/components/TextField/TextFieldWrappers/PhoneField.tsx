import React, { FC } from 'react';
import { Omit } from '../../../helpers/types';
import { IconTypes } from '../../Icon';
import { TextField, TextFieldProps } from '../TextField';

export interface PhoneFieldProps extends Omit<TextFieldProps, 'mask' | 'iconLeft' | 'iconRight'> {}

export const PhoneField: FC<PhoneFieldProps> = props => (
  <TextField
    {...props}
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    iconLeft={{ type: IconTypes.FA, title: 'FaPhone' }}
  />
);