import { type CartItem } from "../entity/Order";

export interface CartRepository {
  getItems(): Promise<CartItem[]>;
  addItem(item: CartItem): Promise<void>;
  removeItem(itemId: string): Promise<void>;
  checkout(): Promise<void>;
}
