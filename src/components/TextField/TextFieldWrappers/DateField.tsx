import React, { FC } from 'react';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { Omit } from '../../../helpers/types';
import { Pipe } from '../MaskedInput';
import { TextField, TextFieldProps } from '../TextField';

const autoCorrectedDatePipe: Pipe = createAutoCorrectedDatePipe('dd/mm/yyyy');

export interface DateFieldProps extends Omit<TextFieldProps, 'mask'> {}

export const DateField: FC<DateFieldProps> = props => (
  <TextField
    {...props}
    mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,]}
    pipe={autoCorrectedDatePipe}
  />
);
