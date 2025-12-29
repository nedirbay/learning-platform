import { injectable } from "tsyringe";
import type { AuthRepository } from "../../domain/repository/AuthRepository";
import { type User } from "../../domain/entity/User";

@injectable()
export class AuthRepositoryImpl implements AuthRepository {
  async login(email: string, password: string): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = {
          id: "1",
          email,
          name: "Test User",
          role: "student" as const,
        };
        localStorage.setItem("user", JSON.stringify(user));
        resolve(user);
      }, 1000);
    });
  }

  async register(name: string, email: string, password: string): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
          const user = {
            id: Date.now().toString(),
            email,
            name,
            role: "student" as const,
          };
          localStorage.setItem("user", JSON.stringify(user));
          resolve(user);
        }, 1000);
      });
  }

  async logout(): Promise<void> {
    localStorage.removeItem("user");
    return Promise.resolve();
  }

  async getCurrentUser(): Promise<User | null> {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  }
}
