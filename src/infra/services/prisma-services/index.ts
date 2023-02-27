import { prisma } from "./prisma-client";

export * from "./prisma-client";
export type TRepository = typeof prisma;
