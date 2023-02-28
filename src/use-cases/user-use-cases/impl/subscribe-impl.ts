import { InsertUserParams, UserEntity } from "@/domain/entities/user-entity";
import { UserRepository } from "@/domain/repositories/user-repository";
import { Subscribe } from "../subscribe";

export class SubscribeImpl implements Subscribe {
  constructor(
    private readonly repository: UserRepository,
    private readonly validation: (data: InsertUserParams) => boolean
  ) {}

  async execute(data: InsertUserParams): Promise<UserEntity> {
    const isValid = this.validation(data);
    if (!isValid) throw new Error("Invalid email value!");
    return await this.repository.insert(data);
  }
}
