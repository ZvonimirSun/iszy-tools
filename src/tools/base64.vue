<script setup lang="ts">
const data1 = ref('')
const data2 = ref('')

const mode = ref<'text' | 'file' | 'image'>('text')

const base64Options = reactive({
  dataUrl: false,
})

const fileUpload = ref()

const text = ref('')
const file = ref() as Ref<File>
const image = ref() as Ref<HTMLImageElement>

const { base64: textBase64 } = useBase64(text, base64Options)
const { base64: fileBase64 } = useBase64(file, base64Options)
const { base64: imageBase64 } = useBase64(image, base64Options)

function onUploadFile(val: File) {
  file.value = markRaw(val)
  return false
}
</script>

<template>
  <div h-full w-full flex flex-col gap-4 overflow-auto>
    <div flex items-center gap-4>
      <el-radio-group v-model="mode">
        <el-radio-button label="文本" value="text" />
        <el-radio-button label="文件" value="file" />
        <el-radio-button label="图片" value="image" />
      </el-radio-group>
      <label>包含dataUrl</label>
      <el-switch v-model="base64Options.dataUrl" />
    </div>
    <div flex-1 overflow-auto>
      <div v-show="mode === 'text'" h-full w-full flex flex-col gap-4>
        <el-input v-model="text" placeholder="请输入..." h-40 w-full type="textarea" />
        <el-input v-model="textBase64" readonly h-40 w-full type="textarea" />
      </div>
      <div v-show="mode === 'file'" h-full w-full flex flex-col gap-4>
        <el-upload
          :file-list="file ? [file] : []"
          :show-file-list="false"
          :before-upload="onUploadFile"
        >
          <template #trigger>
            <el-button type="primary">
              选择文件
            </el-button>
          </template>
          <template #tip>
            <div class="el-upload__tip">
              <span text-red> 注意文件不宜过大</span>
            </div>
          </template>
        </el-upload>
        <el-input
          v-model="fileBase64" type="textarea" readonly h-40 max-h-full flex-1 :autosize="{
            minRows: 5,
            maxRows: 10,
          }"
        />
      </div>
      <div v-show="mode === 'image'" h-full w-full flex flex-col gap-4 />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
