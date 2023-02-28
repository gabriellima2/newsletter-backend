import { CreateUserParams, UserEntity } from "../entities/user-entity";

export interface UserRepository {
  create: (data: CreateUserParams) => Promise<UserEntity>;
}
