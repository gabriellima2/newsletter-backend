import { UserData } from "../../../domain/user-data";

export interface IUserRepository {
  insert: (email: string) => Promise<Readonly<UserData>>;
}
