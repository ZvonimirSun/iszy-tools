<script setup lang="ts">
const formInfo = reactive({
  ppi: '96',
  pixelSize: '0.26',
  scaleDomination: '295829355.454566',
  resolution: '78271.51696402059',
})
const lodInfo = reactive({
  ppi: 96,
  pixelSize: 0.26,
  count: 21,
  scaleDomination: 295829355.454566,
  resolution: 78271.51696402059,
  lod: 0,
})
const lodsStr = ref('')
const resolutionStr = ref('')

function changePPI(val: string) {
  if (!val) {
    return
  }
  const ppi = Number.parseFloat(val)
  if (Number.isNaN(ppi)) {
    return
  }
  lodInfo.ppi = ppi
  formInfo.pixelSize = (0.0254 / lodInfo.ppi * 1000).toFixed(2)
  lodInfo.pixelSize = Number.parseFloat(formInfo.pixelSize)
  if (formInfo.scaleDomination) {
    changeScaleDomination(formInfo.scaleDomination)
  }
  else if (formInfo.resolution) {
    changeResolution(formInfo.resolution)
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
  formInfo.ppi = (0.0254 / lodInfo.pixelSize * 1000).toFixed(3)
  lodInfo.ppi = Number.parseFloat(formInfo.ppi)
  if (formInfo.scaleDomination) {
    changeScaleDomination(formInfo.scaleDomination)
  }
  else if (formInfo.resolution) {
    changeResolution(formInfo.resolution)
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
  formInfo.resolution = (lodInfo.scaleDomination / lodInfo.ppi * 0.0254).toPrecision(11)
  lodInfo.resolution = Number.parseFloat(formInfo.resolution)
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
  formInfo.scaleDomination = (lodInfo.resolution / 0.0254 * lodInfo.ppi).toPrecision(11)
  lodInfo.scaleDomination = Number.parseFloat(formInfo.scaleDomination)
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
      lod: i,
      resolution: Number.parseFloat(resolution.toPrecision(11)),
      scaleDomination: Number.parseFloat((resolution / 0.0254 * lodInfo.ppi).toPrecision(11)),
    })
  }
  lodsStr.value = JSON.stringify(lods, null, 2)
  resolutionStr.value = JSON.stringify(lods.map(item => item.resolution), null, 2)
}
</script>

<template>
  <div h-full w-full flex flex-col gap-2 overflow-auto>
    <el-form :label-width="130">
      <div flex flex-wrap gap-2>
        <el-form-item label="屏幕分辨率" class="form-item">
          <el-input v-model="formInfo.ppi" @input="changePPI" />
        </el-form-item>
        <el-form-item label="像元大小(mm)" class="form-item">
          <el-input v-model="formInfo.pixelSize" @input="changePixelSize" />
        </el-form-item>
        <el-form-item label="切片层级数" class="form-item">
          <el-input-number v-model.number="lodInfo.count" :min="0" :step="1" @change="changeCount" />
        </el-form-item>
        <el-form-item label="ScaleDomination" class="form-item">
          <el-input v-model="formInfo.scaleDomination" @input="changeScaleDomination" />
        </el-form-item>
        <el-form-item label="Resolution" class="form-item">
          <el-input v-model="formInfo.resolution" @input="changeResolution" />
        </el-form-item>
        <el-form-item label="当前层级" class="form-item">
          <el-input-number v-model.number="lodInfo.lod" :min="0" :max="lodInfo.count" :step="1" />
        </el-form-item>
        <el-form-item class="form-item">
          <el-button @click="generate">
            生成
          </el-button>
        </el-form-item>
      </div>
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

<style lang="scss">
.form-item.el-form-item  {
  width: calc(calc(100% - 0.5rem * 2 - 1.6rem) / 3);
  margin: 0;
}
</style>
