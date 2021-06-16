export default function (content, filename) {
  const link = document.createElement('a')
  link.download = filename
  link.style.display = 'none'
  const blob = new Blob([content])
  link.href = URL.createObjectURL(blob)
  link.click()
}
