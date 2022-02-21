<template>
  <template v-if="isSupported">
    <Title :level="3">
      实时预览
    </Title>
    <div class="previewVideo">
      <video
        ref="screenShare"
        autoplay
      />
      <span
        v-show="showREC"
        class="rec"
      >REC</span>
    </div>
    <Space
      :size="8"
      class="operations"
      align="center"
    >
      <Button
        type="primary"
        :disabled="disabled.open"
        @click="openScreenShare"
      >
        开启屏幕共享
      </Button>
      <Button
        type="primary"
        :disabled="disabled.start"
        @click="start"
      >
        开始录制
      </Button>
      <Button
        type="primary"
        :disabled="disabled.pause"
        @click="pause"
      >
        暂停
      </Button>
      <Button
        type="primary"
        :disabled="disabled.resume"
        @click="resume"
      >
        继续
      </Button>
      <Button
        type="primary"
        :disabled="disabled.stop"
        @click="stop"
      >
        停止
      </Button>
      <Button
        type="primary"
        :disabled="disabled.download"
        @click="download"
      >
        下载
      </Button>
    </Space>
    <template v-if="!!blobUrl">
      <Divider />
      <Title :level="3">
        结果
      </Title>
      <div class="previewVideo">
        <video
          controls
          :src="blobUrl"
        />
      </div>
    </template>
    <Divider />
    <Title :level="3">
      设置
    </Title>
    <Alert
      message="由于浏览器限制，部分设置可能无法生效"
      type="warning"
      show-icon
      closable
      style="margin-bottom: .8rem;"
    />
    <Form
      v-if="!disabled.open"
      :label-col="{sm: {span: 5}, md: {span: 4}, lg: {span: 3}, xxl: {span: 2}}"
    >
      <FormItem label="系统音频">
        <Select
          v-model:value="recordAudio"
          :options="recordAudioOptions"
          @change="selectAudio"
        />
      </FormItem>
      <FormItem label="麦克风">
        <Select
          v-model:value="recordMicro"
          :options="recordMicroOptions"
          @change="selectMicro"
        />
      </FormItem>
      <FormItem
        v-if="supportedConstraints.aspectRatio"
        label="选择长宽比"
      >
        <Select
          v-model:value="aspectRatio"
          :options="aspectRatioList"
        />
      </FormItem>
      <FormItem
        v-if="supportedConstraints.frameRate"
        label="选择帧率"
      >
        <Select
          v-model:value="frameRate"
          :options="frameRateList"
        />
      </FormItem>
      <FormItem
        v-if="supportedConstraints.width && supportedConstraints.height"
        label="选择分辨率"
      >
        <Select
          v-model:value="resolutions"
          :options="resolutionsList"
        />
      </FormItem>
      <FormItem label="是否显示光标">
        <Select
          v-model:value="cursor"
          :options="cursorList"
        />
      </FormItem>
    </Form>
    <template v-else>
      <Title :level="4">
        当前设置
      </Title>
      <Paragraph>
        <ul>
          <li>系统音频: {{ currentDisplayMediaOptions.video.recordAudio }}</li>
          <li>麦克风: {{ currentDisplayMediaOptions.video.recordMicro }}</li>
          <li>长宽比: {{ currentDisplayMediaOptions.video.aspectRatio }}</li>
          <li>帧率: {{ currentDisplayMediaOptions.video.frameRate }}</li>
          <li>视频宽度: {{ currentDisplayMediaOptions.video.width }}</li>
          <li>视频高度: {{ currentDisplayMediaOptions.video.height }}</li>
          <li>显示鼠标: {{ currentDisplayMediaOptions.video.cursor }}</li>
        </ul>
      </Paragraph>
    </template>
  </template>
  <template v-else>
    <Title :level="3">
      你的浏览器不支持WebRTC，请安装最新版本Chrome后重试。
    </Title>
  </template>
</template>

<script>
import { Typography, Space, Button, Divider, Form, Select, Alert } from 'ant-design-vue'

const { Title, Paragraph } = Typography
const { Item: FormItem } = Form

const RECORD_STATUS_UNSTART = 'unstart'
const RECORD_STATUS_RECORDING = 'recording'
const RECORD_STATUS_PAUSED = 'paused'
const RECORD_STATUS_STOPPED = 'stopped'

