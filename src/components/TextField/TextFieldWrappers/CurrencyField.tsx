import React, { Component } from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { Omit } from '../../../helpers/types';
import { IconTypes } from '../../Icon';
import { Mask } from '../MaskedInput';
import { TextField, TextFieldProps } from '../TextField';

export enum CurrencyTypes {
  Ruble = 'ruble',
  Dollar = 'dollar',
  Euro = 'euro',
}

export interface CurrencyFieldProps extends Omit<TextFieldProps, 'mask' | 'iconLeft' | 'iconRight'> {
  currency?: CurrencyTypes;
}

export class CurrencyField extends Component<CurrencyFieldProps> {
  static defaultProps: Partial<CurrencyFieldProps> = {
    currency: CurrencyTypes.Ruble,
  };

  iconTitlesDict: Record<CurrencyTypes, string> = {
    [CurrencyTypes.Ruble]: 'FaRubleSign',
    [CurrencyTypes.Dollar]: 'FaDollarSign',
    [CurrencyTypes.Euro]: 'FaEuroSign',
  };

  currencyMask: Mask = createNumberMask({
    prefix: '',
    allowDecimal: true,
    thousandsSeparatorSymbol: this.props.currency === CurrencyTypes.Ruble ? ' ' : ',',
  });

  render() {
    const { currency } = this.props;

    return (
      <TextField
        iconLeft={{ type: IconTypes.FA, title: this.iconTitlesDict[currency!] }}
        mask={this.currencyMask}
        {...this.props}
      />
    );
  }
}
