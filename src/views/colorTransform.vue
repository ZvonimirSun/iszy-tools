<template>
  <div
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
      flex-1
      flex-col
      h-fit
      w-xl
      max-w-full
    >
      <a-typography-title :level="4">
        颜色
      </a-typography-title>
      <el-form
        :label-width="100"
      >
        <el-form-item label="CSS 字符串">
          <el-input
            v-model="cssString"
            @change="inputChange({cssString})"
          />
        </el-form-item>
        <el-form-item
          label="HEX"
          class="hex"
        >
          <el-input
            v-model="hex"
            @change="inputChange({hex})"
          />
        </el-form-item>
        <el-form-item
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
            <el-input-number
              v-model="rgba.r"
              controls-position="right"
              placeholder="R"
              :max="255"
              :min="0"
              :step="1"
              :precision="0"
              @change="inputChange({rgba})"
            />
            <el-input-number
              v-model="rgba.g"
              controls-position="right"
              placeholder="G"
              :max="255"
              :min="0"
              :step="1"
              :precision="0"
              @change="inputChange({rgba})"
            />
            <el-input-number
              v-model="rgba.b"
              controls-position="right"
              placeholder="B"
              :max="255"
              :min="0"
              :step="1"
              :precision="0"
              @change="inputChange({rgba})"
            />
            <el-input-number
              v-model="rgba.a"
              controls-position="right"
              placeholder="A"
              :max="1"
              :min="0"
              :step="0.01"
              :precision="2"
              @change="inputChange({rgba})"
            />
          </div>
        </el-form-item>
        <el-form-item
          label="CMYK"
          class="cmyk"
        >
          <div
            flex
            w-full
            justify-between
            overflow-auto
            class="gap-3.2"
          >
            <el-input-number
              v-model="cmyk.c"
              controls-position="right"
              placeholder="C"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              @change="inputChange({cmyk})"
            />
            <el-input-number
              v-model="cmyk.m"
              controls-position="right"
              placeholder="M"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              @change="inputChange({cmyk})"
            />
            <el-input-number
              v-model="cmyk.y"
              controls-position="right"
              placeholder="Y"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              @change="inputChange({cmyk})"
            />
            <el-input-number
              v-model="cmyk.k"
              controls-position="right"
              placeholder="K"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              @change="inputChange({cmyk})"
            />
          </div>
        </el-form-item>
        <el-form-item
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
            <el-input-number
              v-model="hsva.h"
              controls-position="right"
              placeholder="H"
              :max="360"
              :min="0"
              :step="0.01"
              :formatter="formatterDegree"
              :parser="parserDegree"
              :precision="2"
              @change="inputChange({hsva})"
            />
            <el-input-number
              v-model="hsva.s"
              controls-position="right"
              placeholder="S"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              @change="inputChange({hsva})"
            />
            <el-input-number
              v-model="hsva.v"
              controls-position="right"
              placeholder="V"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              @change="inputChange({hsva})"
            />
            <el-input-number
              v-model="hsva.a"
              controls-position="right"
              placeholder="A"
              :max="1"
              :min="0"
              :step="0.01"
              :precision="2"
              @change="inputChange({hsva})"
            />
          </div>
        </el-form-item>
        <el-form-item
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
            <el-input-number
              v-model="hsla.h"
              controls-position="right"
              placeholder="H"
              :max="360"
              :min="0"
              :step="0.01"
              :formatter="formatterDegree"
              :parser="parserDegree"
              :precision="2"
              @change="inputChange({hsla})"
            />
            <el-input-number
              v-model="hsla.s"
              controls-position="right"
              placeholder="S"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              @change="inputChange({hsla})"
            />
            <el-input-number
              v-model="hsla.l"
              controls-position="right"
              placeholder="L"
              :max="1"
              :min="0"
              :step="0.01"
              :formatter="formatterPercentage"
              :parser="parserPercentage"
              :precision="2"
              @change="inputChange({hsla})"
            />
            <el-input-number
              v-model="hsla.a"
              controls-position="right"
              placeholder="A"
              :max="1"
              :min="0"
              :step="0.01"
              :precision="2"
              @change="inputChange({hsla})"
            />
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div
      w-xl
      h-fit
      max-w-full
    >
      <a-typography-title :level="4">
        颜色选择
      </a-typography-title>
      <el-space
        direction="vertical"
        w-full
        :fill="true"
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
            @change="colorChange"
          />
        </div>
        <div
          w-full
          h-4
        >
          <Hue
            :value="colors"
            @change="colorChange"
          />
        </div>
        <div
          w-full
          h-4
        >
          <Alpha
            :value="colors"
            @change="colorChange"
          />
        </div>
      </el-space>
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

