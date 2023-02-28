import { CreateUserParams } from "../domain/entities/user-entity";

export function createUserValidation({ email }: CreateUserParams): boolean {
  if (!email) {
    return false;
  }
  if (email.length > 256) {
    return false;
  }
  return true;
}
