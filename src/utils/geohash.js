// geohash.js
// Geohash library for Javascript
// (c) 2008 David Troy
// (c) 2010 Chris Williams
// Distributed under the MIT License

const BITS = [16, 8, 4, 2, 1]

const BASE32 = '0123456789bcdefghjkmnpqrstuvwxyz'
const NEIGHBORS = {
  right: { even: 'bc01fg45238967deuvhjyznpkmstqrwx' },
  left: { even: '238967debc01fg45kmstqrwxuvhjyznp' },
  top: { even: 'p0r21436x8zb9dcf5h7kjnmqesgutwvy' },
  bottom: { even: '14365h7k9dcfesgujnmqp0r2twvyx8zb' },
}
const BORDERS = {
  right: { even: 'bcfguvyz' },
  left: { even: '0145hjnp' },
  top: { even: 'prxz' },
  bottom: { even: '028b' },
}

NEIGHBORS.bottom.odd = NEIGHBORS.left.even
NEIGHBORS.top.odd = NEIGHBORS.right.even
NEIGHBORS.left.odd = NEIGHBORS.bottom.even
NEIGHBORS.right.odd = NEIGHBORS.top.even

BORDERS.bottom.odd = BORDERS.left.even
BORDERS.top.odd = BORDERS.right.even
BORDERS.left.odd = BORDERS.bottom.even
BORDERS.right.odd = BORDERS.top.even

const refineInterval = function (interval, cd, mask) {
  if (cd & mask) { interval[0] = (interval[0] + interval[1]) / 2 }
  else { interval[1] = (interval[0] + interval[1]) / 2 }
}

function encodeGeoHash(latitude, longitude) {
  if (typeof latitude === 'string') {
    const tmp = latitude.split(',')
    if (tmp.length >= 2) {
      latitude = Number.parseFloat(tmp[0])
      longitude = Number.parseFloat(tmp[1])
      if (isNaN(latitude) || isNaN(longitude)) {
        throw new TypeError('Not Supported')
      }
    }
    else {
      throw new Error('Not Supported')
    }
  }

  let isEven = 1
  const i = 0
  const lat = []; const lon = []
  let bit = 0
  let ch = 0
  const precision = 12
  let geohash = ''

  lat[0] = -90.0; lat[1] = 90.0
  lon[0] = -180.0; lon[1] = 180.0

  while (geohash.length < precision) {
    if (isEven) {
      const mid = (lon[0] + lon[1]) / 2
      if (longitude > mid) {
        ch |= BITS[bit]
        lon[0] = mid
      }
      else { lon[1] = mid }
    }
    else {
      const mid = (lat[0] + lat[1]) / 2
      if (latitude > mid) {
        ch |= BITS[bit]
        lat[0] = mid
      }
      else { lat[1] = mid }
    }

    isEven = !isEven
    if (bit < 4) { bit++ }
    else {
      geohash += BASE32[ch]
      bit = 0
      ch = 0
    }
  }
  return geohash
}
function decodeGeoHash(geohash) {
  let isEven = 1
  const lat = []; const lon = []
  lat[0] = -90.0; lat[1] = 90.0
  lon[0] = -180.0; lon[1] = 180.0
  let latErr = 90.0; let lonErr = 180.0

  for (let i = 0; i < geohash.length; i++) {
    const c = geohash[i]
    const cd = BASE32.indexOf(c)
    for (let j = 0; j < 5; j++) {
      const mask = BITS[j]
      if (isEven) {
        lonErr /= 2
        refineInterval(lon, cd, mask)
      }
      else {
        latErr /= 2
        refineInterval(lat, cd, mask)
      }
      isEven = !isEven
    }
  }
  lat[2] = (lat[0] + lat[1]) / 2
  lon[2] = (lon[0] + lon[1]) / 2

  return { latitude: lat[2], longitude: lon[2] }
}
function calculateAdjacent(srcHash, dir) {
  srcHash = srcHash.toLowerCase()
  const lastChr = srcHash.charAt(srcHash.length - 1)
  const type = (srcHash.length % 2) ? 'odd' : 'even'
  let base = srcHash.substring(0, srcHash.length - 1)
  if (BORDERS[dir][type].includes(lastChr)) { base = calculateAdjacent(base, dir) }
  return base + BASE32[NEIGHBORS[dir][type].indexOf(lastChr)]
}

export { encodeGeoHash, decodeGeoHash }
