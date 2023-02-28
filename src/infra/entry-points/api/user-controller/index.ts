import type { Request } from "express";

import { makeUserPrismaControllerAdapter } from "@/infra/adapters/orm/prisma";
import { UserController } from "./user-controller";

export const makeUserController = () => {
  return {
    create: (req: Request) =>
      new UserController(makeUserPrismaControllerAdapter()).create(req),
  };
};
