import { ApolloServer } from "apollo-server-express";
import express from "express";
import { schema } from "../../modules/graphql/schema";
import { logger } from "../../modules/middleware/logger";
import { Context } from "../../types/Context";
import { __prod__ } from "../constants";
import { prisma } from "../prisma";

const app = express();

// init middleware
app.set("trust proxy", !__prod__);
app.use(express.json());
app.use(express.text());
app.use(logger);

// TODO: Configure session store

function buildContext({ req, res }: Context): Context {
  return {
    req,
    res,
    db: prisma,
  } as Context;
}

export async function createServer() {
  const server = new ApolloServer({
    schema: schema,
    csrfPrevention: true,
    cache: "bounded",
    context: buildContext,
  });

  return { app, server };
}
