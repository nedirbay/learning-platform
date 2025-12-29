import { type DependencyContainer, container } from "tsyringe"

export const useBaseContainer = () => {
  const di = container;
  // console.log(di.resolve(TbkRepoSymbol));
  return di;
}
export interface DiModule {
  registerModule: (container: DependencyContainer) => void;
}
