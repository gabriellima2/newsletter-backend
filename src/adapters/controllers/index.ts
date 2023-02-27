import { UserController } from "./user-controller";
import { makeUserRepository } from "../repositories/user-repository";

export const makeUserController = () => {
  return new UserController(makeUserRepository());
};
