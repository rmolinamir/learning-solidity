import { ContractSendMethod } from './ContractSendMethod';

export type TransformedContractInstance<Methods, Contract = unknown> = {
  [Key in keyof OnlyFunctionsOf<Methods>]: Methods[Key] extends FunctionType
    ? ReplaceReturnType<
        Methods[Key],
        ContractSendMethod<
          Contract,
          ReturnType<Methods[Key]> extends Promise<BN>
            ? Promise<string>
            : ReturnType<Methods[Key]>
        >
      >
    : never;
};

type ReplaceReturnType<Function extends FunctionType, Return> =
  // NOTE: NonNullable because Solidity has no optional types.
  (...a: Parameters<NonNullable<Function>>) => Return;

type OnlyFunctionsOf<Type> = Pick<
  Type,
  {
    [Key in keyof Type]: Type[Key] extends FunctionType
      ? Key
      : never
  }[keyof Type]
>;

type FunctionType = (...args: any) => any;
