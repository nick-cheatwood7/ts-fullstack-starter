import { object, string } from "zod";
import { emailSchema } from "./validateEmail";
import { passwordSchema } from "./validatePassword";

export const createUserSchema = object({
  email: emailSchema,
  password: passwordSchema,
  firstName: string()
    .min(2, "firstName is too short")
    .max(200, "firstName is too long"),
  lastName: string()
    .min(2, "lastName is too short")
    .max(200, "lastName is too long"),
});
