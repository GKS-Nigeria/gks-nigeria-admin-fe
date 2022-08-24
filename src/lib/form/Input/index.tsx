import { Input as StrapInput } from "reactstrap";
import styled from "@emotion/styled";

export const Input = styled(StrapInput)(({ theme }) => ({
  border: `1px solid ${theme.palette.blue_6}`,
  backgroundColor: theme.palette.background,
  borderRadius: 8,
  padding: "1rem",
  fontSize: 13,
  fontWeight: 400,

  "&::placeholder": {
    color: `${theme.palette.black_2}`,
  },

  "&:focus": {
    borderColor: `${theme.palette.blue_6}`,
    boxShadow: "none",
  },

  "&[aria-invalid = true]": {
    borderColor: `${theme.palette.red}`,
    color: `${theme.palette.red}`,
  },

  "&:disabled": {
    backgroundColor: `${theme.palette.black_2}`,
    borderColor: "transparent",
  },
}));