const cssString = ref('#16b0f6')
const hex = ref('')
const rgba = ref({
  r: undefined,
  g: undefined,
  b: undefined,
  a: undefined
})
const cmyk = ref({
  c: undefined,
  m: undefined,
  y: undefined,
  k: undefined
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

function inputChange (data) {
  if (!data) {
    return
  }
  if (data.hex) {
    isValidColor(data.hex) && colorChange({
      hex: data.hex,
      from: 'hex'
    })
  } else if (data.rgba) {
    isValidColor(data.rgba) && colorChange({
      r: data.rgba.r || colors.value.rgba.r,
      g: data.rgba.g || colors.value.rgba.g,
      b: data.rgba.b || colors.value.rgba.b,
      a: data.rgba.a || colors.value.rgba.a,
      from: 'rgba'
    })
  } else if (data.hsla) {
    const tmp = `hsla(${data.hsla.h},${(data.hsla.s * 100).toFixed(0)}%,${(data.hsla.l * 100).toFixed(0)}%,${data.hsla.a}`
    isValidColor(tmp) && colorChange({
      hsl: tmp,
      from: 'hsla'
    })
  } else if (data.hsva) {
    const tmp = `hsva(${data.hsva.h},${(data.hsva.s * 100).toFixed(0)}%,${(data.hsva.v * 100).toFixed(0)}%,${data.hsva.a}`
    isValidColor(tmp) && colorChange({
      hsv: tmp,
      from: 'hsva'
    })
  } else if (data.cssString) {
    isValidColor(data.cssString) && colorChange({ cssString: data.cssString, from: 'cssString' })
  } else if (data.cmyk) {
    colorChange({
      cmyk: data.cmyk,
      from: 'cmyk'
    })
  }
}
function colorChange (data) {
  if (data.from === 'cmyk') {
    const rgbLocal = cmyk2rgb(cmyk.value.c, cmyk.value.m, cmyk.value.y, cmyk.value.k)
    if (rgbLocal) {
      data.rgba = `rgb(${rgbLocal[0]},${rgbLocal[1]},${rgbLocal[2]})`
    } else {
      return
    }
  }
  const {
    rgba: rgbaLocal,
    hex: hexLocal,
    hex8,
    a,
    hsl,
    hsv
  } = colors.value = getNormalizedColor(data, colors.value.hsl.h)
  if (data.from !== 'rgba') {
    rgba.value.r = rgbaLocal.r
    rgba.value.g = rgbaLocal.g
    rgba.value.b = rgbaLocal.b
    rgba.value.a = rgbaLocal.a
  }
  if (data.from !== 'hsla') {
    hsla.value.h = hsl.h
    hsla.value.s = hsl.s
    hsla.value.l = hsl.l
    hsla.value.a = a
  }
  if (data.from !== 'hsva') {
    hsva.value.h = hsv.h
    hsva.value.s = hsv.s
    hsva.value.v = hsv.v
    hsva.value.a = a
  }
  if (data.from !== 'cmyk') {
    const cmykLocal = rgb2cmyk(rgbaLocal.r, rgbaLocal.g, rgbaLocal.b)
    if (cmykLocal) {
      cmyk.value.c = cmykLocal[0]
      cmyk.value.m = cmykLocal[1]
      cmyk.value.y = cmykLocal[2]
      cmyk.value.k = cmykLocal[3]
    }
  }
  if (a === 1) {
    hex.value = hexLocal.replace('#', '')
  } else {
    hex.value = hex8.replace('#', '')
  }
  if (data.from !== 'cssString') {
    if (a === 1) {
      cssString.value = '#' + hex.value.toLowerCase()
    } else {
      cssString.value = `rgba(${rgbaLocal.r}, ${rgbaLocal.g}, ${rgbaLocal.b}, ${rgbaLocal.a})`
    }
  }
}

function formatterPercentage (value) {
  return `${(value * 100).toFixed(0)}%`
}
function parserPercentage (value) {
  return parseFloat((parseInt(value.replace('%', '')) / 100).toFixed(2))
}
function formatterDegree (value) {
  return `${parseFloat(parseFloat(value).toFixed(2))}°`
}
function parserDegree (value) {
  return parseFloat(value.replace('°', ''))
}

function isValidColor (color) {
  return tinyColor(color).isValid()
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
  } else if (data && data.cssString) {
    color = tinyColor(data.cssString)
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
    from: data.from,
    a: data.a || color.getAlpha()
  }
}
function rgb2cmyk (r, g, b) {
  let computedC = 0
  let computedM = 0
  let computedY = 0
  let computedK = 0

  // remove spaces from input RGB values, convert to int
  r = parseInt(('' + r).replace(/\s/g, ''), 10)
  g = parseInt(('' + g).replace(/\s/g, ''), 10)
  b = parseInt(('' + b).replace(/\s/g, ''), 10)

  if (r == null || g == null || b == null ||
    isNaN(r) || isNaN(g) || isNaN(b)) {
    return
  }
  if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
    return
  }

  // BLACK
  if (r === 0 && g === 0 && b === 0) {
    return [0, 0, 0, 1]
  }

  computedC = 1 - (r / 255)
  computedM = 1 - (g / 255)
  computedY = 1 - (b / 255)

  const minCMY = Math.min(computedC, Math.min(computedM, computedY))
  computedC = (computedC - minCMY) / (1 - minCMY)
  computedM = (computedM - minCMY) / (1 - minCMY)
  computedY = (computedY - minCMY) / (1 - minCMY)
  computedK = minCMY

  return [computedC, computedM, computedY, computedK]
}
function cmyk2rgb (c, m, y, k) {
  if (c == null || m == null || y == null || k == null) {
    return
  }
  if (isNaN(c) || isNaN(m) || isNaN(y) || isNaN(k)) {
    return
  }
  if (c < 0 || m < 0 || y < 0 || k < 0 || c > 1 || m > 1 || y > 1 || k > 1) {
    return
  }

  let r
  let g
  let b

  r = 255 * (1 - c) * (1 - k)
  g = 255 * (1 - m) * (1 - k)
  b = 255 * (1 - y) * (1 - k)

  r = Math.round(r)
  g = Math.round(g)
  b = Math.round(b)

  return [r, g, b]
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
