import { z } from "zod";

import { DeleteUserParams } from "@/domain/entities/user-entity";
import { IDomainError } from "@/domain/errors/domain-error";

const userSchema = z.object({
  id: z
    .number({
      invalid_type_error: "Tipo inválido. Esperava um número",
      required_error: "O valor de ID é obrigatório",
    })
    .int({ message: "Tipo inválido. Esperava um número inteiro" }),
});

export function deleteUserValidation({ id }: DeleteUserParams): IDomainError {
  const validated = userSchema.safeParse({ id });
  if (validated.success) return { hasError: false, message: undefined };
  return { hasError: true, message: validated.error.issues[0].message };
}
