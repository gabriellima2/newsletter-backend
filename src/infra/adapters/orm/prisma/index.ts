import { prisma } from "../../../services/prisma-services";
import { UserPrismaRepositoryAdapter } from "./user-prisma-repository-adapter";

export const makeUserPrismaControllerAdapter = () => {
  return new UserPrismaRepositoryAdapter(prisma);
};
