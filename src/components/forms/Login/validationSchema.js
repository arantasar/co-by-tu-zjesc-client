import { object, string } from "yup";

export const validationSchema = object({
  email: string("Adres email")
    .email("Niepoprawny format")
    .required("Pole jest wymagane"),
  password: string("").required("Pole jest wymagane"),
});
