import React, { Component } from 'react';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { Omit } from '../../../helpers/types';
import { Pipe } from '../MaskedInput';
import { TextField, TextFieldProps } from '../TextField';

export interface DateFieldProps extends Omit<TextFieldProps, 'mask'> {
  minYear?: number,
  maxYear?: number,
}

export class DateField extends Component<DateFieldProps> {
  autoCorrectedDatePipe: Pipe = createAutoCorrectedDatePipe('dd/mm/yyyy', {
    minYear: this.props.minYear,
    maxYear: this.props.maxYear,
  });

  render() {
    return (
      <TextField
        {...this.props}
        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,]}
        pipe={this.autoCorrectedDatePipe}
      />
    );
  }
}
