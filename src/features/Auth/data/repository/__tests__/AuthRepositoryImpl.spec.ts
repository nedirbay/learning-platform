import "reflect-metadata";
import { describe, it, expect } from "vitest";
import { AuthRepositoryImpl } from "../AuthRepositoryImpl";

describe("AuthRepositoryImpl", () => {
  it("should login successfully (mock)", async () => {
    const repo = new AuthRepositoryImpl();
    const user = await repo.login("test@test.com", "pass");
    
    expect(user.email).toBe("test@test.com");
    expect(user.role).toBe("student");
  });

  it("should register successfully (mock)", async () => {
    const repo = new AuthRepositoryImpl();
    const user = await repo.register("New User", "new@test.com", "pass");
    
    expect(user.name).toBe("New User");
    expect(user.email).toBe("new@test.com");
  });
});
