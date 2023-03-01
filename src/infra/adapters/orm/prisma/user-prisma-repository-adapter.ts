import type {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from "@prisma/client/runtime";

import { MainRepository } from "@/infra/services/prisma-services";

import {
  CreateUserParams,
  DeleteUserParams,
  UserEntity,
} from "@/domain/entities/user-entity";
import { UserRepository } from "@/domain/repositories/user-repository";
import { DomainError } from "@/domain/errors/domain-error";

export class UserPrismaRepositoryAdapter implements UserRepository {
  constructor(private readonly repository: MainRepository) {}

  async create(data: CreateUserParams): Promise<UserEntity> {
    try {
      const insertedUser = await this.repository.user.create({ data });
      return Object.freeze(insertedUser);
    } catch (err) {
      throw new DomainError({
        hasError: true,
        message:
          ((err as PrismaClientKnownRequestError).meta?.cause as string) ||
          (err as PrismaClientUnknownRequestError).message,
      });
    } finally {
      await this.repository.$disconnect();
    }
  }

  async delete({ id }: DeleteUserParams): Promise<UserEntity> {
    try {
      const removedUser = await this.repository.user.delete({ where: { id } });
      return Object.freeze(removedUser);
    } catch (err) {
      throw new DomainError({
        hasError: true,
        message:
          ((err as PrismaClientKnownRequestError).meta?.cause as string) ||
          (err as PrismaClientUnknownRequestError).message,
      });
    } finally {
      await this.repository.$disconnect();
    }
  }
}
