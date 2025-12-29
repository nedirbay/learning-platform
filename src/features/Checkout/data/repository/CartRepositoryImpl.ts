import { injectable } from "tsyringe";
import type { CartRepository } from "../../domain/repository/CartRepository";
import { type CartItem } from "../../domain/entity/Order";

@injectable()
export class CartRepositoryImpl implements CartRepository {
  private items: CartItem[] = [];

  async getItems(): Promise<CartItem[]> {
    return this.items;
  }

  async addItem(item: CartItem): Promise<void> {
    this.items.push(item);
  }

  async removeItem(courseId: string): Promise<void> {
    this.items = this.items.filter(i => i.courseId !== courseId);
  }

  async checkout(): Promise<void> {
    this.items = [];
  }
}
