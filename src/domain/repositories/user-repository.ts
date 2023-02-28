import { InsertUserParams, UserEntity } from "../entities/user-entity";

export interface UserRepository {
  insert: (data: InsertUserParams) => Promise<UserEntity>;
}
