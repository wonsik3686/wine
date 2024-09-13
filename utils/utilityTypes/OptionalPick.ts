/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * < type, required, optional >
 */
export type OptionalPick<T, K1 extends keyof T, K2 extends keyof T> = {
  [P in K1]-?: T[P];
} & {
  [P in K2]?: T[P];
};
