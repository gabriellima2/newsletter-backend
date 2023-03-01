import { CreateUserParams, UserEntity } from "@/domain/entities/user-entity";
import { DomainError, IDomainError } from "@/domain/errors/domain-error";
import { UserRepository } from "@/domain/repositories/user-repository";
import { Subscribe } from "../subscribe";

export class SubscribeImpl implements Subscribe {
  constructor(
    private readonly repository: UserRepository,
    private readonly validation: (data: CreateUserParams) => IDomainError
  ) {}

  async execute(data: CreateUserParams): Promise<UserEntity> {
    const validationResult = this.validation(data);
    if (validationResult.hasError) throw new DomainError(validationResult);
    return await this.repository.create(data);
  }
}
