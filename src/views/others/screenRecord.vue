<template>
  <container>
    <template v-if="isSupported">
      <Title :level="3">实时预览</Title>
      <div class="previewVideo">
        <video autoplay ref="screenShare">
        </video>
        <span class="rec" v-show="showREC">REC</span>
      </div>
      <Space :size="8" class="operations">
        <Button @click="openScreenShare" type="primary" :disabled="disabled.open">开启屏幕共享</Button>
        <Button @click="start" type="primary" :disabled="disabled.start">开始录制</Button>
        <Button @click="pause" type="primary" :disabled="disabled.pause">暂停</Button>
        <Button @click="resume" type="primary" :disabled="disabled.resume">继续</Button>
        <Button @click="stop" type="primary" :disabled="disabled.stop">停止</Button>
        <Button @click="download" type="primary" :disabled="disabled.download">下载</Button>
      </Space>
      <template v-if="!!blobUrl">
        <Divider/>
        <Title :level="3">结果</Title>
        <div class="previewVideo">
          <video controls :src="blobUrl"></video>
        </div>
      </template>
      <Divider/>
      <Title :level="3">设置</Title>
      <Form>
        <FormItem label="录制音频">
          <Select v-model:value="recordAudio" :disabled="disabled.open" :options="recordAudioOptions">
          </Select>
        </FormItem>
      </Form>
    </template>
    <template v-else>
      <Title :level="3">你的浏览器不支持WebRTC，请安装最新版本Chrome后重试。</Title>
    </template>
  </container>
</template>

<script>
import { Typography, Space, Button, Divider, Form, Select } from 'ant-design-vue'
import Container from '@/components/container.vue'

const { Title } = Typography
const { Item: FormItem } = Form

const RECORD_STATUS_UNSTART = 'unstart'
const RECORD_STATUS_RECORDING = 'recording'
const RECORD_STATUS_PAUSED = 'paused'
const RECORD_STATUS_STOPPED = 'stopped'

export default {
  name: 'screenRecord',
  components: { Container, Title, Space, Button, Divider, Form, FormItem, Select },
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
    }
  },
  mounted () {
    this.screenShareVideoElement = this.$refs.screenShare
  },
  methods: {
    async openScreenShare () {
      try {
        this.localScreenShareStream = await navigator.mediaDevices.getDisplayMedia()
        if (this.recordAudio === 'always') {
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
    }
  },
  beforeUnmount () {
    this.stop()
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
