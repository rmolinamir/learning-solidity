/**
 * Converts a generic type into an anemic type by excluding any methods.
 * Useful for object/class initializers or data-centric operations.
 */
export type Anemic<Type> = {
  [Key in keyof ExcludeFunctionsOf<Type>]: Type[Key];
};

type ExcludeFunctionsOf<Type> = Pick<
  Type,
  { [Key in keyof Type]: Type[Key] extends Function ? never : Key }[keyof Type]
>;
