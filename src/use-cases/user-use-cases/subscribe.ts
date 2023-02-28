import { CreateUserParams, UserEntity } from "@/domain/entities/user-entity";

export interface Subscribe {
  execute: (data: CreateUserParams) => Promise<UserEntity>;
}
