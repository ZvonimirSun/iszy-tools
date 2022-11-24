<template>
  <template v-if="isSupported">
    <a-typography-title :level="3">
      实时预览
    </a-typography-title>
    <div class="previewVideo">
      <video
        ref="screenShareVideoElement"
        autoplay
      />
      <span
        v-show="showREC"
        class="rec"
      >REC</span>
    </div>
    <a-space
      :size="8"
      class="operations"
      align="center"
    >
      <a-button
        type="primary"
        :disabled="disabled.open"
        @click="openScreenShare"
      >
        开启屏幕共享
      </a-button>
      <a-button
        type="primary"
        :disabled="disabled.start"
        @click="start"
      >
        开始录制
      </a-button>
      <a-button
        type="primary"
        :disabled="disabled.pause"
        @click="pause"
      >
        暂停
      </a-button>
      <a-button
        type="primary"
        :disabled="disabled.resume"
        @click="resume"
      >
        继续
      </a-button>
      <a-button
        type="primary"
        :disabled="disabled.stop"
        @click="stop"
      >
        停止
      </a-button>
      <a-button
        type="primary"
        :disabled="disabled.download"
        @click="download"
      >
        下载
      </a-button>
    </a-space>
    <template v-if="!!blobUrl">
      <a-divider />
      <a-typography-title :level="3">
        结果
      </a-typography-title>
      <div class="previewVideo">
        <video
          controls
          :src="blobUrl"
        />
      </div>
    </template>
    <a-divider />
    <a-typography-title :level="3">
      设置
    </a-typography-title>
    <a-alert
      message="由于浏览器限制，部分设置可能无法生效"
      type="warning"
      show-icon
      closable
      style="margin-bottom: .8rem;"
    />
    <a-form
      v-if="!disabled.open"
      :label-col="{sm: {span: 5}, md: {span: 4}, lg: {span: 3}, xxl: {span: 2}}"
    >
      <a-form-item label="系统音频">
        <a-select
          v-model:value="recordAudio"
          :options="recordAudioOptions"
          @change="selectAudio"
        />
      </a-form-item>
      <a-form-item label="麦克风">
        <a-select
          v-model:value="recordMicro"
          :options="recordMicroOptions"
          @change="selectMicro"
        />
      </a-form-item>
      <a-form-item
        v-if="supportedConstraints.aspectRatio"
        label="选择长宽比"
      >
        <a-select
          v-model:value="aspectRatio"
          :options="aspectRatioList"
        />
      </a-form-item>
      <a-form-item
        v-if="supportedConstraints.frameRate"
        label="选择帧率"
      >
        <a-select
          v-model:value="frameRate"
          :options="frameRateList"
        />
      </a-form-item>
      <a-form-item
        v-if="supportedConstraints.width && supportedConstraints.height"
        label="选择分辨率"
      >
        <a-select
          v-model:value="resolutions"
          :options="resolutionsList"
        />
      </a-form-item>
      <a-form-item label="是否显示光标">
        <a-select
          v-model:value="cursor"
          :options="cursorList"
        />
      </a-form-item>
    </a-form>
    <template v-else>
      <a-typography-title :level="4">
        当前设置
      </a-typography-title>
      <a-typography-paragraph>
        <ul>
          <li>系统音频: {{ currentDisplayMediaOptions.video.recordAudio }}</li>
          <li>麦克风: {{ currentDisplayMediaOptions.video.recordMicro }}</li>
          <li>长宽比: {{ currentDisplayMediaOptions.video.aspectRatio }}</li>
          <li>帧率: {{ currentDisplayMediaOptions.video.frameRate }}</li>
          <li>视频宽度: {{ currentDisplayMediaOptions.video.width }}</li>
          <li>视频高度: {{ currentDisplayMediaOptions.video.height }}</li>
          <li>显示鼠标: {{ currentDisplayMediaOptions.video.cursor }}</li>
        </ul>
      </a-typography-paragraph>
    </template>
  </template>
  <template v-else>
    <a-typography-title :level="3">
      你的浏览器不支持WebRTC，请安装最新版本Chrome后重试。
    </a-typography-title>
  </template>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import $msg from 'ant-design-vue/es/message'

// eslint-disable-next-line no-undef
interface MediaTrackSettingsUserShared extends MediaTrackSettings {
  cursor?: string
}

const RECORD_STATUS_UNSTART = 'unstart'
const RECORD_STATUS_RECORDING = 'recording'
const RECORD_STATUS_PAUSED = 'paused'
const RECORD_STATUS_STOPPED = 'stopped'

