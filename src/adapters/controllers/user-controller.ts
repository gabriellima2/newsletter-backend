import { UserRepository } from "../repositories/user-repository/user-repository";

export class UserController {
  constructor(private readonly repository: UserRepository) {}

  async execute(req: any) {
    try {
      const { email } = req.body;
      const insertedUser = await this.repository.insert({ email });
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
