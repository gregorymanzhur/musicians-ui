import React, { FC, useMemo } from 'react';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { Omit } from '../../../helpers/types';
import { Pipe } from '../MaskedInput';
import { TextField, TextFieldProps } from '../TextField';

export interface DateFieldProps extends Omit<TextFieldProps, 'mask'> {
  minYear?: number,
  maxYear?: number,
}

export const DateField: FC<DateFieldProps> = ({ minYear, maxYear, ...restProps }) => {
  const autoCorrectedDatePipe = useMemo<Pipe>(
    () => createAutoCorrectedDatePipe('dd/mm/yyyy', { minYear, maxYear }),
    [minYear, maxYear],
  );

  return (
    <TextField
      {...restProps}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,]}
      pipe={autoCorrectedDatePipe}
    />
  );
};
