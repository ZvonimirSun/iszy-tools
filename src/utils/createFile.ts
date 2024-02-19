import { saveAs } from 'file-saver'

export default (content: Blob | string, filename: string, type: 'url' | 'blob' = 'blob') => {
  if (content instanceof Blob || type === 'url') {
    saveAs(content, filename)
    return
  }
  if (type === 'blob') {
    const blob = new Blob([content])
    saveAs(blob, filename)
  }
}
