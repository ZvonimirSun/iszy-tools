<template>
  <div
    flex
    flex-col
    w-fit
    mx-auto
    justify-start
    items-center
    h-full
    overflow-auto
    p-t-1
    class="gap-3.2"
  >
    <div
      flex
      w-fit
      flex-wrap
      max-w-full
      mx-auto
      justify-start
      items-center
      class="gap-3.2 selector"
    >
      <Sketch
        v-model="computedFromColor"
        :disable-alpha="true"
        mx-auto
      />
      <div
        flex
        flex-col
        items-center
        mx-auto
      >
        <a-typography-paragraph>
          渐变个数
        </a-typography-paragraph>
        <a-input-number
          v-model:value.number="steps"
          :step="1"
          :precision="0"
        />
      </div>
      <Sketch
        v-model="computedToColor"
        mx-auto
        :disable-alpha="true"
      />
    </div>
    <div
      flex
      flex-row
      w-fit
      mx-auto
      justify-start
      flex-wrap
      items-stretch
      class="gap-3.2"
    >
      <div
        v-for="(item, index) in gradientColors"
        :key="index"
        display-block
        cursor-pointer
        truncate
        h-fit
        text-center
        class="p-3.2"
        :style="{
          background: item,
          width: showRGB ? '15rem' : '9rem'
        }"
        @click="copyColor(item)"
      >
        {{ item }}
      </div>
      <div relative>
        <a-button
          h-full
          @click="showRGB=!showRGB"
        >
          {{ showRGB ? '显示HEX' : '显示RGB' }}
        </a-button>
      </div>
    </div>
    <a-button
      type="primary"
      @click="copyAll"
    >
      复制所有
    </a-button>
  </div>
</template>

<script setup>
import tinyColor from 'tinycolor2'
import { Sketch } from '@ckpack/vue-color'

const fromColor = ref('#ff0000')
const toColor = ref('#00ffff')
const steps = ref(10)
const showRGB = ref(false)

const computedFromColor = computed({
  get () {
    return fromColor.value
  },
  set (value) {
    if (value && value.hex) { fromColor.value = value.hex }
  }
})
const computedToColor = computed({
  get () {
    return toColor.value
  },
  set (value) {
    if (value && value.hex) { toColor.value = value.hex }
  }
})
const gradientHexColors = computed(() => {
  return getGradientHexArr(fromColor.value, toColor.value, steps.value)
})
const gradientRGBColors = computed(() => {
  return gradientHexColors.value.map(hex => {
    return tinyColor(hex).toRgbString()
  })
})

const gradientColors = computed(() => {
  return showRGB.value ? gradientRGBColors.value : gradientHexColors.value
})

function getGradientHexArr (startHex, endHex, steps) {
  const startColor = tinyColor(startHex).toRgb()
  const endColor = tinyColor(endHex).toRgb()
  const stepR = (endColor.r - startColor.r) / steps
  const stepG = (endColor.g - startColor.g) / steps
  const stepB = (endColor.b - startColor.b) / steps
  const gradientColors = []
  for (let i = 0; i < steps; i++) {
    const r = Math.round(startColor.r + stepR * i)
    const g = Math.round(startColor.g + stepG * i)
    const b = Math.round(startColor.b + stepB * i)
    gradientColors.push(tinyColor({ r, g, b }).toHexString())
  }
  return gradientColors
}

function copyColor (hex) {
  window.navigator.clipboard.writeText(hex)
  ElMessage.success('复制成功')
}

function copyAll () {
  const hex = gradientColors.value.join(',')
  window.navigator.clipboard.writeText(hex)
  ElMessage.success('复制成功')
}
</script>

<style scoped lang="scss">
.selector {
  @media (max-width: 600px) {
    flex-direction: column;
  }
}
</style>
