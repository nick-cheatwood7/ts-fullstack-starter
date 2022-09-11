import { Request, Response, Router } from "express";

// import routes
import healthcheckRouter from "./healthcheck.route";
import submissionRouter from "./submissions.route";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  return res.status(404).json({
    error: true,
    message: "The requested resource could not be found",
  });
});
router.use("/healthcheck", healthcheckRouter);
router.use("/submissions", submissionRouter);

export default router;
