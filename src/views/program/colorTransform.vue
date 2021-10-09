<template>
  <container>
    <div class="panel" :style="{background: activeColor}" :class="{light:isLight,dark:!isLight}">
      <Row>
        <Col :md="12" :xl="8" :span="24">
          <Form layout="vertical">
            <FormItem label="HEX" class="hex">
              <Input v-model:value="hex" @change="inputChange({hex})"/>
            </FormItem>
            <FormItem label="RGBA" class="rgba">
              <InputGroup compact>
                <InputNumber placeholder="R" v-model:value="rgba.r" @change="inputChange({rgba})" :max="255" :min="0"
                             :step="1"/>
                <InputNumber placeholder="G" v-model:value="rgba.g" @change="inputChange({rgba})" :max="255" :min="0"
                             :step="1"/>
                <InputNumber placeholder="B" v-model:value="rgba.b" @change="inputChange({rgba})" :max="255" :min="0"
                             :step="1"/>
                <InputNumber placeholder="A" v-model:value="rgba.a" @change="inputChange({rgba})" :max="1"
                             :min="0" :step="0.01"/>
              </InputGroup>
            </FormItem>
            <FormItem label="HSLA" class="hsla">
              <InputGroup compact>
                <InputNumber placeholder="H" v-model:value="hsla.h" @change="inputChange({hsla})" :max="360" :min="0"
                             :step="0.01" :precision="2"/>
                <InputNumber placeholder="S" v-model:value="hsla.s" @change="inputChange({hsla})" :max="1" :min="0"
                             :step="0.01" :formatter="formatterPercentage" :parser="parserPercentage" :precision="2"/>
                <InputNumber placeholder="L" v-model:value="hsla.l" @change="inputChange({hsla})" :max="1" :min="0"
                             :step="0.01" :formatter="formatterPercentage" :parser="parserPercentage" :precision="2"/>
                <InputNumber placeholder="A" v-model:value="hsla.a" @change="inputChange({hsla})" :max="1"
                             :min="0" :step="0.01" :precision="2"/>
              </InputGroup>
            </FormItem>
            <FormItem label="HSVA" class="hsva">
              <InputGroup compact>
                <InputNumber placeholder="H" v-model:value="hsva.h" @change="inputChange({hsva})" :max="360" :min="0"
                             :step="0.01" :precision="2"/>
                <InputNumber placeholder="S" v-model:value="hsva.s" @change="inputChange({hsva})" :max="1" :min="0"
                             :step="0.01" :formatter="formatterPercentage" :parser="parserPercentage" :precision="2"/>
                <InputNumber placeholder="V" v-model:value="hsva.v" @change="inputChange({hsva})" :max="1" :min="0"
                             :step="0.01" :formatter="formatterPercentage" :parser="parserPercentage" :precision="2"/>
                <InputNumber placeholder="A" v-model:value="hsva.a" @change="inputChange({hsva})" :max="1"
                             :min="0" :step="0.01" :precision="2"/>
              </InputGroup>
            </FormItem>
          </Form>
        </Col>
        <Col :md="12" :xl="8" :span="24">
          <Form layout="vertical">
            <FormItem label="颜色选择">
              <div class="saturation">
                <Saturation :value="colors" @change="childChange"/>
              </div>
              <div class="hue">
                <Hue :value="colors" @change="childChange"/>
              </div>
              <div class="alpha">
                <Alpha :value="colors" @change="childChange"/>
              </div>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </div>
  </container>
</template>

<script>
import { Container, Hue, Saturation, Alpha } from '@/components'

import tinyColor from 'tinycolor2'
import { Form, Input, InputNumber, Row, Col } from 'ant-design-vue'

const { Item: FormItem } = Form
const { Group: InputGroup } = Input

