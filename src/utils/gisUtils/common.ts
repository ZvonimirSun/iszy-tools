export const tdtToken = 'bed806b1ccb34b268ab1c0700123d444'
export const gaodeToken = '868d6830a7409520ae283cde3a3f84d1'

export function formatDegree(value: number) {
  value = Math.abs(value)
  const v1 = Math.floor(value)// 度
  const v2 = Math.floor((value - v1) * 60) // 分
  const v3 = ((value - v1) * 3600 % 60).toFixed(2) // 秒
  return `${v1}° ${v2 < 10 ? `0${v2}` : v2}' ${Number.parseFloat(v3) < 10 ? `0${v3}` : v3}" `
}
