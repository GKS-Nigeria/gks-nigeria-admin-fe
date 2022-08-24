/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@emotion/styled";
import { ThemeColors } from "../../theme/style";



interface TextProps {
  variant?: string;
  color: ThemeColors;
}

const dynamicTextStyle = (props: any) => ({
  color: props.theme.palette[props.color],
  fontWeight: 400,
  margin: 0,
  "&.fs-34": {
    fontSize: "2.125rem",
    [`@media(min-width: ${props.theme.breakpoints.md}px)`]: {
      fontSize: "2.125rem",
    },
  },
  "&.fs-32": {
    fontSize: "2rem",
  },
  "&.fs-28": {
    fontSize: "1.75rem",
    [`@media(min-width: ${props.theme.breakpoints.md}px)`]: {
      fontSize: "1.75rem",
    },
  },
  "&.fs-22": {
    fontSize: "1.375rem",
  },
  "&.fs-20": {
    fontSize: "1.25rem",
  },
  "&.fs-17": {
    fontSize: "1.0625rem",
  },
  "&.fs-15": {
    fontSize: "0.9375rem",
  },
  "&.fs-14": {
    fontSize: "0.875rem",
  },
  "&.fs-13": {
    fontSize: "0.8125rem",
  },
  "&.fs-12": {
    fontSize: "0.75rem",
  },
  "&.fs-10": {
    fontSize: "0.625rem",
  },
  "&.fw-500": {
    fontWeight: 500,
  },
});

export const Text = styled.p<TextProps>((props) => ({
  ...dynamicTextStyle(props),
}));

export const LinkText = styled("a")<TextProps>((props) => ({
  ...dynamicTextStyle(props),
  textDecoration: "none",
  "&:hover": {
    color: props.theme.palette.blue_6,
  },
  "&.nav-link": {
    padding: "0.75em 2em",
    marginBottom: "1em",
    borderRadius: 10,
    "&.active": {
      background: props.theme.palette.green,
    },
  },
}));

