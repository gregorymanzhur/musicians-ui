import React, { Component, ReactNode } from 'react';
import { themes, Global } from '../../theme';
import { ThemeProvider } from '../../theme';
import { globalStyles } from './styled';

interface Props {
  themeName?: string;
  children: ReactNode;
}

export class Base extends Component<Props> {
  static defaultProps: Partial<Props> = {
    themeName: 'base',
  };

  getThemeObj = (themeName: string) => themes[themeName];

  render() {
    const { themeName, children } = this.props;
    const theme = this.getThemeObj(themeName!);

    return (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {children}
      </ThemeProvider>
    );
  }
}
