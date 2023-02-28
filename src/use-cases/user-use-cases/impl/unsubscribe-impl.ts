import { DeleteUserParams, UserEntity } from "@/domain/entities/user-entity";
import { UserRepository } from "@/domain/repositories/user-repository";
import { Unsubscribe } from "../unsubscribe";

export class UnsubscribeImpl implements Unsubscribe {
  constructor(
    private readonly repository: UserRepository,
    private readonly validation: (data: DeleteUserParams) => boolean
  ) {}

  async execute(data: DeleteUserParams): Promise<UserEntity> {
    const isValid = this.validation(data);
    if (!isValid) throw new Error("Invalid values!");
    return await this.repository.delete(data);
  }
}
