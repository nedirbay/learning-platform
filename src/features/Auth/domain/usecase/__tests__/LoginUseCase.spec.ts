import "reflect-metadata";
import { describe, it, expect, vi } from "vitest";
import { LoginUseCase } from "../LoginUseCase";
import type { AuthRepository } from "../../repository/AuthRepository";

describe("LoginUseCase", () => {
  it("should return user when login is successful", async () => {
    const mockRepo: AuthRepository = {
      login: vi.fn(),
      register: vi.fn(),
      logout: vi.fn(),
      getCurrentUser: vi.fn(),
    };

    const mockUser = { id: "1", email: "test@test.com", name: "Test", role: "student" as const };
    (mockRepo.login as any).mockResolvedValue(mockUser);

    const useCase = new LoginUseCase(mockRepo);
    const result = await useCase.execute("test@test.com", "pass");

    expect(mockRepo.login).toHaveBeenCalledWith("test@test.com", "pass");
    expect(result).toEqual(mockUser);
  });
});
