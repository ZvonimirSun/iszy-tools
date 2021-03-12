import defaultSettings from '@/settings'

const title = defaultSettings.title || 'ISZY_TOOLS'

export default function getPageTitle (pageTitle) {
  if (pageTitle && pageTitle !== title) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
