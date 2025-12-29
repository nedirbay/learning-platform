import { injectable, inject } from "tsyringe";
import { type ViewModel } from "@/core/mvvm/useViewModel";
import { MutableStateFlow } from "@/core/flow";
import { CheckoutUseCase } from "../../domain/usecase/CheckoutUseCase";
import { type CartRepository } from "../../domain/repository/CartRepository"; // Normally separate UseCase
import { type CartItem } from "../../domain/entity/Order";

export interface CartState {
  items: CartItem[];
  total: number;
}

@injectable()
export class CartViewModel implements ViewModel {
  uiState = new MutableStateFlow<CartState>({
    items: [],
    total: 0,
  });

  // Inject repository directly for simplicity in this example, but should be UseCase
  constructor(
      private checkoutUseCase: CheckoutUseCase,
      @inject("CartRepository") private cartRepository: CartRepository
  ) {}

  init() {
      this.loadCart();
  }

  async loadCart() {
      const items = await this.cartRepository.getItems();
      
      this.uiState.update({ 
          items,
          total: items.reduce((sum, item) => sum + item.price, 0)
      });
  }

  async checkout() {
      await this.checkoutUseCase.execute();
      this.loadCart();
  }
}
