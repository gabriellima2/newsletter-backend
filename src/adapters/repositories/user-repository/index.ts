import { UserRepository } from "./user-repository";
import { prisma } from "../../../infra/services/prisma-services/prisma-client";

export const makeUserRepository = () => new UserRepository(prisma);
