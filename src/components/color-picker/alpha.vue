<template>
  <div class="alphaContainer">
    <div class="alphaCheckerboardWrap">
      <Checkerboard />
    </div>
    <div
      class="alphaGradient"
      :style="{background: gradientColor}"
    />
    <div
      ref="container"
      class="alpha"
      @mousedown="handleMouseDown"
      @touchmove="handleChange"
      @touchstart="handleChange"
    >
      <div
        class="alphaPointer"
        :style="{left: colors.a * 100 + '%'}"
      >
        <div class="alphaPicker" />
      </div>
    </div>
  </div>
</template>

<script>
import Checkerboard from '@/components/checkerboard.vue'

export default defineComponent({
  name: 'AlphaPicker',
  components: {
    Checkerboard
  },
  props: {
    value: { type: Object, default: undefined }
  },
  emits: ['change'],
  data: () => ({
    checkerboardBackground: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADBJREFUOE9jfPbs2X8GPEBSUhKfNAPjqAHDIgz+//+PNx08f/4cfzoYNYCBceiHAQC5flV5JzgrxQAAAABJRU5ErkJggg=='
  }),
  computed: {
    colors () {
      return this.value
    },
    gradientColor () {
      const { rgba } = this.colors
      const rgbStr = [rgba.r, rgba.g, rgba.b].join(',')
      return `linear-gradient(to right, rgba(${rgbStr}, 0) 0%, rgba(${rgbStr}, 1) 100%)`
    }
  },
  methods: {
    handleChange (e, skip) {
      !skip && e.preventDefault()
      const { container } = this.$refs
      if (!container) {
        return
      }
      const containerWidth = container.clientWidth
      const xOffset = container.getBoundingClientRect().left + window.pageXOffset
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0)
      const left = pageX - xOffset
      let a
      if (left < 0) {
        a = 0
      } else if (left > containerWidth) {
        a = 1
      } else {
        a = Math.round(left * 100 / containerWidth) / 100
      }
      if (this.colors.a !== a) {
        this.$emit('change', {
          h: this.colors.hsl.h,
          s: this.colors.hsl.s,
          l: this.colors.hsl.l,
          a,
          source: 'rgba'
        })
      }
    },
    handleMouseDown (e) {
      this.handleChange(e, true)
      window.addEventListener('mousemove', this.handleChange)
      window.addEventListener('mouseup', this.handleMouseUp)
    },
    handleMouseUp () {
      window.removeEventListener('mousemove', this.handleChange)
      window.removeEventListener('mouseup', this.handleMouseUp)
    }
  }
})
</script>

<style scoped lang="scss">
.alphaContainer {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: .2rem;
}

.alphaCheckerboardWrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.alphaGradient {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.alpha {
  cursor: pointer;
  margin: 0 .2rem;
  position: relative;
  z-index: 2;
  height: 100%;
}

.alphaPointer {
  z-index: 2;
  position: absolute;
}

.alphaPicker {
  cursor: pointer;
  width: .4rem;
  border-radius: .1rem;
  height: .8rem;
  box-shadow: 0 0 .2rem rgba(0, 0, 0, .6);
  background: #fff;
  margin-top: .1rem;
  transform: translateX(-.2rem);
}
</style>
