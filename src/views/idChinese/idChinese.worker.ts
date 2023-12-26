import { all } from '@/utils/idCard.js'

self.addEventListener('message', (e) => {
  const { idData } = e.data
  const result = all(idData)
  self.postMessage(result)
})