const screenShareVideoElement: Ref<HTMLVideoElement> = ref() as Ref<HTMLVideoElement>
let recorder: MediaRecorder | null = null
let localScreenShareStream: MediaStream | null = null
const disabled: Ref<{
  open: boolean,
  start: boolean,
  pause: boolean,
  resume: boolean,
  stop: boolean,
  download: boolean
}> = ref({
  open: false,
  start: true,
  pause: true,
  resume: true,
  stop: true,
  download: true
})
const status: Ref<'unstart' | 'recording' | 'paused' | 'stopped'> = ref(RECORD_STATUS_UNSTART)
let chunks: Array<Blob> = []
const blobUrl: Ref<string> = ref('')

// 录制参数
const recordAudioOptions: Array<{
  label: string,
  value: 'never' | 'always'
}> = [
  {
    label: '否',
    value: 'never'
  },
  {
    label: '是',
    value: 'always'
  }
]
const recordAudio: Ref<'never' | 'always'> = ref('never')
const recordMicroOptions = [
  {
    label: '否',
    value: 'never'
  },
  {
    label: '是',
    value: 'always'
  }
]
const recordMicro: Ref<'never' | 'always'> = ref('never')
const aspectRatioList = [
  {
    label: '默认',
    value: 'default'
  },
  {
    label: '16:9',
    value: 1.77
  },
  {
    label: '4:3',
    value: 1.33
  },
  {
    label: '21:9',
    value: 2.35
  },
  {
    label: '14:10',
    value: 1.4
  },
  {
    label: '19:10',
    value: 1.9
  }
]
const aspectRatio: Ref<number | 'default'> = ref('default')
const frameRateList = [
  {
    label: '默认',
    value: 'default'
  },
  {
    label: '60',
    value: 60
  },
  {
    label: '30',
    value: 30
  },
  {
    label: '25',
    value: 25
  },
  {
    label: '15',
    value: 15
  },
  {
    label: '5',
    value: 5
  }
]
const frameRate: Ref<number | 'default'> = ref('default')
const resolutionsList = [
  {
    label: '默认',
    value: 'default'
  },
  {
    label: '屏幕尺寸',
    value: 'fit-screen'
  },
  {
    label: '4K',
    value: '4k'
  },
  {
    label: '1080p',
    value: '1080p'
  },
  {
    label: '720p',
    value: '720p'
  }
]
const resolutions: Ref<string> = ref('default')
const cursorList = [
  {
    label: '默认',
    value: 'default'
  },
  {
    label: '总是显示',
    value: 'always'
  },
  {
    label: '移动时显示',
    value: 'motion'
  },
  {
    label: '从不显示',
    value: 'never'
  }
]
const cursor: Ref<string> = ref('default')

