import { DeleteUserParams, UserEntity } from "@/domain/entities/user-entity";
import { DomainError, IDomainError } from "@/domain/errors/domain-error";
import { UserRepository } from "@/domain/repositories/user-repository";
import { Unsubscribe } from "../unsubscribe";

export class UnsubscribeImpl implements Unsubscribe {
  constructor(
    private readonly repository: UserRepository,
    private readonly validation: (data: DeleteUserParams) => IDomainError
  ) {}

  async execute(data: DeleteUserParams): Promise<UserEntity> {
    const validated = this.validation(data);
    if (validated.hasError) throw new DomainError(validated);
    return await this.repository.delete(data);
  }
}
