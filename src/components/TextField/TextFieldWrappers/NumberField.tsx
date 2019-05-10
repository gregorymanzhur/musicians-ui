import React, { Component } from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { Omit } from '../../../helpers/types';
import { TextField, TextFieldProps } from '../TextField';

export interface NumberFieldProps extends Omit<TextFieldProps, 'mask' | 'iconLeft' | 'iconRight'> {
  allowDecimal?: boolean;
  allowNegative?: boolean;
}

export class NumberField extends Component<NumberFieldProps> {
  static defaultProps: Partial<NumberFieldProps> = {
    allowDecimal: false,
    allowNegative: false,
  };

  numberMask = createNumberMask({
    prefix: '',
    includeThousandsSeparator: false,
    decimalLimit: null,
    allowDecimal: this.props.allowDecimal,
    allowNegative: this.props.allowNegative,
  });

  render() {
    return (
      <TextField
        mask={this.numberMask}
        {...this.props}
      />
    );
  }
}
