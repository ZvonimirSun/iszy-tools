<template>
  <div
    w-max
    max-w-full
    h-full
    overflow-auto
    flex
    flex-row
    flex-wrap
    justify-around
    mx-auto
    my-0
    class="p-3.2 gap-3.2"
  >
    <div
      flex
      flex-col
      h-fit
      w-xl
      max-w-full
    >
      <a-typography-title :level="4">
        颜色
      </a-typography-title>
      <a-form
        layout="vertical"
      >
        <a-form-item label="CSS 字符串">
          <a-input
            v-model:value="cssString"
            @change="inputChange({cssString})"
          />
        </a-form-item>
        <a-form-item
          label="HEX"
          class="hex"
        >
          <a-input
            v-model:value="hex"
            @change="inputChange({hex})"
          />
        </a-form-item>
        <a-form-item
          label="RGBA"
          class="rgba"
        >
          <div
            flex
            w-full
            justify-between
            overflow-auto
            class="gap-3.2"
          >
            <a-input-number
              v-model:value="rgba.r"
              placeholder="R"
              :max="255"
              :min="0"
              :step="1"
              @change="inputChange({rgba})"
            />
            <a-input-number
              v-model:value="rgba.g"
              placeholder="G"
              :max="255"
              :min="0"
              :step="1"
              @change="inputChange({rgba})"
            />
            <a-input-number
              v-model:value="rgba.b"
              placeholder="B"
              :max="255"
              :min="0"
              :step="1"
              @change="inputChange({rgba})"
            />
            <a-input-number
              v-model:value="rgba.a"
              placeholder="A"
              :max="1"
              :min="0"
              :step="0.01"
              @change="inputChange({rgba})"
            />
          </div>
        </a-form-item>
        <a-form-item
          label="HSLA"
          class="hsla"
        >
          <div
            flex
            w-full
            justify-between
            overflow-auto
            class="gap-3.2"
          >
            <a-input-number
              v-model:value="hsla.h"
              placeholder="H"
              :max="360"
              :min="0"
              :step="0.01"
              :precision="2"
              @change="inputChange({hsla})"
            />
            <a-input-number
              v-model:value="hsla.s"
              placeholder="S"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              @change="inputChange({hsla})"
            />
            <a-input-number
              v-model:value="hsla.l"
              placeholder="L"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              @change="inputChange({hsla})"
            />
            <a-input-number
              v-model:value="hsla.a"
              placeholder="A"
              :max="1"
              :min="0"
              :step="0.01"
              :precision="2"
              @change="inputChange({hsla})"
            />
          </div>
        </a-form-item>
        <a-form-item
          label="HSVA"
          class="hsva"
        >
          <div
            flex
            w-full
            justify-between
            overflow-auto
            class="gap-3.2"
          >
            <a-input-number
              v-model:value="hsva.h"
              placeholder="H"
              :max="360"
              :min="0"
              :step="0.01"
              :precision="2"
              w-full
              @change="inputChange({hsva})"
            />
            <a-input-number
              v-model:value="hsva.s"
              placeholder="S"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              w-full
              @change="inputChange({hsva})"
            />
            <a-input-number
              v-model:value="hsva.v"
              placeholder="V"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              w-full
              @change="inputChange({hsva})"
            />
            <a-input-number
              v-model:value="hsva.a"
              placeholder="A"
              :max="1"
              :min="0"
              :step="0.01"
              :precision="2"
              @change="inputChange({hsva})"
            />
          </div>
        </a-form-item>
      </a-form>
    </div>
    <div
      w-xl
      h-fit
      max-w-full
    >
      <a-typography-title :level="4">
        颜色选择
      </a-typography-title>
      <a-space
        direction="vertical"
        w-full
        :gap="8"
      >
        <div
          w-full
          h-sm
          b-2
          b-solid
        >
          <Saturation
            :value="colors"
            @change="childChange"
          />
        </div>
        <div
          w-full
          h-4
        >
          <Hue
            :value="colors"
            @change="childChange"
          />
        </div>
        <div
          w-full
          h-4
        >
          <Alpha
            :value="colors"
            @change="childChange"
          />
        </div>
      </a-space>
    </div>
    <div
      flex
      flex-col
      h-fit
      w-xl
      max-w-full
    >
      <a-typography-title :level="4">
        颜色预览
      </a-typography-title>
      <div
        w-full
        h-sm
        :style="{background: activeColor}"
      />
    </div>
  </div>
</template>

<script setup>
import tinyColor from 'tinycolor2'

