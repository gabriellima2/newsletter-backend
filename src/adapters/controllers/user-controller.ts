import { Subscribe } from "../../use-cases/user-use-cases/subscribe";
import { UserRepository } from "../repositories/user-repository/user-repository";

export class UserController {
  constructor(private readonly repository: UserRepository) {}

  async execute(req: any) {
    const { email } = req.body;
    const subscribeCase = new Subscribe(this.repository);

    try {
      const insertedUser = await subscribeCase.execute(email);
      return {
        headers: {
          "Content-Type": "application/json",
          statusCode: 201,
          body: { insertedUser },
        },
      };
    } catch (error) {
      return {
        headers: {
          "Content-Type": "application/json",
          statusCode: 400,
          body: { error },
        },
      };
    }
  }
}
