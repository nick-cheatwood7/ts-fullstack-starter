import { string } from "zod";

export const emailSchema = string({
  required_error: "email is required",
})
  .max(200, "email is too long")
  .email({ message: "invalid email format" });
