import React, { Component, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';

import { StandardProps } from '../commonTypes';
import { Icon, IconProps } from '../Icon';
import { MaskedInput, Mask, Pipe } from './MaskedInput';
import { Wrapper, InputWrapper, LabelWrapper, IconWrapper } from './styled';

export enum TextFieldVariants {
  Outlined = 'outlined',
  Filled = 'filled',
}

export interface TextFieldProps extends StandardProps {
  variant?: TextFieldVariants;
  label: string;
  value?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  mask?: Mask;
  pipe?: Pipe;

  iconLeft?: IconProps;
  iconRight?: IconProps;

  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface TextFieldState {
  readonly value: string;
}

export class TextField extends Component<TextFieldProps, TextFieldState> {
  static defaultProps: Partial<TextFieldProps> = {
    variant: TextFieldVariants.Outlined,
    disabled: false,
    required: false,
    multiline: false,
    mask: false,
    type: 'text',
  };

  state = {
    value: this.props.value || '',
  };

  InputComponent = this.props.multiline ? InputWrapper.withComponent('textarea') : InputWrapper;

  handleChange = (event: ChangeEvent<any>) => {
    this.setState({ value: event.target.value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    const { onChange, required, mask, pipe, ...restProps } = this.props;
    const { value } = this.state;

    return (
      <Wrapper disabled={restProps.disabled}>
        <MaskedInput
          mask={mask!}
          pipe={pipe}
          guide={false}
          keepCharPositions
          onChange={this.handleChange}
          value={value}
          {...restProps}
          render={(ref: string & ((inputElement: HTMLElement) => string), props: TextFieldProps) => (
            <this.InputComponent ref={ref} {...props} value={value} />
          )}
        />
        {restProps.iconLeft && (
          <IconWrapper variant={restProps.variant} iconLeft={restProps.iconLeft}>
            <Icon {...restProps.iconLeft} />
          </IconWrapper>
        )}
        {restProps.iconRight && (
          <IconWrapper variant={restProps.variant} iconRight={restProps.iconRight}>
            <Icon {...restProps.iconRight} />
          </IconWrapper>
        )}
        <LabelWrapper
          variant={restProps.variant}
          iconLeft={restProps.iconLeft}
          required={required}
        >
          {restProps.label}
        </LabelWrapper>
      </Wrapper>
    );
  }
}
