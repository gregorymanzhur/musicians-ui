import React, { FC, useMemo } from 'react';
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

const iconTitlesDict: Record<CurrencyTypes, string> = {
  [CurrencyTypes.Ruble]: 'FaRubleSign',
  [CurrencyTypes.Dollar]: 'FaDollarSign',
  [CurrencyTypes.Euro]: 'FaEuroSign',
};

export interface CurrencyFieldProps extends Omit<TextFieldProps, 'mask' | 'iconLeft' | 'iconRight'> {
  currency?: CurrencyTypes;
}

export const CurrencyField: FC<CurrencyFieldProps> = ({ currency = CurrencyTypes.Ruble, ...restProps }) => {
  const currencyMask = useMemo<Mask>(() =>
    createNumberMask({
      prefix: '',
      allowDecimal: true,
      thousandsSeparatorSymbol: currency === CurrencyTypes.Ruble ? ' ' : ',',
    }),
    [currency],
  );

  return (
    <TextField
      iconLeft={{ type: IconTypes.FA, title: iconTitlesDict[currency!] }}
      mask={currencyMask}
      {...restProps}
    />
  );
};
