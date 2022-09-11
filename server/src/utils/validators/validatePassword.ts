import { string } from "zod";

export const passwordSchema = string({
  required_error: "password is required",
})
  .min(3, "password too short")
  .max(200, "password too long");
