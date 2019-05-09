import React, { Component } from 'react';
import { Omit } from '../../../helpers/types';
import { IconTypes } from '../../Icon';
import { TextField, TextFieldProps } from '../TextField';

export interface PasswordFieldProps extends Omit<TextFieldProps, 'type' | 'iconLeft' | 'iconRight'> {}

interface PasswordFieldState {
  readonly isVisible: boolean;
}

export class PasswordField extends Component<PasswordFieldProps, PasswordFieldState> {
  state: PasswordFieldState = {
    isVisible: false,
  };

  togglePasswordVisibility = () => this.setState({ isVisible: !this.state.isVisible });

  render() {
    const { isVisible } = this.state;

    return (
      <TextField
        type={isVisible ? 'text' : 'password'}
        iconRight={{
          type: IconTypes.FA,
          title: isVisible ? 'FaEye' : 'FaEyeSlash',
          onClick: this.togglePasswordVisibility,
        }}
        {...this.props}
      />
    )
  }
}