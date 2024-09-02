import { all } from '@/utils/idCard.js'

globalThis.addEventListener('message', (e) => {
  const { idData } = e.data
  const result = all(idData)
  globalThis.postMessage(result)
})
