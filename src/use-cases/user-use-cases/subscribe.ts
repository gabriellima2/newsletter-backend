import { buildMakeEmail } from "../../domain/email-domain";
import { UserData } from "../../domain/user-data";

export class Subscribe {
  constructor(private readonly repository: any) {}

  async execute(email: string): Promise<UserData> {
    const buildedEmail = buildMakeEmail(email);
    const isValid = buildedEmail.validate();
    if (!isValid) throw new Error("Invalid email value!");
    return await this.repository.insert({ email });
  }
}
