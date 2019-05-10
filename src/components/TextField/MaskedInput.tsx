import { ComponentType } from 'react';
import ReactMaskedInput, { MaskedInputProps as MaskedInputPropsBroken } from 'react-text-mask';
import { Omit } from '../../helpers/types';

export type Mask = (string | RegExp)[] | ((value: string) => (string | RegExp)[]) | false;

export type Pipe = (conformedValue: string, config: any) =>
  | false
  | string
  | {
    value: string;
    indexesOfPipedChars: number[];
  };

export interface MaskedInputProps extends Omit<MaskedInputPropsBroken, 'mask'> {
  mask: Mask;
}

export const MaskedInput = ReactMaskedInput as ComponentType<MaskedInputProps>;
