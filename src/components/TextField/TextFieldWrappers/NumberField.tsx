import React, { FC, useMemo } from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { Omit } from '../../../helpers/types';
import { Mask } from '../MaskedInput';
import { TextField, TextFieldProps } from '../TextField';

export interface NumberFieldProps extends Omit<TextFieldProps, 'mask' | 'iconLeft' | 'iconRight'> {
  allowDecimal?: boolean;
  allowNegative?: boolean;
}

export const NumberField: FC<NumberFieldProps> = ({
  allowDecimal = false,
  allowNegative = false,
  ...restProps
}) => {
  const numberMask = useMemo<Mask>(() =>
    createNumberMask({
      prefix: '',
      includeThousandsSeparator: false,
      decimalLimit: null,
      allowDecimal: allowDecimal,
      allowNegative: allowNegative,
    }),
    [allowDecimal, allowNegative],
  );

  return (
    <TextField
      mask={numberMask}
      {...restProps}
    />
  );
};
