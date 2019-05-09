import React, { Component, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import { StandardProps } from '../commonTypes';
import { Icon, IconProps } from '../Icon';
import { Wrapper, InputWrapper, LabelWrapper, IconWrapper } from './styled';

export enum TextFieldVariants {
  Outlined = 'outlined',
  Filled = 'filled',
}

export interface TextFieldProps extends StandardProps {
  variant?: TextFieldVariants;
  disabled?: boolean;
  label: string;
  value?: string;
  required?: boolean;
  type?: string;

  iconLeft?: IconProps;
  iconRight?: IconProps;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

interface TextFieldState {
  readonly value: string;
}

export class TextField extends Component<TextFieldProps, TextFieldState> {
  static defaultProps: Partial<TextFieldProps> = {
    variant: TextFieldVariants.Outlined,
    disabled: false,
    required: false,
    type: 'text',
  };

  state = {
    value: this.props.value || '',
  };

  handleChange = (event: ChangeEvent<any>) => {
    this.setState({ value: event.target.value });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    const { onChange, ...restProps } = this.props;
    const { value } = this.state;

    return (
      <Wrapper disabled={restProps.disabled}>
        <InputWrapper onChange={this.handleChange} value={value} {...restProps} />
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
        <LabelWrapper variant={restProps.variant} {...restProps}>{restProps.label}</LabelWrapper>
      </Wrapper>
    );
  }
}
