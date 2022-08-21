import argon2 from "argon2";
import { extendType, nonNull } from "nexus";
import { ZodError } from "zod";
import { NexusGenObjects } from "../../../generated/nexus-types";
import { createUserSchema } from "../../../utils/validators/validateUser";
import { CreateUserInput, CreateUserResult } from "../types/User";

export const CreateUser = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: CreateUserResult,
      args: { options: nonNull(CreateUserInput) },
      resolve: async (
        _root,
        { options },
        { db }
      ): Promise<NexusGenObjects["CreateUserResult"]> => {
        // validate input
        try {
          createUserSchema.parse(options);
        } catch (error) {
          const message =
            (error as ZodError).issues[0].message || "Invalid input";
          return {
            message,
            error: true,
          };
        }

        try {
          const hashedPassword = await argon2.hash(options.password);
          const user = await db.user.create({
            data: {
              ...options,
              email: options.email.toLowerCase(),
              password: hashedPassword,
            },
          });
          return {
            message:
              "Thank you for registering! Please check your email to validate your account",
            error: false,
            user,
          };
        } catch (error) {
          return {
            message: "Account already exists.",
            error: true,
          };
        }
      },
    });
  },
});
