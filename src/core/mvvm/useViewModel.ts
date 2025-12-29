import { ref, onMounted, onUnmounted, type Ref, inject, provide } from "vue";
import { StateFlow, Flow } from "../flow";
import type { DependencyContainer } from "tsyringe";
import type { constructor } from "tsyringe/dist/typings/types"; // This might still be needed or found in 'tsyringe'
import { type DiModule, useBaseContainer } from "../di/Container";

// ViewModel-i döretmek we ýok etmek üçin
export interface ViewModel {
  init?: () => void;
  destroy?: () => void;
}

export function useContaner(): DependencyContainer {
  const inj = inject('container');
  // console.log(inj);
  const di = (inj ?? useBaseContainer()) as DependencyContainer;
  provide('container', di);
  return di;
}
export function useModule(Module: DiModule) {
  const di = useContaner();
  const childContainer = di.createChildContainer();
  Module.registerModule(childContainer);
  provide('container', childContainer);
  onUnmounted(() => {
    childContainer.dispose();
  });
  return childContainer;
}

export function useViewModel<T extends ViewModel>(
  ViewModelClass: constructor<T>, container: DependencyContainer | null = null
): T {
  // console.log(container);
  container ??= useContaner();
  const viewModel = container.resolve<T>(ViewModelClass);
  onMounted(() => {
    viewModel.init?.();
  });
  onUnmounted(() => {
    viewModel?.destroy?.();
  });
  return viewModel;
}
// 1. StateFlow-y Vue-niň ref-ine öwürýän hook
export function useStateFlow<T>(stateFlow: StateFlow<T>): Ref<T> {
  const state = ref(stateFlow.value) as Ref<T>;

  let unsubscribe: () => void;

  onMounted(() => {
    unsubscribe = stateFlow.subscribe((newValue) => {
      state.value = newValue;
    });
  });

  onUnmounted(() => {
    if (unsubscribe) unsubscribe();
  });

  return state;
}

// 2. Ýönekeý Flow hadysalaryny diňlemek (Toast, Navigate üçin)
export function useFlow<T>(flow: Flow<T>, callback: (value: T) => void) {
  let unsubscribe: () => void;
  onMounted(() => {
    unsubscribe = flow.subscribe(callback);
  });
  onUnmounted(() => {
    if (unsubscribe) unsubscribe();
  });
}
