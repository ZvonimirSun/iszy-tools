import { MD5, SHA1, SHA256, SHA3, SHA512 } from 'crypto-js'

export const algos = {
  MD5,
  SHA1,
  SHA256,
  SHA512,
  SHA3
} as const

export type AlgoNames = keyof typeof algos;

export const algoNames = Object.keys(algos) as AlgoNames[]
