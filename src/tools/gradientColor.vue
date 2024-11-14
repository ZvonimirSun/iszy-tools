<script setup>
import { Sketch } from '@ckpack/vue-color'
import { colord } from 'colord'

const fromColor = ref('#ff0000')
const toColor = ref('#00ffff')
const steps = ref(10)
const showRGB = ref(false)

const computedFromColor = computed({
  get() {
    return fromColor.value
  },
  set(value) {
    if (value && value.hex) {
      fromColor.value = value.hex
    }
  },
})
const computedToColor = computed({
  get() {
    return toColor.value
  },
  set(value) {
    if (value && value.hex) {
      toColor.value = value.hex
    }
  },
})
const gradientHexColors = computed(() => {
  return getGradientHexArr(fromColor.value, toColor.value, steps.value)
})
const gradientRGBColors = computed(() => {
  return gradientHexColors.value.map((hex) => {
    return colord(hex).toRgbString()
  })
})

const gradientColors = computed(() => {
  return showRGB.value ? gradientRGBColors.value : gradientHexColors.value
})

function getGradientHexArr(startHex, endHex, steps) {
  const startColor = colord(startHex).toRgb()
  const endColor = colord(endHex).toRgb()
  const stepR = (endColor.r - startColor.r) / steps
  const stepG = (endColor.g - startColor.g) / steps
  const stepB = (endColor.b - startColor.b) / steps
  const gradientColors = []
  for (let i = 0; i < steps; i++) {
    const r = Math.round(startColor.r + stepR * i)
    const g = Math.round(startColor.g + stepG * i)
    const b = Math.round(startColor.b + stepB * i)
    gradientColors.push(colord({ r, g, b }).toHex())
  }
  return gradientColors
}

function copyColor(hex) {
  window.navigator.clipboard.writeText(hex)
  ElMessage.success('复制成功')
}

function copyAll() {
  const hex = gradientColors.value.join(',')
  window.navigator.clipboard.writeText(hex)
  ElMessage.success('复制成功')
}
</script>

<template>
  <div
    mx-auto h-full w-fit flex flex-col items-center justify-start overflow-auto p-t-1
    class="gap-3.2"
  >
    <div
      mx-auto max-w-full w-fit flex flex-wrap items-center justify-start
      class="selector gap-3.2"
    >
      <Sketch
        v-model="computedFromColor"
        :disable-alpha="true"
        mx-auto
      />
      <div
        mx-auto flex flex-col items-center
      >
        <a-typography-paragraph>
          渐变个数
        </a-typography-paragraph>
        <el-input-number
          v-model.number="steps"
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
      mx-auto w-fit flex flex-row flex-wrap items-stretch justify-start
      class="gap-3.2"
    >
      <div
        v-for="(item, index) in gradientColors"
        :key="index"
        display-block h-fit cursor-pointer truncate text-center
        class="p-3.2"
        :style="{
          background: item,
          width: showRGB ? '15rem' : '9rem',
        }"
        @click="copyColor(item)"
      >
        {{ item }}
      </div>
      <div relative>
        <el-button
          h-full
          @click="showRGB = !showRGB"
        >
          {{ showRGB ? '显示HEX' : '显示RGB' }}
        </el-button>
      </div>
    </div>
    <el-button
      type="primary"
      @click="copyAll"
    >
      复制所有
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.selector {
  @media (max-width: 600px) {
    flex-direction: column;
  }
}
</style>