const cssString = ref('#16b0f6ff')
const hex = ref('')
const rgba = ref({
  r: undefined,
  g: undefined,
  b: undefined,
  a: undefined
})
const hsla = ref({
  h: undefined,
  s: undefined,
  l: undefined,
  a: undefined
})
const hsva = ref({
  h: undefined,
  s: undefined,
  v: undefined,
  a: undefined
})
const colors = ref(getNormalizedColor('16b0f6'))

const activeColor = computed(() => {
  const { rgba } = colors.value
  return `rgba(${[rgba.r, rgba.g, rgba.b, rgba.a].join(',')})`
})

onMounted(() => {
  inputChange({ cssString: cssString.value })
})

function handleCssString () {
  const ctx = document.createElement('canvas').getContext('2d')
  ctx.fillStyle = cssString.value || ''
  colorChange(ctx.fillStyle)
}
function colorChange (data, isCssString = false) {
  const {
    rgba: rgbaLocal,
    hex: hexLocal,
    hex8,
    a,
    hsl,
    hsv
  } = colors.value = getNormalizedColor(data, colors.value.hsl.h)
  rgba.value.r = rgbaLocal.r
  rgba.value.g = rgbaLocal.g
  rgba.value.b = rgbaLocal.b
  rgba.value.a = rgbaLocal.a
  hsla.value.h = hsl.h
  hsla.value.s = hsl.s
  hsla.value.l = hsl.l
  hsla.value.a = a
  hsva.value.h = hsv.h
  hsva.value.s = hsv.s
  hsva.value.v = hsv.v
  hsva.value.a = a
  if (a === 1) {
    hex.value = hexLocal.replace('#', '')
  } else {
    hex.value = hex8.replace('#', '')
  }
  if (!isCssString) {
    if (a === 1) {
      cssString.value = '#' + hex.value.toLowerCase()
    } else {
      cssString.value = `rgba(${rgbaLocal.r}, ${rgbaLocal.g}, ${rgbaLocal.b}, ${rgbaLocal.a})`
    }
  }
}
function isValidColor (color) {
  return tinyColor(color).isValid()
}
function childChange (data) {
  colorChange(data)
}
function inputChange (data) {
  if (!data) {
    return
  }
  if (data.hex) {
    isValidColor(data.hex) && colorChange({
      hex: data.hex,
      source: 'hex'
    })
  } else if (data.rgba) {
    isValidColor(data.rgba) && colorChange({
      r: data.rgba.r || colors.value.rgba.r,
      g: data.rgba.g || colors.value.rgba.g,
      b: data.rgba.b || colors.value.rgba.b,
      a: data.rgba.a || colors.value.rgba.a,
      source: 'rgba'
    })
  } else if (data.hsla) {
    const tmp = `hsla(${data.hsla.h},${(data.hsla.s * 100).toFixed(0)}%,${(data.hsla.l * 100).toFixed(0)}%,${data.hsla.a}`
    isValidColor(tmp) && colorChange(tmp)
  } else if (data.hsva) {
    const tmp = `hsva(${data.hsva.h},${(data.hsva.s * 100).toFixed(0)}%,${(data.hsva.v * 100).toFixed(0)}%,${data.hsva.a}`
    isValidColor(tmp) && colorChange(tmp)
  } else if (data.cssString) {
    isValidColor(data.cssString) && colorChange(data.cssString, true)
  }
}
function formatterPercentage (value) {
  return `${(value * 100).toFixed(0)}%`
}
function parserPercentage (value) {
  return parseInt(value.replace('%', '')) / 100
}

function getNormalizedColor (data, oldHue) {
  const alpha = data && data.a
  let color

  // hsl is better than hex between conversions
  if (data && data.hsl) {
    color = tinyColor(data.hsl)
  } else if (data && data.hex && data.hex.length > 0) {
    color = tinyColor(data.hex)
  } else if (data && data.hsv) {
    color = tinyColor(data.hsv)
  } else if (data && data.rgba) {
    color = tinyColor(data.rgba)
  } else if (data && data.rgb) {
    color = tinyColor(data.rgb)
  } else {
    color = tinyColor(data)
  }

  if (color && (color._a === undefined || color._a === null)) {
    color.setAlpha(alpha || 1)
  }

  const hsl = color.toHsl()
  const hsv = color.toHsv()

  if (hsl.s === 0) {
    hsv.h = hsl.h = data.h || (data.hsl && data.hsl.h) || oldHue || 0
  }

  return {
    hsl,
    hex: color.toHexString(),
    hex8: color.toHex8String(),
    rgba: color.toRgb(),
    hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source,
    a: data.a || color.getAlpha()
  }
}
</script>

<style scoped lang="scss">
.ant-form-item {
  margin: 0;
}

.ant-form-item + .ant-form-item {
  margin-top: .8rem;
}
</style>
