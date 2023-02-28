import { prisma } from "./prisma-client";

export * from "./prisma-client";
export type MainRepository = typeof prisma;
