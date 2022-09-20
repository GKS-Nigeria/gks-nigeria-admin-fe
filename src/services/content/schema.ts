import * as yup from "yup";

export const contentSchema = yup.object({
    title: yup
      .string()
      .required("Title is required "),
    body: yup
      .string()
      .required("Body content is required")
  });