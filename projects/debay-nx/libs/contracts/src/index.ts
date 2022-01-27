import { Abi } from './abi';
import abiJson from './artifacts/src/contracts/DeBay.sol/DeBay.json';

export const abi = abiJson as Abi;

export * from './types';
