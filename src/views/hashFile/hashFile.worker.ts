import { lib } from 'crypto-js'
import { algos, type AlgoNames } from './hashFile.service'

const hashFile = (algo: AlgoNames, value: lib.WordArray) => algos[algo](value).toString()

self.addEventListener('message', function (event) {
  if (event.data && event.data.value && event.data.value instanceof File) {
    const algos = (event.data.algos || ['MD5']) as AlgoNames[]
    const reader = new FileReader()
    reader.readAsArrayBuffer(event.data.value)
    reader.onload = function () {
      const wordArray = lib.WordArray.create(reader.result as unknown as number[])
      const result = {} as { [key in AlgoNames]: string }
      for (const algo of algos) {
        result[algo] = hashFile(algo, wordArray)
        self.postMessage(result)
      }
    }
  } else {
    self.postMessage(null)
  }
})
