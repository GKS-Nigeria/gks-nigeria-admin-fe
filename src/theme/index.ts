import { ITheme } from "./style";

export const theme: ITheme = {
  palette: {
    background: "#FEFEFE",
    black: "#333333",
    black_2: "rgba(51,51,51,0.3)",
    black_3: "rgba(51,51,51,0.1)",
    white: "#fff",
    transparent: "transparent",
    green: "#37BD3C",
    blue_6: "#1C243A",
    red: "#FF0000",
    
  },
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
};

export const mq = Object.values(theme.breakpoints).map(
  (bp) => `@media (min-width: ${bp}px)`
);
