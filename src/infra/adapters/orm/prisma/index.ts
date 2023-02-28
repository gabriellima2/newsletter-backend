import { UserPrismaRepositoryAdapter } from "./user-prisma-repository-adapter";
import { prisma } from "@/infra/services/prisma-services";

export const makeUserPrismaControllerAdapter = () => {
  return new UserPrismaRepositoryAdapter(prisma);
};
