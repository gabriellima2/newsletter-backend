import { CreateUserParams, UserEntity } from "@/domain/entities/user-entity";
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
}
