export type Action<Type extends number | string, Payload> = 
  Payload extends NonNullable<Payload>
    ? { type: Type; payload: Payload }
    : { type: Type };
