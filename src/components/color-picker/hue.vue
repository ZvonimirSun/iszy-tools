<template>
  <div class="hueContainer">
    <div
      ref="container"
      class="hue"
      aria-valuemin="0"
      aria-valuemax="360"
      :aria-valuenow="colors.hsl.h"
      @mousedown="handleMouseDown"
      @touchmove="handleChange"
      @touchstart="handleChange"
    >
      <div
        class="huePointer"
        :style="{top: 0, left: pointerLeft}"
        role="presentation"
      >
        <div class="huePicker" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HuePicker',
  props: {
    value: { type: Object, default: undefined }
  },
  emits: ['change'],
  data () {
    return {
      oldHue: 0,
      pullDirection: ''
    }
  },
  computed: {
    colors () {
      return this.value
    },
    pointerLeft () {
      if (this.colors.hsl.h === 0 && this.pullDirection === 'right') return '100%'
      return `${(this.colors.hsl.h * 100) / 360}%`
    }
  },
  watch: {
    colors: function (val) {
      const { h } = val.hsl
      if (h !== 0 && h - this.oldHue > 0) this.pullDirection = 'right'
      if (h !== 0 && h - this.oldHue < 0) this.pullDirection = 'left'
      this.oldHue = h
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
      let h
      let percent
      if (left < 0) {
        h = 0
      } else if (left > containerWidth) {
        h = 360
      } else {
        percent = left * 100 / containerWidth
        h = (360 * percent / 100)
      }
      if (this.colors.hsl.h !== h) {
        this.$emit('change', {
          h,
          s: this.colors.hsl.s,
          l: this.colors.hsl.l,
          a: this.colors.hsl.a,
          source: 'hsl'
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
.hueContainer {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: .2rem;
  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}

.hue {
  cursor: pointer;
  margin: 0 .2rem;
  position: relative;
  height: 100%;
}

.huePointer {
  z-index: 2;
  position: absolute;
}

.huePicker {
  cursor: pointer;
  margin-top: .1rem;
  width: .4rem;
  border-radius: .1rem;
  height: .8rem;
  box-shadow: 0 0 .2rem rgba(0, 0, 0, .6);
  background: #fff;
  transform: translateX(-.2rem);
}
</style>
