import { InsertUserParams, UserEntity } from "@/domain/entities/user-entity";

export interface Subscribe {
  execute: (data: InsertUserParams) => Promise<UserEntity>;
}
