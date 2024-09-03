// eslint-disable-next-line @typescript-eslint/no-unused-vars
type NullablePick<T, K extends keyof T> = {
  [P in K]: T[P] | null;
};
