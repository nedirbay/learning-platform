import { injectable } from "tsyringe";
import type { AuthRepository } from "../../domain/repository/AuthRepository";
import { type User } from "../../domain/entity/User";

@injectable()
export class AuthRepositoryImpl implements AuthRepository {
  async login(email: string, password: string): Promise<User> {
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: "1",
          email,
          name: "Test User",
          role: "student",
        });
      }, 1000);
    });
  }

  async register(name: string, email: string, password: string): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: "2",
            email,
            name,
            role: "student",
          });
        }, 1000);
      });
  }

  async logout(): Promise<void> {
    return Promise.resolve();
  }

  async getCurrentUser(): Promise<User | null> {
    return null;
  }
}
