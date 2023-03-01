import { Unsubscribe } from "../unsubscribe";

import { DeleteUserParams, UserEntity } from "@/domain/entities/user-entity";
import { DefaultError, IDefaultError } from "@/domain/errors/default-error";
import { UserRepository } from "@/domain/repositories/user-repository";

export class UnsubscribeImpl implements Unsubscribe {
  constructor(
    private readonly repository: UserRepository,
    private readonly validation: (data: DeleteUserParams) => IDefaultError
  ) {}

  async execute(data: DeleteUserParams): Promise<UserEntity> {
    const validated = this.validation(data);
    if (validated.hasError) throw new DefaultError(validated);
    return await this.repository.delete(data);
  }
}
