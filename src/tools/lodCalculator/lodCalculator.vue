<script setup lang="ts">
import { getPPI, getResolution, getScaleDomination, ppiToPX, pxToPPI } from '@/utils/scaleCalculator'

const formInfo = reactive<{
  ppi: string
  pixelSize: string
  scaleDomination: string
  resolution: string
  unit: 'degree' | 'meter'
}>({
  ppi: '96',
  pixelSize: '0.26',
  scaleDomination: '295497598.570834',
  resolution: '0.703125013115789',
  unit: 'degree',
})
const lodInfo = reactive({
  ppi: 96,
  pixelSize: 0.26,
  count: 21,
  scaleDomination: 295497598.570834,
  resolution: 0.703125013115789,
  lod: 0,
})

const lodsStr = ref('')
const resolutionStr = ref('')
const canEdit = ref(true)

function changePPI(val: string) {
  if (!val) {
    return
  }
  const ppi = Number.parseFloat(val)
  if (Number.isNaN(ppi)) {
    return
  }
  lodInfo.ppi = ppi
  formInfo.pixelSize = (ppiToPX(lodInfo.ppi) * 1000).toFixed(2)
  lodInfo.pixelSize = Number.parseFloat(formInfo.pixelSize)
  if (canEdit.value) {
    if (formInfo.scaleDomination) {
      changeScaleDomination(formInfo.scaleDomination)
    }
    else if (formInfo.resolution) {
      changeResolution(formInfo.resolution)
    }
  }
}

function changePixelSize(val: string) {
  if (!val) {
    return
  }
  const pixelSize = Number.parseFloat(val)
  if (Number.isNaN(pixelSize)) {
    return
  }
  lodInfo.pixelSize = pixelSize
  formInfo.ppi = pxToPPI(lodInfo.pixelSize / 1000).toFixed(3)
  lodInfo.ppi = Number.parseFloat(formInfo.ppi)
  if (canEdit.value) {
    if (formInfo.scaleDomination) {
      changeScaleDomination(formInfo.scaleDomination)
    }
    else if (formInfo.resolution) {
      changeResolution(formInfo.resolution)
    }
  }
}

function changeScaleDomination(val: string) {
  if (!val) {
    return
  }
  const scaleDomination = Number.parseFloat(val)
  if (Number.isNaN(scaleDomination)) {
    return
  }
  lodInfo.scaleDomination = scaleDomination
  if (canEdit.value) {
    formInfo.resolution = getResolution(lodInfo.scaleDomination, lodInfo.ppi, formInfo.unit).toPrecision(11)
    lodInfo.resolution = Number.parseFloat(formInfo.resolution)
  }
  else {
    formInfo.ppi = getPPI(lodInfo.scaleDomination, lodInfo.resolution, formInfo.unit).toFixed(3)
    changePPI(formInfo.ppi)
  }
}

function changeResolution(val: string) {
  if (!val) {
    return
  }
  const resolution = Number.parseFloat(val)
  if (Number.isNaN(resolution)) {
    return
  }
  lodInfo.resolution = resolution
  if (canEdit.value) {
    formInfo.scaleDomination = getScaleDomination(lodInfo.resolution, lodInfo.ppi, formInfo.unit).toPrecision(11)
    lodInfo.scaleDomination = Number.parseFloat(formInfo.scaleDomination)
  }
  else {
    formInfo.ppi = getPPI(lodInfo.scaleDomination, lodInfo.resolution, formInfo.unit).toFixed(3)
    changePPI(formInfo.ppi)
  }
}

function changeUnit(val: 'degree' | 'meter') {
  formInfo.resolution = getResolution(lodInfo.scaleDomination, lodInfo.resolution, val).toPrecision(11)
  lodInfo.resolution = Number.parseFloat(formInfo.resolution)
}

function changeCount() {
  if (!lodInfo.count) {
    return
  }
  if (lodInfo.count < 1) {
    lodInfo.count = 1
  }
  else if (lodInfo.count < lodInfo.lod + 1) {
    lodInfo.lod = lodInfo.count - 1
  }
}

function generate() {
  let baseResolution
  if (lodInfo.lod === 0) {
    baseResolution = lodInfo.resolution
  }
  else {
    baseResolution = lodInfo.resolution * (2 ** lodInfo.lod)
  }
  const lods: {
    lod: number
    resolution: number
    scaleDomination: number
  }[] = []
  for (let i = 0; i < lodInfo.count; i++) {
    const resolution = baseResolution / (2 ** i)
    lods.push({
      level: i,
      resolution: Number.parseFloat(resolution.toPrecision(11)),
      scale: Number.parseFloat(getScaleDomination(resolution, lodInfo.ppi, formInfo.unit).toPrecision(11)),
    })
  }
  lodsStr.value = JSON.stringify(lods, null, 2)
  resolutionStr.value = JSON.stringify(lods.map(item => item.resolution), null, 2)
}
</script>

<template>
  <div h-full w-full flex flex-col gap-2 overflow-hidden>
    <el-form :label-width="130">
      <el-row :gutter="8">
        <el-col :span="4">
          <el-form-item label="屏幕分辨率(ppi)" class="form-item">
            <el-input v-model="formInfo.ppi" :readonly="!canEdit" @input="changePPI">
              <template #append>
                <el-button
                  class="edit-btn"
                  @click="canEdit = !canEdit"
                >
                  <i
                    v-if="!canEdit"
                    class="i-icon-park-outline-edit"
                  />
                  <i
                    v-else
                    class="i-icon-park-outline-lock-one"
                  />
                </el-button>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="像元大小(mm)" class="form-item">
            <el-input v-model="formInfo.pixelSize" :readonly="!canEdit" @input="changePixelSize" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="地图分辨率" class="form-item">
            <el-input v-model="formInfo.resolution" @input="changeResolution">
              <template #prepend>
                1 :
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="地图比例尺" class="form-item">
            <el-input v-model="formInfo.scaleDomination" @input="changeScaleDomination" />
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="单位" class="form-item">
            <el-select v-model="formInfo.unit" @change="changeUnit">
              <el-option label="度" value="degree" />
              <el-option label="米" value="meter" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="切片层级数" class="form-item">
            <el-input-number v-model.number="lodInfo.count" controls-position="right" :min="0" :step="1" @change="changeCount" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="当前层级" class="form-item">
            <el-input-number v-model.number="lodInfo.lod" controls-position="right" :min="0" :max="lodInfo.count" :step="1" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item class="form-item">
            <el-button type="primary" @click="generate">
              生成
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div flex flex-1 gap-2 overflow-auto>
      <div h-full flex-1 overflow-auto>
        <pre>{{ lodsStr }}</pre>
      </div>
      <div h-full flex-1 overflow-auto>
        <pre>{{ resolutionStr }}</pre>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-item.el-form-item {
  width: 100%;
  margin: 0 0 .8rem;
}

.el-button.edit-btn {
  color: var(--el-color-primary);

  &:hover {
    color: var(--el-color-primary);
  }
}
</style>
