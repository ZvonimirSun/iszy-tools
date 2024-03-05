<script setup lang="ts">
import { type Colord, colord, extend } from 'colord'
import cmykPlugin from 'colord/plugins/cmyk'
import hwbPlugin from 'colord/plugins/hwb'
import namesPlugin from 'colord/plugins/names'
import lchPlugin from 'colord/plugins/lch'
import { forEach } from 'lodash-es'
import { buildColorForm, buildColorFormat } from './colorTransform.service'

extend([cmykPlugin, hwbPlugin, namesPlugin, lchPlugin])

const formats = {
  picker: buildColorFormat({
    label: '颜色选择器',
    format: (v: Colord) => v.toHex(),
    type: 'color-picker',
  }),
  hex: buildColorFormat({
    label: 'HEX',
    format: (v: Colord) => v.toHex(),
    placeholder: 'e.g. #ff0000',
  }),
  rgb: buildColorFormat({
    label: 'RGB',
    format: (v: Colord) => v.toRgbString(),
    placeholder: 'e.g. rgb(255, 0, 0)',
  }),
  hsl: buildColorFormat({
    label: 'HSL',
    format: (v: Colord) => v.toHslString(),
    placeholder: 'e.g. hsl(0, 100%, 50%)',
  }),
  hwb: buildColorFormat({
    label: 'HWB',
    format: (v: Colord) => v.toHwbString(),
    placeholder: 'e.g. hwb(0, 0%, 0%)',
  }),
  lch: buildColorFormat({
    label: 'LCH',
    format: (v: Colord) => v.toLchString(),
    placeholder: 'e.g. lch(53.24, 104.55, 40.85)',
  }),
  cmyk: buildColorFormat({
    label: 'CMYK',
    format: (v: Colord) => v.toCmykString(),
    placeholder: 'e.g. cmyk(0, 100%, 100%, 0)',
  }),
  name: buildColorFormat({
    label: '名称',
    format: (v: Colord) => v.toName({ closest: true }) ?? 'Unknown',
    placeholder: 'e.g. red',
  }),
}

const { rules, ruleForm } = buildColorForm<typeof formats>(formats)
const isDark = ref(false)
const colorInput = ref<HTMLInputElement[]>()

updateColorValue(colord('#16b0f6'))

function updateColorValue(value: Colord | undefined, omitLabel?: string) {
  if (value === undefined) {
    return
  }

  if (!value.isValid()) {
    return
  }

  isDark.value = value.isDark()

  forEach(formats, ({ format }, key: string) => {
    if (key !== omitLabel) {
      ruleForm[key as keyof typeof formats] = format(value)
    }
  })
}

const { copy } = useCopy({ text: '复制成功' })

function copyColor(val: string) {
  copy(val)
}
</script>

<template>
  <div
    w-full
    h-full
    overflow-auto
    flex
    flex-col
    items-center
  >
    <el-form
      w-250
      max-w-full
      :label-width="100"
      :rules="rules"
      :model="ruleForm"
      size="large"
    >
      <el-form-item
        v-for="({ label, parse, placeholder, type }, key) in formats"
        :key="key"
        :label="label"
        :prop="key"
      >
        <el-input
          v-if="type === 'text'"
          v-model="ruleForm[key]"
          :placeholder="placeholder"
          clearable
          @input="updateColorValue(parse(ruleForm[key]), key)"
        >
          <template #append>
            <el-button @click="copyColor(ruleForm[key])">
              <i class="i-icon-park-outline-copy" />
            </el-button>
          </template>
        </el-input>
        <template
          v-else-if="type === 'color-picker'"
        >
          <div
            class="picker"
            :class="{
              dark: isDark,
            }"
            :style="{
              backgroundColor: ruleForm[key],
            }"
          >
            {{ ruleForm[key] }}
            <input
              ref="colorInput"
              v-model="ruleForm[key]"
              class="class-input"
              type="color"
              @change="updateColorValue(parse(ruleForm[key]), key)"
            >
          </div>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.picker {
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 4rem;
  padding: .5rem;
  box-sizing: border-box;
  border: solid .1rem var(--el-border-color);
  border-radius: var(--el-input-border-radius,var(--el-border-radius-base));

  color: var(--el-color-black);
  background-clip: content-box, padding-box;
  user-select: none;
  overflow: hidden;

  & > .class-input {
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
  }

  &.dark {
    color: var(--el-color-white);
  }
}
</style>
