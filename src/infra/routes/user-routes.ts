import express, { type Request, type Response } from "express";
import { makeUserController } from "../../adapters/controllers";

const router = express.Router();
router.post("/user", async (req: Request, res: Response) => {
  const response = await makeUserController().execute(req);
  res.send(response);
});

export const userRoutes = router;
