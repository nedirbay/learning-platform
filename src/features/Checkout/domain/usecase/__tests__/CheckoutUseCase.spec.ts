import "reflect-metadata";
import { describe, it, expect, vi } from "vitest";
import { CheckoutUseCase } from "../CheckoutUseCase";
import type { CartRepository } from "../../repository/CartRepository";

describe("CheckoutUseCase", () => {
  it("should call checkout on repository", async () => {
    const mockRepo: CartRepository = {
        getItems: vi.fn(),
        addItem: vi.fn(),
        removeItem: vi.fn(),
        checkout: vi.fn()
    };
    
    const useCase = new CheckoutUseCase(mockRepo);
    await useCase.execute();

    expect(mockRepo.checkout).toHaveBeenCalled();
  });
});
