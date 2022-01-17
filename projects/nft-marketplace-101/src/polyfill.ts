/**
 * Web3 polyfill that solves this [issue](https://github.com/ChainSafe/web3.js/issues/4659#issuecomment-1004660167).
 */
import { Buffer } from 'buffer';

window.global = window;
global.Buffer = Buffer;
global.process = {
    env: { DEBUG: undefined },
    version: '',
    nextTick: require('next-tick'),
} as any;
