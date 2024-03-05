export function isExternalLink(href: string) {
  const url = new URL(href, window.location.href)
  return url.hostname !== window.location.hostname
}
