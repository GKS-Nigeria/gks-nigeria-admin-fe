import * as yup from "yup";

export const loginUserSchema = yup.object({
  code: yup
    .string()
    .length(6, "Token must be up to 6")
    .required("Password is required"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Valid email is required"),
});

export const requestTokenSchema = yup.object({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Valid email is required"),
});

export const juniorAdminSchema = yup.object({
  firstName: yup
    .string()
    .required("first name is required ")
    .matches(/^[A-Za-z]+$/, "first name must only contain letters"),
  lastName: yup
    .string()
    .required("last name is required")
    .matches(/^[A-Za-z]+$/, "last name must only contain letters"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  phone: yup.string().required("phone number is required"),
  
});
