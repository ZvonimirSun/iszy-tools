import { saveAs } from 'file-saver'

export default (content, filename) => {
  const blob = new Blob([content])
  saveAs(blob, filename)
}
