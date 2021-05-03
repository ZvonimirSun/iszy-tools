export function getLocalStorage (key, fallback) {
  return window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : fallback
}

export function setLocalStorage (key, data) {
  window.localStorage.setItem(key, JSON.stringify(data))
}
