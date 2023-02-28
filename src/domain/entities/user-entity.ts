export interface UserEntity {
  id: number;
  email: string;
}

export type InsertUserParams = Omit<UserEntity, "id">;
