export type RequireAtLeastOne<Type, Keys extends keyof Type = keyof Type> = (
  // Omit<Type, Keys>
  Pick<Type, Exclude<keyof Type, Keys>>
  & {
    // [K in Keys]-?: Required<Pick<Type, K>> & Partial<Omit<Type, K>>
    [K in Keys]-?: Required<Pick<Type, K>> & Partial<Pick<Type, Exclude<Keys, K>>>
  }[Keys]
)
