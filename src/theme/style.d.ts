import "@emotion/react";

export type ThemeColors =
  | "background"
  | "black"
  | "black_2"
  | "white"
  | "transparent"
  | "red"
  | "green"
  | "blue_6";

export interface ITheme {
  palette: {
    background: string;
    black: string;
    black_2: string;
    black_3: string;
    white: string;
    transparent: string;
    red: string;
    green: string;
    blue_6: string;

  };
  breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
}

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ITheme {}
}
