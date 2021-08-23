import { saveAs } from 'file-saver'

export default function (content, filename) {
  const blob = new Blob([content])
  saveAs(blob, filename)
}
