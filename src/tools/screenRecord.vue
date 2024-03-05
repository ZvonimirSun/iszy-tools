<script lang="ts" setup>
interface MediaTrackSettingsUserShared extends MediaTrackSettings {
  cursor?: string
}

const SCREEN_UNSHARE = 'unshare'
const RECORD_STATUS_UNSTART = 'unstart'
const RECORD_STATUS_RECORDING = 'recording'
const RECORD_STATUS_PAUSED = 'paused'
const RECORD_STATUS_STOPPED = 'stopped'

// 视频元素
const screenShareVideoElement = ref<HTMLVideoElement>()
const recordVideoElement = ref<HTMLVideoElement>()
// 视频流
let localScreenShareStream: MediaStream | null = null
// 录制对象
let recorder: MediaRecorder | null = null
// 录制状态
const status = ref<'unstart' | 'recording' | 'paused' | 'stopped' | 'unshare'>(SCREEN_UNSHARE)
// 录制数据
let chunks: Array<Blob> = []
// 录制结果
const blobUrl = ref('')
const showSettings = ref(false)
// 录制参数
const recordAudioOptions: Array<{
  label: string
  value: 'never' | 'always'
}> = [
  {
    label: '否',
    value: 'never',
  },
  {
    label: '是',
    value: 'always',
  },
]
const recordAudio = ref<'never' | 'always'>('never')
const recordMicroOptions = [
  {
    label: '否',
    value: 'never',
  },
  {
    label: '是',
    value: 'always',
  },
]
const recordMicro = ref<'never' | 'always'>('never')
const aspectRatioList = [
  {
    label: '默认',
    value: 'default',
  },
  {
    label: '16:9',
    value: 1.77,
  },
  {
    label: '4:3',
    value: 1.33,
  },
  {
    label: '21:9',
    value: 2.35,
  },
  {
    label: '14:10',
    value: 1.4,
  },
  {
    label: '19:10',
    value: 1.9,
  },
]
const aspectRatio = ref<number | 'default'>('default')
const frameRateList = [
  {
    label: '默认',
    value: 'default',
  },
  {
    label: '60',
    value: 60,
  },
  {
    label: '30',
    value: 30,
  },
  {
    label: '25',
    value: 25,
  },
  {
    label: '15',
    value: 15,
  },
  {
    label: '5',
    value: 5,
  },
]
const frameRate = ref<number | 'default'>('default')
const resolutionsList = [
  {
    label: '默认',
    value: 'default',
  },
  {
    label: '屏幕尺寸',
    value: 'fit-screen',
  },
  {
    label: '4K',
    value: '4k',
  },
  {
    label: '1080p',
    value: '1080p',
  },
  {
    label: '720p',
    value: '720p',
  },
]
const resolutions = ref('default')
const cursorList = [
  {
    label: '默认',
    value: 'default',
  },
  {
    label: '总是显示',
    value: 'always',
  },
  {
    label: '移动时显示',
    value: 'motion',
  },
  {
    label: '从不显示',
    value: 'never',
  },
]
const cursor = ref('default')

// 测试浏览器支持度
const supportedConstraints = (() => {
  if (navigator && navigator.mediaDevices && navigator.mediaDevices.getSupportedConstraints) {
    return navigator.mediaDevices.getSupportedConstraints()
  }
  else {
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

const showStatus = computed(() => {
  switch (status.value) {
    case RECORD_STATUS_RECORDING:
      return 'REC'
    case RECORD_STATUS_PAUSED:
      return 'PAUSE'
    default:
      return false
  }
})
const displayMediaOptions = computed(() => {
  const videoConstraints = {} as {
    aspectRatio: number
    frameRate: number
    cursor: string
    width: number
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
    audio: recordAudio.value === 'always',
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
        cursor: '',
      }
      if (settings.aspectRatio) {
        const tmpAspectRatio = settings.aspectRatio
        const option = aspectRatioList.find(item => (typeof item.value === 'number' ? (tmpAspectRatio - item.value <= 0.1) : false))
        if (option) {
          currentOptions.aspectRatio = option.label
        }
        else {
          currentOptions.aspectRatio = '默认'
        }
      }
      if (settings.cursor) {
        const option = cursorList.find(item => (settings.cursor === item.value))
        if (option) {
          currentOptions.cursor = option.label
        }
        else {
          currentOptions.cursor = '默认'
        }
      }
      return {
        video: currentOptions,
      }
    }
  }
  return {
    video: {} as { recordAudio: string | undefined, recordMicro: string | undefined, frameRate: number | undefined, width: number | undefined, height: number | undefined, aspectRatio: string, cursor: string },
    audio: {},
  }
})

async function openScreenShare() {
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

    if (screenShareVideoElement.value) {
      screenShareVideoElement.value.srcObject = localScreenShareStream
      screenShareVideoElement.value.muted = true
    }
    status.value = 'unstart'
  }
  catch (e) {
    ElMessage.error((e as Error).message)
  }
}

function start() {
  clear()
  recorder?.start()
  status.value = RECORD_STATUS_RECORDING
}

function pause() {
  recorder?.pause()
  status.value = RECORD_STATUS_PAUSED
}

function resume() {
  recorder?.resume()
  status.value = RECORD_STATUS_RECORDING
}

function stop() {
  if (recorder && recorder.state !== 'inactive') {
    recorder.stop()
  }
  status.value = RECORD_STATUS_STOPPED
}

function clear() {
  blobUrl.value = ''
}

