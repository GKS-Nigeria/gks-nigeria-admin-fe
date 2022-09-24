/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button as StrapButton } from "reactstrap";
import styled from "@emotion/styled";
import { ThemeColors } from "../../theme/style";

interface ButtonProps {
  variant: ThemeColors;
}

export const Button = styled(StrapButton)<ButtonProps>((props: any) => ({
  backgroundColor: `${props.theme.palette[props.variant]}`,
  borderColor: "transparent",
  borderRadius: 10,
  padding: ".8em",
  width: "160px",
  height: 50,
  boxShadow: "none !important",

  "&.icon-btn": {
    padding: 0,
    margin: 0,
  },

  "&.outlined": {
    backgroundColor: "transparent",
    borderColor: `${props.theme.palette[props.variant]}`,
    color: `${props.theme.palette[props.variant]}`,
  },

  "&:hover": {
    // backgroundColor: `${props.theme.palette[props.variant]}`,
    borderColor: `${props.theme.palette[props.variant]}`,
  },

  "&:focus": {
    backgroundColor: `${props.theme.palette[props.variant]}`,
    borderColor: "transparent",
  },

  "&.disabled": {
    backgroundColor: `${props.theme.palette.gray_2}`,
  },

  "&.link-btn": {
    backgroundColor: "transparent",
    color: props.theme.palette[props.variant],
  },
}));
