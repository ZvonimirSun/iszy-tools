<template>
  <div class="saturationContainer">
    <div
      ref="container"
      class="saturation"
      :style="{background: bgColor}"
      @mousedown="handleMouseDown"
      @touchmove="handleChange"
      @touchstart="handleChange"
    >
      <div class="saturationWhite" />
      <div class="saturationBlack" />
      <div
        class="saturationPointer"
        :style="{top: pointerTop, left: pointerLeft}"
      >
        <div class="saturationCircle" />
      </div>
    </div>
  </div>
</template>

<script>
import { throttle, clamp } from 'lodash-es'

export default defineComponent({
  name: 'SaturationPicker',
  props: {
    value: { type: Object, default: undefined }
  },
  emits: ['change'],
  computed: {
    colors () {
      return this.value
    },
    bgColor () {
      return `hsl(${this.colors.hsv.h}, 100%, 50%)`
    },
    pointerTop () {
      return `${(-(this.colors.hsv.v * 100) + 1) + 100}%`
    },
    pointerLeft () {
      return `${this.colors.hsv.s * 100}%`
    }
  },
  methods: {
    throttle: throttle((fn, data) => {
      fn(data)
    }, 20, {
      leading: true,
      trailing: false
    }),
    handleChange (e, skip) {
      !skip && e.preventDefault()
      const { container } = this.$refs
      if (!container) {
        // for some edge cases, container may not exist. see #220
        return
      }
      const containerWidth = container.clientWidth
      const containerHeight = container.clientHeight
      const xOffset = container.getBoundingClientRect().left + window.pageXOffset
      const yOffset = container.getBoundingClientRect().top + window.pageYOffset
      const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0)
      const pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0)
      const left = clamp(pageX - xOffset, 0, containerWidth)
      const top = clamp(pageY - yOffset, 0, containerHeight)
      const saturation = left / containerWidth
      const bright = clamp(-(top / containerHeight) + 1, 0, 1)
      this.throttle(this.onChange, {
        h: this.colors.hsv.h,
        s: saturation,
        v: bright,
        a: this.colors.hsv.a,
        source: 'hsva'
      })
    },
    onChange (param) {
      this.$emit('change', param)
    },
    handleMouseDown () {
      // this.handleChange(e, true)
      window.addEventListener('mousemove', this.handleChange)
      window.addEventListener('mouseup', this.handleChange)
      window.addEventListener('mouseup', this.handleMouseUp)
    },
    handleMouseUp () {
      window.removeEventListener('mousemove', this.handleChange)
      window.removeEventListener('mouseup', this.handleChange)
      window.removeEventListener('mouseup', this.handleMouseUp)
    }
  }
})
</script>

<style scoped lang="scss">
.saturationContainer {
  width: 100%;
  height: 100%;
  position: relative;
}

.saturation,
.saturationWhite,
.saturationBlack {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.saturationWhite {
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
}

.saturationBlack {
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
}

.saturationPointer {
  cursor: pointer;
  position: absolute;
}

.saturationCircle {
  cursor: pointer;
  width: .4rem;
  height: .4rem;
  box-shadow: 0 0 0 .15rem #fff, inset 0 0 .1rem .1rem rgba(0, 0, 0, .3), 0 0 .1rem .2rem rgba(0, 0, 0, .4);
  border-radius: 50%;
  transform: translate(-.2rem, -.2rem);
}
</style>
