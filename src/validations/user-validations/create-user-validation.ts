import { z } from "zod";

import { CreateUserParams } from "@/domain/entities/user-entity";
import { IDomainError } from "@/domain/errors/domain-error";

const userSchema = z.object({
  email: z
    .string()
    .email({ message: "E-mail inválido!" })
    .trim()
    .max(256, { message: "O e-mail ultrapassou o limite de 256 caracteres!" }),
});

export function createUserValidation({
  email,
}: CreateUserParams): IDomainError {
  const validate = userSchema.safeParse({ email });
  if (validate.success) return { hasError: false, message: undefined };
  return {
    hasError: true,
    message: validate.error.issues[0].message,
  };
}
