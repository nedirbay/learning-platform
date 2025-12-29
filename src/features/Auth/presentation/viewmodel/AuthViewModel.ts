import { injectable, inject } from "tsyringe";
import { type ViewModel } from "@/core/mvvm/useViewModel";
import { MutableStateFlow } from "@/core/flow";
import { LoginUseCase } from "../../domain/usecase/LoginUseCase";
import { type User } from "../../domain/entity/User";

export interface AuthState {
  isLoading: boolean;
  user: User | null;
  error: string | null;
}

@injectable()
export class AuthViewModel implements ViewModel {
  uiState = new MutableStateFlow<AuthState>({
    isLoading: false,
    user: null,
    error: null,
  });

  constructor(@inject(LoginUseCase) private loginUseCase: LoginUseCase) {}

  init() {}

  async login(email: string, password: string) {
    this.uiState.update({ isLoading: true, error: null });
    try {
      const user = await this.loginUseCase.execute(email, password);
      this.uiState.update({ isLoading: false, user });
    } catch (e) {
      this.uiState.update({ isLoading: false, error: "Giriş şowsuz boldy" });
    }
  }
}
