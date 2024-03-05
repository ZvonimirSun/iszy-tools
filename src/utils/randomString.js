/**
 * 随机字符串
 * @param [e] {Number} 长度
 * @param [t] {string} 备选字符
 * @returns {string}
 */
export default function randomString(e, t) {
  e = e || 32
  t = t || 'ABCDEFGHJKMNPQRSTWXYZabcdefghijkmnprstwxyz2345678'
  const a = t.length
  let n = ''
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a))
  return n
}
