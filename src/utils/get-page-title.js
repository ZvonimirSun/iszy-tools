const title = 'ISZY工具集合'

export default function getPageTitle (pageTitle) {
  if (pageTitle && pageTitle !== title) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
