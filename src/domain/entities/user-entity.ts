export interface UserEntity {
  id: number;
  email: string;
}

export type CreateUserParams = Omit<UserEntity, "id">;
export type DeleteUserParams = Pick<UserEntity, "id">;
