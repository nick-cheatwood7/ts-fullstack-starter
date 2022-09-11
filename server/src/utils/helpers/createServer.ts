import cors from "cors";
import express from "express";
import { logger } from "../../api/middleware/logger";
import routes from "../../api/routes";
import { __prod__ } from "../constants";

const app = express();

// init middleware
app.set("trust proxy", !__prod__);
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use(logger);

// router
app.use("/api", routes);

export async function createServer() {
  return { app };
}
