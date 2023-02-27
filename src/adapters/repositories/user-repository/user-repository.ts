import { TRepository } from "../../../infra/services/prisma-services";
import { IUserRepository } from "./iuser-repository";

import { Email } from "../../../entities/email";
import { User } from "../../../entities/user";

export class UserRepository implements IUserRepository {
  constructor(private readonly repository: TRepository) {}

  async insert({ email }: Email): Promise<User> {
    try {
      const insertedUser = await this.repository.user.create({
        data: {
          email: email,
        },
      });
      return Object.freeze(insertedUser);
    } catch (err) {
      console.error(err);
      process.exit(1);
    } finally {
      await this.repository.$disconnect();
    }
  }
}
