import { inputObjectType, objectType } from "nexus";
import { BaseResult, Node } from "./Globals";

export const User = objectType({
  name: "User",
  definition(t) {
    t.implements(Node);
    t.nonNull.string("email");
    t.nonNull.string("firstName");
    t.string("lastName");
    t.date("lastLogin");
  },
});

export const CreateUserInput = inputObjectType({
  name: "RegisterInput",
  definition(t) {
    t.nonNull.string("email");
    t.nonNull.string("password");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
  },
});

export const CreateUserResult = objectType({
  name: "CreateUserResult",
  definition(t) {
    t.implements(BaseResult),
      t.field("user", {
        type: User,
      });
  },
});
