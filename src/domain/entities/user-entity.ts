export interface UserEntity {
  id: number;
  email: string;
}

export type CreateUserParams = Omit<UserEntity, "id">;
