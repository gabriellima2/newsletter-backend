import { Request } from "express";

import { UserPrismaRepositoryAdapter } from "@/infra/adapters/orm/prisma/user-prisma-repository-adapter";
import { createUserValidation } from "@/validations/create-user-validation";

import { SubscribeImpl } from "@/use-cases/user-use-cases/impl/subscribe-impl";
import { UserEntity } from "@/domain/entities/user-entity";

import {
  HttpStatusCode,
  defaultHeaders,
} from "@/data/protocols/http-protocols";

export class UserController {
  constructor(private readonly repository: UserPrismaRepositoryAdapter) {}

  async create(req: Request) {
    const { email } = req.body;
    const subscribeCase = new SubscribeImpl(
      this.repository,
      createUserValidation
    );

    try {
      const insertedUser = await subscribeCase.execute({ email });
      return {
        ...defaultHeaders<UserEntity>({
          statusCode: HttpStatusCode.ok,
          body: insertedUser,
        }),
      };
    } catch (error) {
      return {
        ...defaultHeaders<unknown>({
          statusCode: HttpStatusCode.badRequest,
          body: error,
        }),
      };
    }
  }
}
