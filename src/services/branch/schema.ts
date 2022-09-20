import * as yup from "yup";

export const branchSchema = yup.object({
    name: yup
      .string()
      .required("Enter branch name "),
    address: yup
      .string()
      .required("Address is required")
  });