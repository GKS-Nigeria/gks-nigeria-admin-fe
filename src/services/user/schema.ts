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

// export const juniorAdminSchema = yup.object({
//   username: yup
//     .string()
//     .required("username is required")
//     .matches(/^[A-Za-z0-9]+$/, "username must only contain letters and numbers")
//     .min(6, "username must be a minimum of 6 characters"),
//   email_address: yup
//     .string()
//     .email("must be a valid email")
//     .required("email is required"),
//   gender: yup.string().required("gender is required"),
//   date_of_birth: yup.date().required("date of birth is required"),
//   coverage_areas: yup.string().required("coverage area is required"),
//   operational_hours: yup.array(yup.string()),
// });
