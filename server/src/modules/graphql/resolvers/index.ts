import { extendType } from "nexus";

export * as UserResolvers from "./User";

export const TestQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("OK", {
      type: "Boolean",
      resolve: (_root, _args, _ctx) => {
        return true;
      },
    });
  },
});
