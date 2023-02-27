import { TRepository } from "../../../infra/services/prisma-services";
import { IUserRepository } from "./iuser-repository";

import { UserData } from "../../../domain/user-data";

export class UserRepository implements IUserRepository {
  constructor(private readonly repository: TRepository) {}

  async insert(email: string): Promise<UserData> {
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