// 测试浏览器支持度
const supportedConstraints = (() => {
  if (navigator && navigator.mediaDevices && navigator.mediaDevices.getSupportedConstraints) {
    return navigator.mediaDevices.getSupportedConstraints()
  } else {
    return {}
  }
})()
const isScreenShareSupported = (() => {
  return Boolean(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia)
})()
const isWebRTCSupported = (() => {
  return Boolean(navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
})()
const isSupported = isScreenShareSupported && isWebRTCSupported

const showREC = computed(() => {
  return status.value === RECORD_STATUS_RECORDING
})
const displayMediaOptions = computed(() => {
  const videoConstraints = {} as {
    aspectRatio: number,
    frameRate: number,
    cursor: string,
    width: number,
    height: number
  }
  if (typeof aspectRatio.value === 'number') {
    videoConstraints.aspectRatio = aspectRatio.value
  }
  if (typeof frameRate.value === 'number') {
    videoConstraints.frameRate = frameRate.value
  }
  if (cursor.value !== 'default') {
    videoConstraints.cursor = cursor.value
  }
  switch (resolutions.value) {
    case 'fit-screen':
      videoConstraints.width = screen.width
      videoConstraints.height = screen.height
      break
    case '4K':
      videoConstraints.width = 3840
      videoConstraints.height = 2160
      break
    case '1080p':
      videoConstraints.width = 1920
      videoConstraints.height = 1080
      break
    case '720p':
      videoConstraints.width = 1280
      videoConstraints.height = 720
      break
    default:
      break
  }
  return {
    video: videoConstraints,
    audio: recordAudio.value === 'always'
  }
})
const currentDisplayMediaOptions = computed(() => {
  if (localScreenShareStream) {
    const tracks: Array<MediaStreamTrack> = localScreenShareStream.getVideoTracks()
    if (tracks.length > 0) {
      const settings: MediaTrackSettingsUserShared = tracks[0].getSettings()
      const currentOptions = {
        recordAudio: recordAudioOptions.find(item => (recordAudio.value === item.value))?.label,
        recordMicro: recordMicroOptions.find(item => (recordMicro.value === item.value))?.label,
        frameRate: settings.frameRate,
        width: settings.width,
        height: settings.height,
        aspectRatio: '默认',
        cursor: ''
      }
      if (settings.aspectRatio) {
        const tmpAspectRatio = settings.aspectRatio
        const option = aspectRatioList.find(item => (typeof item.value === 'number' ? (tmpAspectRatio - item.value <= 0.1) : false))
        if (option) {
          currentOptions.aspectRatio = option.label
        } else {
          currentOptions.aspectRatio = '默认'
        }
      }
      if (settings.cursor) {
        const option = cursorList.find(item => (settings.cursor === item.value))
        if (option) {
          currentOptions.cursor = option.label
        } else {
          currentOptions.cursor = '默认'
        }
      }
      return {
        video: currentOptions
      }
    }
  }
  return {
    video: {} as { recordAudio: string | undefined, recordMicro: string | undefined, frameRate: number | undefined, width: number | undefined, height: number | undefined, aspectRatio: string, cursor: string },
    audio: {}
  }
})

async function openScreenShare () {
  try {
    localScreenShareStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions.value)
    if (recordMicro.value === 'always') {
      const tempStream = await navigator.mediaDevices.getUserMedia({ audio: true })
      localScreenShareStream.addTrack(tempStream.getAudioTracks()[0])
    }

    const screenShareTrack = localScreenShareStream.getVideoTracks()[0]
    if (screenShareTrack) {
      screenShareTrack.onended = onScreenShareEnded
      screenShareTrack.onmute = onScreenShareEnded
    }

    recorder = new MediaRecorder(localScreenShareStream)
    recorder.onstop = onRecordStopped
    recorder.ondataavailable = onDataAvailable

    screenShareVideoElement.value.srcObject = localScreenShareStream
    screenShareVideoElement.value.muted = true
    disabled.value.open = true
    disabled.value.start = false
  } catch (e) {
    $msg.error((e as Error).message)
  }
}

function start () {
  recorder?.start()
  status.value = RECORD_STATUS_RECORDING
  disabled.value.start = true
  disabled.value.pause = false
  disabled.value.stop = false
}

function pause () {
  recorder?.pause()
  status.value = RECORD_STATUS_PAUSED
  disabled.value.pause = true
  disabled.value.resume = false
}

function resume () {
  recorder?.resume()
  status.value = RECORD_STATUS_RECORDING
  disabled.value.pause = false
  disabled.value.resume = true
}

function stop () {
  if (recorder && recorder.state !== 'inactive') {
    recorder.stop()
  }
  status.value = RECORD_STATUS_STOPPED
  disabled.value.start = false
  disabled.value.pause = true
  disabled.value.resume = true
  disabled.value.stop = true
}

function download () {
  if (blobUrl.value) {
    const link = document.createElement('a')
    link.href = blobUrl.value
    link.download = 'screen-record.mp4'
    link.click()
  }
}

function onScreenShareEnded () {
  stop()
  if (!localScreenShareStream) {
    return
  } else {
    const tracks = localScreenShareStream.getTracks()
    tracks.forEach(track => {
      track.stop()
    })
  }
  $msg.info('屏幕分享结束')
  localScreenShareStream = null
  screenShareVideoElement.value.srcObject = null
  disabled.value.open = false
  disabled.value.start = true
}

function onRecordStopped () {
  const blob = new Blob(chunks, { type: 'video/mp4' })
  blobUrl.value = URL.createObjectURL(blob)
  disabled.value.download = false
  chunks = []
}

function onDataAvailable (e: any) {
  chunks.push(e.data)
}

function selectAudio () {
  if (recordAudio.value && recordMicro.value) {
    recordMicro.value = 'never'
  }
}

function selectMicro () {
  if (recordAudio.value && recordMicro.value) {
    recordAudio.value = 'never'
  }
}
</script>

<style scoped lang="scss">
.previewVideo {
  background: #dedede;
  margin: 0 auto;
  display: block;
  width: 100%;
  max-width: 120rem;
  position: relative;

  video {
    width: 100%;
  }

  .rec {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.4rem;
    line-height: 2.2rem;
    height: 2.2rem;
    width: 4.4rem;
    background: red;
    color: #fff;
    text-align: center;
  }
}

.operations {
  width: 100%;
  margin-top: .8rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
