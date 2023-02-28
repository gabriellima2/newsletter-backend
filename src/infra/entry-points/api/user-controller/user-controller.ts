import { Request } from "express";

import { SubscribeImpl } from "../../../../use-cases/user-use-cases/impl/subscribe-impl";
import { createUserValidation } from "../../../../validations/insert-user-validation";
import { UserPrismaRepositoryAdapter } from "../../../adapters/orm/prisma/user-prisma-repository-adapter";

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
        headers: {
          "Content-Type": "application/json",
          statusCode: 201,
          body: { insertedUser },
        },
      };
    } catch (error) {
      return {
        headers: {
          "Content-Type": "application/json",
          statusCode: 400,
          body: { error },
        },
      };
    }
  }
}
