import { SendOptions, CallOptions, EstimateGasOptions } from 'web3-eth-contract';

export interface ContractSendMethod<Contract, CallReturnType = unknown> {

  send(
    options: SendOptions,
    callback?: (err: Error, transactionHash: string) => void
  ): PromiEvent<Contract>;

  call(
    options?: CallOptions,
    callback?: (err: Error, result: any) => void
  ): Promise<CallReturnType>;

  estimateGas(
    options: EstimateGasOptions,
    callback?: (err: Error, gas: number) => void
  ): Promise<number>;

  estimateGas(callback: (err: Error, gas: number) => void): Promise<number>;

  estimateGas(
    options: EstimateGasOptions,
    callback: (err: Error, gas: number) => void
  ): Promise<number>;

  estimateGas(options: EstimateGasOptions): Promise<number>;

  estimateGas(): Promise<number>;

  encodeABI(): string;

}
