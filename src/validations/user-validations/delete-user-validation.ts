import { DeleteUserParams } from "@/domain/entities/user-entity";

export function deleteUserValidation(data: DeleteUserParams): boolean {
  return true;
}
