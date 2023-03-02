import express, { type Request, type Response } from "express";
import { makeUserController } from "../entry-points/api/user-controller";

const router = express.Router();
router.post("/user", async (req: Request, res: Response) => {
  const response = await makeUserController().create(req);
  res
    .status(response.headers.statusCode)
    .contentType(response.headers["Content-Type"])
    .json(response.headers.body);
});

router.delete("/user/:id", async (req: Request, res: Response) => {
  const response = await makeUserController().delete(req);
  res
    .status(response.headers.statusCode)
    .contentType(response.headers["Content-Type"])
    .json(response.headers.body);
});

export const userRoutes = router;
