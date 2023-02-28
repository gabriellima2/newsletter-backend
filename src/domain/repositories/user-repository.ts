import {
  CreateUserParams,
  DeleteUserParams,
  UserEntity,
} from "../entities/user-entity";

export interface UserRepository {
  create: (data: CreateUserParams) => Promise<UserEntity>;
  delete: (data: DeleteUserParams) => Promise<UserEntity>;
}
