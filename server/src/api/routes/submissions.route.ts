import { Request, Response, Router } from "express";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  console.dir(req.body);
  return res.status(200).json({
    error: false,
    message: "Submission created successfully!",
  });
});

export default router;
