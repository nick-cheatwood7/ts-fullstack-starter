import { inputObjectType, objectType } from "nexus";
import { BaseResult, Node } from "./Globals";
import { User } from "./User";

export const Submission = objectType({
  name: "Submission",
  definition(t) {
    t.implements(Node), t.nonNull.id("userId");
    t.field("user", {
      type: User,
      resolve: async (root, _args, ctx) => {
        return await ctx.db.user.findUnique({ where: { id: root.userId } });
      },
    });
    t.nonNull.string("favoriteColor");
    t.nonNull.string("favoriteFood");
    t.nonNull.int("age");
  },
});

export const CreateSubmissionInput = inputObjectType({
  name: "CreateSubmissionInput",
  definition(t) {
    t.nonNull.string("favoriteColor");
    t.nonNull.string("favoriteFood");
    t.nonNull.int("age");
  },
});

export const CreateSubmissionResult = objectType({
  name: "CreateSubmissionResult",
  definition(t) {
    t.implements(BaseResult);
    t.field("submission", {
      type: Submission,
    });
  },
});
