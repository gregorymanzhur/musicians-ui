import React, { FC } from 'react';
import emailMask from 'text-mask-addons/dist/emailMask';
import { Omit } from '../../../helpers/types';
import { TextField, TextFieldProps } from '../TextField';

export interface EmailFieldProps extends Omit<TextFieldProps, 'mask'> {}

export const EmailField: FC<EmailFieldProps> = props => (
  <TextField
    {...props}
    mask={emailMask}
  />
);
