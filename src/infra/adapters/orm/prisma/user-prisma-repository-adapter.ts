import {
  CreateUserParams,
  DeleteUserParams,
  UserEntity,
} from "@/domain/entities/user-entity";
import { UserRepository } from "@/domain/repositories/user-repository";
import { MainRepository } from "@/infra/services/prisma-services";

export class UserPrismaRepositoryAdapter implements UserRepository {
  constructor(private readonly repository: MainRepository) {}

  async create(data: CreateUserParams): Promise<UserEntity> {
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

  async delete({ id }: DeleteUserParams): Promise<UserEntity> {
    try {
      const removedUser = await this.repository.user.delete({ where: { id } });
      return Object.freeze(removedUser);
    } catch (err) {
      console.error(err);
      process.exit(1);
    } finally {
      await this.repository.$disconnect();
    }
  }
}
