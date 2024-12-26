'use client';
// import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import {CssVarsProvider} from "@mui/joy";

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ThemeProvider theme={theme}>
      <CssVarsProvider>
        {children}
      </CssVarsProvider>
    // </ThemeProvider>
  );
}
