export default async function asyncLoad (url, type = 'script') {
  if (type === 'script') {
    const srcArr = document.getElementsByTagName('script')
    let hasLoaded = false
    for (let i = 0; i < srcArr.length; i++) {
      hasLoaded = srcArr[i].src === url
      // 如果找到了重复的js标签将它删除
      if (hasLoaded) {
        srcArr[i].remove()
      }
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    document.body.appendChild(script)
  } else if (type === 'style') {
    const srcArr = document.getElementsByTagName('link')
    let hasLoaded = false
    for (let i = 0; i < srcArr.length; i++) {
      hasLoaded = srcArr[i].href === url
      // 如果找到了重复的link标签将它删除
      if (hasLoaded) {
        srcArr[i].remove()
      }
    }
    const script = document.createElement('link')
    script.rel = 'stylesheet'
    script.href = url
    document.body.appendChild(script)
  }
}
