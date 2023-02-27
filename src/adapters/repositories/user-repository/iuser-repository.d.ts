import { Email } from "../../../entities/email";
import { User } from "../../../entities/user";

export interface IUserRepository {
  insert: ({ email }: Email) => Promise<Readonly<User>>;
}
