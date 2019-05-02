import React, { Component, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import { StandardProps } from '../commonTypes';
import { Wrapper, InputWrapper, LabelWrapper } from './styled';

export enum TextFieldVariants {
  Outlined = 'outlined',
  Filled = 'filled',
}

export interface TextFieldProps extends StandardProps {
  variant?: TextFieldVariants;
  disabled?: boolean;
  label?: string;
  value?: string;
  required?: boolean;
  type?: string;

  onChange?: (event: ChangeEvent<any>) => void;
  onFocus?: (event: FocusEvent<any>) => void;
  onBlur?: (event: FocusEvent<any>) => void;
  onKeyPress?: (event: KeyboardEvent<any>) => void;
  onKeyUp?: (event: KeyboardEvent<any>) => void;
  onKeyDown?: (event: KeyboardEvent<any>) => void;
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
    const { label, onChange, ...restProps } = this.props;
    const { value } = this.state;

    return (
      <Wrapper>
        <InputWrapper onChange={this.handleChange} value={value} {...restProps} />
        <LabelWrapper variant={restProps.variant}>{label}</LabelWrapper>
      </Wrapper>
    );
  }
}
