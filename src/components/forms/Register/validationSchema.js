import { object, ref, string } from "yup";

export const validationSchema = object({
  name: string("Nazwa użytkownika").required("Pole jest wymagane"),
  email: string("Adres email")
    .email("Niepoprawny format")
    .required("Pole jest wymagane"),
  password: string("")
    .required("Pole jest wymagane")
    .min(8, "Minimalna długość hasła - 8 znaków"),
  passwordConfirm: string("")
    .required("Pole jest wymagane")
    .oneOf([ref("password")], "Hasła nie są takie same")
    .min(8, "Minimalna długość hasła - 8 znaków"),
});