function download() {
  if (blobUrl.value) {
    const link = document.createElement('a')
    link.href = blobUrl.value
    link.download = 'screen-record.mp4'
    link.click()
  }
}

function onScreenShareEnded() {
  stop()
  if (!localScreenShareStream) {
    return
  }
  else {
    const tracks = localScreenShareStream.getTracks()
    tracks.forEach((track) => {
      track.stop()
    })
  }
  ElMessage.info('屏幕分享结束')
  localScreenShareStream = null
  if (screenShareVideoElement.value) {
    screenShareVideoElement.value.srcObject = null
  }
  status.value = 'unshare'
}

function onRecordStopped() {
  const blob = new Blob(chunks, { type: 'video/mp4' })
  blobUrl.value = URL.createObjectURL(blob)
  chunks = []
  const i = setInterval(async () => {
    if (recordVideoElement.value && recordVideoElement.value.readyState > 0) {
      if (recordVideoElement.value.duration === Number.POSITIVE_INFINITY) {
        recordVideoElement.value.currentTime = 10000000 * Math.random()
      }
      else {
        clearInterval(i)
        recordVideoElement.value.currentTime = 0
      }
    }
  }, 200)
}

function onDataAvailable(e: any) {
  chunks.push(e.data)
}

function selectAudio() {
  if (recordAudio.value && recordMicro.value) {
    recordMicro.value = 'never'
  }
}

function selectMicro() {
  if (recordAudio.value && recordMicro.value) {
    recordAudio.value = 'never'
  }
}
</script>

<template>
  <div
    v-if="isSupported"
    class="wrapper"
  >
    <div class="video-wrapper">
      <div class="previewVideo">
        <video
          v-show="!blobUrl"
          ref="screenShareVideoElement"
          autoplay
        />
        <video
          v-show="blobUrl"
          ref="recordVideoElement"
          controls
          :src="blobUrl"
        />
        <span
          v-show="showStatus"
          class="rec"
        >{{ showStatus }}</span>
      </div>
      <div
        class="operations"
      >
        <el-button
          type="primary"
          @click="showSettings = !showSettings"
        >
          设置
        </el-button>
        <el-button
          v-if="status === SCREEN_UNSHARE"
          type="primary"
          @click="openScreenShare"
        >
          开启屏幕共享
        </el-button>
        <template v-else>
          <el-button
            type="primary"
            :disabled="status === RECORD_STATUS_RECORDING || status === RECORD_STATUS_PAUSED"
            @click="start"
          >
            开始录制
          </el-button>
          <el-button
            type="primary"
            :disabled="status !== RECORD_STATUS_RECORDING"
            @click="pause"
          >
            暂停
          </el-button>
          <el-button
            type="primary"
            :disabled="status !== RECORD_STATUS_PAUSED"
            @click="resume"
          >
            继续
          </el-button>
          <el-button
            type="primary"
            :disabled="status === RECORD_STATUS_UNSTART || status === RECORD_STATUS_STOPPED"
            @click="stop"
          >
            停止
          </el-button>
        </template>
        <template
          v-if="blobUrl"
        >
          <el-button
            type="primary"
            @click="clear"
          >
            清除
          </el-button>
          <el-button
            type="primary"
            @click="download"
          >
            下载
          </el-button>
        </template>
      </div>
    </div>
    <div
      v-show="showSettings"
      class="settings-wrapper"
    >
      <el-alert
        title="由于浏览器限制，部分设置可能无法生效"
        type="warning"
        show-icon
        style="margin-bottom: .8rem;"
      />
      <el-form
        v-if="status === 'unshare'"
        label-position="top"
      >
        <el-form-item label="系统音频">
          <el-select
            v-model="recordAudio"
            @change="selectAudio"
          >
            <el-option
              v-for="item in recordAudioOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="麦克风">
          <el-select
            v-model="recordMicro"
            @change="selectMicro"
          >
            <el-option
              v-for="item in recordMicroOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          v-if="supportedConstraints.aspectRatio"
          label="选择长宽比"
        >
          <el-select
            v-model="aspectRatio"
          >
            <el-option
              v-for="item in aspectRatioList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          v-if="supportedConstraints.frameRate"
          label="选择帧率"
        >
          <el-select
            v-model="frameRate"
          >
            <el-option
              v-for="item in frameRateList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          v-if="supportedConstraints.width && supportedConstraints.height"
          label="选择分辨率"
        >
          <el-select
            v-model="resolutions"
          >
            <el-option
              v-for="item in resolutionsList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="是否显示光标">
          <el-select
            v-model="cursor"
            :options="cursorList"
          >
            <el-option
              v-for="item in cursorList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
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
    </div>
  </div>
  <template v-else>
    <a-typography-title :level="3">
      你的浏览器不支持WebRTC，请安装最新版本Chrome后重试。
    </a-typography-title>
  </template>
</template>

<style scoped lang="scss">
.wrapper {
  overflow: auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
}

.video-wrapper {
  overflow: auto;
  flex: 1;
}

.settings-wrapper {
  overflow: auto;
  width: 33rem;

  @media (max-width: 1250px) {
    width: 100%;
  }

  .el-form-item {
    margin-bottom: .8rem;

    .el-select {
      width: 100%;
    }
  }
}

.previewVideo {
  margin: 0 auto;
  display: block;
  width: 100%;
  max-width: 120rem;
  position: relative;

  video {
    width: 100%;
    background: #dedede;
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
  display: flex;
  gap: .8rem;
  width: 100%;
  margin-top: .8rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
