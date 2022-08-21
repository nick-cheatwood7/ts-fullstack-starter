import { extendType, nonNull } from "nexus";
import { NexusGenObjects } from "../../../generated/nexus-types";
import {
  CreateSubmissionInput,
  CreateSubmissionResult,
} from "../types/Submission";

export const CreateSubmission = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createSubmission", {
      type: CreateSubmissionResult,
      args: { options: nonNull(CreateSubmissionInput) },
      resolve: async (
        _root,
        { options },
        ctx
      ): Promise<NexusGenObjects["CreateSubmissionResult"]> => {
        try {
          const submission = await ctx.db.submission.create({
            data: {
              userId: "cl72qqrx90004o0oznz7stkzm",
              ...options,
            },
          });
          return {
            message: "Submission created successfully!",
            error: false,
            submission,
          };
        } catch (error) {
          return {
            message: "Unable to create Submission",
            error: true,
          };
        }
      },
    });
  },
});
