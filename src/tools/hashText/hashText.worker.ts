import { enc, type lib } from 'crypto-js'
import { type AlgoNames, algoNames, algos, type Encoding } from './hashText.service'

function convertHexToBin(hex: string) {
  return hex
    .trim()
    .split('')
    .map(byte => Number.parseInt(byte, 16).toString(2).padStart(4, '0'))
    .join('')
}

function formatWithEncoding(words: lib.WordArray, encoding: Encoding) {
  if (encoding === 'Bin') {
    return convertHexToBin(words.toString(enc.Hex))
  }

  return words.toString(enc[encoding])
}

const hashText = (algo: AlgoNames, value: string, encoding: Encoding = 'Hex') => formatWithEncoding(algos[algo](value), encoding)

globalThis.addEventListener('message', (event) => {
  if (event.data) {
    const result = {} as { [key in AlgoNames]: string }
    for (const algo of algoNames) {
      result[algo] = hashText(algo, event.data.value, event.data.encoding)
    }
    globalThis.postMessage(result)
  }
})

export default {}