export default {
  name: '颜色转换',
  data: () => ({
    hex: '16b0f6',
    rgba: {
      r: undefined,
      g: undefined,
      b: undefined,
      a: undefined
    },
    hsla: {
      h: undefined,
      s: undefined,
      l: undefined,
      a: undefined
    },
    hsva: {
      h: undefined,
      s: undefined,
      v: undefined,
      a: undefined
    },
    oldHue: undefined,
    colors: colorChange('16b0f6')
  }),
  computed: {
    activeColor () {
      const { rgba } = this.colors
      return `rgba(${[rgba.r, rgba.g, rgba.b, rgba.a].join(',')})`
    },
    isLight () {
      if (this.colors) {
        return tinyColor(this.colors.hex8).isLight() || this.colors.a < 0.5
      } else {
        return true
      }
    }
  },
  components: {
    Container,
    Saturation,
    Hue,
    Alpha,
    Form,
    FormItem,
    Input,
    InputGroup,
    InputNumber,
    Row,
    Col
  },
  mounted () {
    this.inputChange({ hex: this.hex })
  },
  methods: {
    colorChange (data, oldHue) {
      this.oldHue = this.colors.hsl.h
      const {
        rgba,
        hex,
        hex8,
        a,
        hsl,
        hsv,
        source
      } = this.colors = colorChange(data, oldHue || this.oldHue)
      if (source !== 'rgba') {
        this.rgba.r = rgba.r
        this.rgba.g = rgba.g
        this.rgba.b = rgba.b
        this.rgba.a = rgba.a
      }
      if (source !== 'hsla') {
        this.hsla.h = hsl.h
        this.hsla.s = hsl.s
        this.hsla.l = hsl.l
        this.hsla.a = a
      }
      this.hsva.h = hsv.h
      this.hsva.s = hsv.s
      this.hsva.v = hsv.v
      this.hsva.a = a
      if (source !== 'hex') {
        if (a === 1) {
          this.hex = hex.replace('#', '')
        } else {
          this.hex = hex8.replace('#', '')
        }
      }
    },
    isValidColor (color) {
      return tinyColor(color).isValid()
    },
    childChange (data) {
      this.colorChange(data)
    },
    inputChange (data) {
      if (!data) {
        return
      }
      if (data.hex) {
        this.isValidColor(data.hex) && this.colorChange({
          hex: data.hex,
          source: 'hex'
        })
      } else if (data.rgba) {
        this.isValidColor(data.rgba) && this.colorChange({
          r: data.rgba.r || this.colors.rgba.r,
          g: data.rgba.g || this.colors.rgba.g,
          b: data.rgba.b || this.colors.rgba.b,
          a: data.rgba.a || this.colors.rgba.a,
          source: 'rgba'
        })
      } else if (data.hsla) {
        const tmp = `hsla(${data.hsla.h},${(data.hsla.s * 100).toFixed(0)}%,${(data.hsla.l * 100).toFixed(0)}%,${data.hsla.a}`
        this.isValidColor(tmp) && this.colorChange(tmp)
      } else if (data.hsva) {
        const tmp = `hsva(${data.hsva.h},${(data.hsva.s * 100).toFixed(0)}%,${(data.hsva.v * 100).toFixed(0)}%,${data.hsva.a}`
        this.isValidColor(tmp) && this.colorChange(tmp)
      }
    },
    formatterPercentage (value) {
      return `${(value * 100).toFixed(0)}%`
    },
    parserPercentage (value) {
      return parseInt(value.replace('%', '')) / 100
    }
  }
}

function colorChange (data, oldHue) {
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
    hex: color.toHexString().toUpperCase(),
    hex8: color.toHex8String().toUpperCase(),
    rgba: color.toRgb(),
    hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source,
    a: data.a || color.getAlpha()
  }
}
</script>

<style scoped lang="scss">
.panel {
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: .8rem;

  &.light {
    ::v-deep(.ant-form-item-label) > label {
      color: #333;
    }
  }

  &.dark {
    ::v-deep(.ant-form-item-label) > label {
      color: #fff;
    }
  }
}

.preview {
  display: block;
  max-width: 15rem;
  width: 100%;
  height: 3.2rem;
}

.saturation {
  max-width: 40.5rem;
  width: 100%;
  height: 25rem;
  border: solid;
}

.hue {
  max-width: 40.5rem;
  width: 100%;
  height: 1.2rem;
  margin-top: .8rem;
}

.alpha {
  max-width: 40.5rem;
  width: 100%;
  height: 1.2rem;
  margin-top: .8rem;
}

.hex .ant-input {
  max-width: 15rem;
}

.panel {
  .ant-input-number {
    width: 20%;
    margin-right: .8rem;
    max-width: 9.5rem;
  }
}
</style>