export default {
  name: 'ScreenRecord',
  components: { Title, Paragraph, Space, Button, Divider, Form, FormItem, Select, Alert },
  data: () => ({
    recorder: null,
    screenShareVideoElement: null,
    localScreenShareStream: null,
    disabled: {
      open: false,
      start: true,
      pause: true,
      resume: true,
      stop: true,
      download: true
    },
    status: RECORD_STATUS_UNSTART,
    chunks: [],
    blobUrl: '',

    recordAudio: 'never',
    recordAudioOptions: [
      {
        label: '否',
        value: 'never'
      },
      {
        label: '是',
        value: 'always'
      }
    ],
    recordMicro: 'never',
    recordMicroOptions: [
      {
        label: '否',
        value: 'never'
      },
      {
        label: '是',
        value: 'always'
      }
    ],
    aspectRatio: 'default',
    aspectRatioList: [
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
    ],
    frameRate: 'default',
    frameRateList: [
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
    ],
    resolutions: 'default',
    resolutionsList: [
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
    ],
    cursor: 'default',
    cursorList: [
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
  }),
  computed: {
    supportedConstraints () {
      if (navigator && navigator.mediaDevices && navigator.mediaDevices.getSupportedConstraints) {
        return navigator.mediaDevices.getSupportedConstraints()
      } else {
        return {}
      }
    },
    isScreenShareSupported () {
      return Boolean(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia)
    },
    isWebRTCSupported () {
      return Boolean(navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
    },
    isSupported () {
      return this.isScreenShareSupported && this.isWebRTCSupported
    },
    showREC () {
      return this.status === RECORD_STATUS_RECORDING
    },
    displayMediaOptions () {
      const videoConstraints = {}
      if (this.aspectRatio !== 'default') {
        videoConstraints.aspectRatio = this.aspectRatio
      }
      if (this.frameRate !== 'default') {
        videoConstraints.frameRate = this.frameRate
      }
      if (this.cursor !== 'default') {
        videoConstraints.cursor = this.cursor
      }
      if (this.resolutions !== 'default') {
        if (this.resolutions === 'fit-screen') {
          videoConstraints.width = screen.width
          videoConstraints.height = screen.height
        }
        if (this.resolutions === '4K') {
          videoConstraints.width = 3840
          videoConstraints.height = 2160
        }
        if (this.resolutions === '1080p') {
          videoConstraints.width = 1920
          videoConstraints.height = 1080
        }
        if (this.resolutions === '720p') {
          videoConstraints.width = 1280
          videoConstraints.height = 720
        }
      }
      return {
        video: videoConstraints,
        audio: this.recordAudio === 'always'
      }
    },
    currentDisplayMediaOptions () {
      if (this.localScreenShareStream) {
        const tracks = this.localScreenShareStream.getVideoTracks()
        if (tracks.length > 0) {
          const settings = tracks[0].getSettings()
          const currentOptions = {
            recordAudio: this.recordAudioOptions.find(item => (this.recordAudio === item.value)).label,
            recordMicro: this.recordMicroOptions.find(item => (this.recordMicro === item.value)).label,
            frameRate: settings.frameRate,
            width: settings.width,
            height: settings.height
          }
          if (settings.aspectRatio) {
            const option = this.aspectRatioList.find(item => (settings.aspectRatio - item.value <= 0.1))
            if (option) {
              currentOptions.aspectRatio = option.label
            } else {
              currentOptions.aspectRatio = '默认'
            }
          }
          if (settings.cursor) {
            const option = this.cursorList.find(item => (settings.cursor === item.value))
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
        video: {},
        audio: {}
      }
    }
  },
  mounted () {
    this.screenShareVideoElement = this.$refs.screenShare
  },
  beforeUnmount () {
    this.stop()
  },
  methods: {
    async openScreenShare () {
      try {
        this.localScreenShareStream = await navigator.mediaDevices.getDisplayMedia(this.displayMediaOptions)
        if (this.recordMicro === 'always') {
          const tempStream = await navigator.mediaDevices.getUserMedia({ audio: true })
          this.localScreenShareStream.addTrack(tempStream.getAudioTracks()[0])
        }

        const screenShareTrack = this.localScreenShareStream.getVideoTracks()[0]
        if (screenShareTrack) {
          screenShareTrack.onended = this.onScreenShareEnded
          screenShareTrack.onmute = this.onScreenShareEnded
        }

        this.recorder = new MediaRecorder(this.localScreenShareStream)
        this.recorder.onstop = this.onRecordStopped
        this.recorder.ondataavailable = this.onDataAvailable

        this.screenShareVideoElement.srcObject = this.localScreenShareStream
        this.screenShareVideoElement.muted = true
        this.disabled.open = true
        this.disabled.start = false
      } catch (e) {
        this.$msg.error(e.message)
      }
    },
    start () {
      this.recorder.start()
      this.status = RECORD_STATUS_RECORDING
      this.disabled.start = true
      this.disabled.pause = false
      this.disabled.stop = false
    },
    pause () {
      this.recorder.pause()
      this.status = RECORD_STATUS_PAUSED
      this.disabled.pause = true
      this.disabled.resume = false
    },
    resume () {
      this.recorder.resume()
      this.status = RECORD_STATUS_RECORDING
      this.disabled.pause = false
      this.disabled.resume = true
    },
    stop () {
      if (this.recorder && this.recorder.state !== 'inactive') {
        this.recorder.stop()
      }
      this.status = RECORD_STATUS_STOPPED
      this.disabled.start = false
      this.disabled.pause = true
      this.disabled.resume = true
      this.disabled.stop = true
    },
    download () {
      if (this.blobUrl) {
        const link = document.createElement('a')
        link.href = this.blobUrl
        link.download = 'screen-record.mp4'
        link.click()
      }
    },

    onScreenShareEnded () {
      this.stop()
      if (!this.localScreenShareStream) {
        return
      } else {
        const tracks = this.localScreenShareStream.getTracks()
        tracks.forEach(track => {
          track.stop()
        })
      }
      this.$msg.info('屏幕分享结束')
      this.localScreenShareStream = null
      this.screenShareVideoElement.srcObject = null
      this.disabled.open = false
      this.disabled.start = true
    },
    onRecordStopped () {
      const blob = new Blob(this.chunks, { type: 'video/mp4' })
      this.blobUrl = URL.createObjectURL(blob)
      this.disabled.download = false
      this.chunks = []
    },
    onDataAvailable (e) {
      this.chunks.push(e.data)
    },

    selectAudio () {
      if (this.recordAudio && this.recordMicro) {
        this.recordMicro = 'never'
      }
    },
    selectMicro () {
      if (this.recordAudio && this.recordMicro) {
        this.recordAudio = 'never'
      }
    }
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
