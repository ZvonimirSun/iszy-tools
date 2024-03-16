export function useComponentRef<T extends abstract new (...args: any) => any>(_component: T) {
  return ref<InstanceType<T>>()
}
