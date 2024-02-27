function getParamList () {
  let hash = window.location.hash
  if (hash) {
    if (hash.startsWith('#!')) {
      hash = hash.slice(2)
    } else if (hash.startsWith('#')) {
      hash = hash.slice(1)
    }
    return hash.split('&').map(item => {
      const tmp = item.split('=')
      if (tmp.length >= 2) {
        return {
          key: tmp[0],
          value: tmp[1]
        }
      } else {
        return {
          key: tmp[0]
        }
      }
    })
  } else {
    return []
  }
}

function hasParam (key) {
  return !!getParamList().find(item => item.key === key)
}

function getParam (key) {
  const tmp = getParamList().find(item => item.key === key)
  if (tmp) {
    return tmp.value
  }
}

function setParam (key, value) {
  const list = getParamList()
  const tmp = list.find(item => item.key === key)
  if (tmp) {
    tmp.value = value
  } else {
    list.push({
      key, value
    })
  }
  updateHash(list)
}

function deleteParam (key) {
  const list = getParamList()
  const tmp = list.findIndex(item => item.key === key)
  if (tmp !== -1) {
    list.splice(tmp, 1)
  }
  updateHash(list)
}

function updateHash (list = []) {
  let hash = ''
  for (const item of list) {
    if (item.value != null) {
      hash += '&' + item.key + '=' + item.value
    } else {
      hash += '&' + item.key
    }
  }
  if (hash.length) {
    window.location.hash = '!' + hash.slice(1)
  } else {
    window.location.hash = ''
  }
}

export { hasParam, getParam, setParam, deleteParam }
