import { DeleteUserParams, UserEntity } from "@/domain/entities/user-entity";

export interface Unsubscribe {
  execute: (data: DeleteUserParams) => Promise<UserEntity>;
}
