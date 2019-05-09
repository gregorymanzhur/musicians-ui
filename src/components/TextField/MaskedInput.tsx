import { ComponentType } from 'react';
import ReactMaskedInput, { MaskedInputProps } from 'react-text-mask';
import { Omit } from '../../helpers/types';

interface MaskedInputPropsFixed extends Omit<MaskedInputProps, 'mask'> {
  mask: (string | RegExp)[] | false;
}

export const MaskedInput = ReactMaskedInput as ComponentType<MaskedInputPropsFixed>;
