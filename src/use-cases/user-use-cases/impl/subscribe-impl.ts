import { Subscribe } from "../subscribe";

import { CreateUserParams, UserEntity } from "@/domain/entities/user-entity";
import { DefaultError, IDefaultError } from "@/domain/errors/default-error";
import { UserRepository } from "@/domain/repositories/user-repository";

export class SubscribeImpl implements Subscribe {
  constructor(
    private readonly repository: UserRepository,
    private readonly validation: (data: CreateUserParams) => IDefaultError
  ) {}

  async execute(data: CreateUserParams): Promise<UserEntity> {
    const validated = this.validation(data);
    if (validated.hasError) throw new DefaultError(validated);
    return await this.repository.create(data);
  }
}
