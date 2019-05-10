import React, { FC } from 'react';
import { themes, Global } from '../../theme';
import { ThemeProvider } from '../../theme';
import { globalStyles } from './styled';

interface Props {
  themeName?: string;
}

export const Base: FC<Props> = ({ themeName = 'base', children }) => (
  <ThemeProvider theme={themes[themeName]}>
    <Global styles={globalStyles} />
    {children}
  </ThemeProvider>
);
