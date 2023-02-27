import { Email } from "./email";
import { emailValidator } from "../../validators/email-validator";

export const buildMakeEmail = (email: string) => {
  return new Email(email, emailValidator);
};
