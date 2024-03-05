<script>
const _checkerboardCache = {}

export default defineComponent({
  name: 'TextureCheckerboard',
  props: {
    size: {
      type: [Number, String],
      default: 8,
    },
    white: {
      type: String,
      default: '#fff',
    },
    grey: {
      type: String,
      default: '#e6e6e6',
    },
  },
  computed: {
    bgStyle() {
      return {
        'background-image': `url(${getCheckerboard(this.white, this.grey, this.size)})`,
      }
    },
  },
})

/**
 * get base 64 data by canvas
 *
 * @param {string} c1 hex color
 * @param {string} c2 hex color
 * @param {number} size
 */
function renderCheckerboard(c1, c2, size) {
  // Dont Render On Server
  if (typeof document === 'undefined') {
    return null
  }
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size * 2
  const ctx = canvas.getContext('2d')
  // If no context can be found, return early.
  if (!ctx) {
    return null
  }
  ctx.fillStyle = c1
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = c2
  ctx.fillRect(0, 0, size, size)
  ctx.translate(size, size)
  ctx.fillRect(0, 0, size, size)
  return canvas.toDataURL()
}
/**
 * get checkerboard base data and cache
 *
 * @param {string} c1 hex color
 * @param {string} c2 hex color
 * @param {number} size
 */
function getCheckerboard(c1, c2, size) {
  const key = `${c1},${c2},${size}`
  if (_checkerboardCache[key]) {
    return _checkerboardCache[key]
  }
  const checkerboard = renderCheckerboard(c1, c2, size)
  _checkerboardCache[key] = checkerboard
  return checkerboard
}
</script>

<template>
  <div
    class="checkerboard"
    :style="bgStyle"
  />
</template>

<style scoped lang="scss">
.checkerboard {
  width: 100%;
  height: 100%;
  background-size: contain;
}
</style>
