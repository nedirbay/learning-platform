import { injectable, inject } from "tsyringe";
import type { AuthRepository } from "../repository/AuthRepository";
import type { User } from "../entity/User";

@injectable()
export class LoginUseCase {
  constructor(@inject("AuthRepository") private authRepository: AuthRepository) {}

  async execute(email: string, password: string): Promise<User> {
    return this.authRepository.login(email, password);
  }
}
