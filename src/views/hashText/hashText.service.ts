import { MD5, RIPEMD160, SHA1, SHA224, SHA256, SHA3, SHA384, SHA512, enc } from 'crypto-js'

export const algos = {
  MD5,
  SHA1,
  SHA256,
  SHA224,
  SHA512,
  SHA384,
  SHA3,
  RIPEMD160
} as const

export type AlgoNames = keyof typeof algos;
export type Encoding = keyof typeof enc | 'Bin';

export const algoNames = Object.keys(algos) as AlgoNames[]
