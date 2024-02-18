export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type OptionalExcept<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>
