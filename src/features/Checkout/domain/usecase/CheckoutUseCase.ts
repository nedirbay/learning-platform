import { injectable, inject } from "tsyringe";
import type { CartRepository } from "../repository/CartRepository";

@injectable()
export class CheckoutUseCase {
  constructor(@inject("CartRepository") private repository: CartRepository) {}

  async execute(): Promise<void> {
    return this.repository.checkout();
  }
}
