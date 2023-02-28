import {
  InsertUserParams,
  UserEntity,
} from "../../../../domain/entities/user-entity";
import { UserRepository } from "../../../../domain/repositories/user-repository";
import { MainRepository } from "../../../services/prisma-services";

export class UserPrismaRepositoryAdapter implements UserRepository {
  constructor(private readonly repository: MainRepository) {}

  async insert(data: InsertUserParams): Promise<UserEntity> {
    try {
      const insertedUser = await this.repository.user.create({ data });
      return Object.freeze(insertedUser);
    } catch (err) {
      console.error(err);
      process.exit(1);
    } finally {
      await this.repository.$disconnect();
    }
  }
}
