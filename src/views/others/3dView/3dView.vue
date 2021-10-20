<template>
  <container>
    <Upload :fileList="[]" :showUploadList="false" :before-upload="upload">
      <Input readonly placeholder="点击这里上传文件" :value="fileName">
        <template #addonAfter>
          <Button block :disabled="!file" :loading="loading" @click.stop="load">
            <span v-if="loading">加载中</span>
            <span v-else>加载</span>
          </Button>
        </template>
      </Input>
    </Upload>
    <div class="threeContainer" ref="treeContainer"></div>
  </container>
</template>

<script>
import { Container } from '@/components'
import { WebGLRenderer, PerspectiveCamera, AmbientLight, Scene, Color } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Input, Upload, Button } from 'ant-design-vue'

let scene, camera, renderer, ambientLight, controls, loader, modelScene

const animate = () => {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

export default {
  name: '3dView',
  components: { Container, Upload, Input, Button },
  data: () => ({
    file: undefined,
    fileName: undefined,
    loading: false
  }),
  mounted () {
    this.initScene()
  },
  methods: {
    initScene () {
      // Scene
      scene = new Scene()
      scene.background = new Color(0x999999)

      // Renderer
      renderer = new WebGLRenderer({ antialias: true })
      renderer.setSize(parseFloat(window.getComputedStyle(this.$refs.treeContainer).width), parseFloat(window.getComputedStyle(this.$refs.treeContainer).height))
      this.$refs.treeContainer.appendChild(renderer.domElement)

      // Camera
      const aspect = parseFloat(window.getComputedStyle(this.$refs.treeContainer).width) / parseFloat(window.getComputedStyle(this.$refs.treeContainer).height)
      camera = new PerspectiveCamera(60, aspect, 0.01, 5000)
      camera.position.set(5, 2, 0)
      renderer.render(scene, camera)

      // Camera Controls
      controls = new OrbitControls(camera, renderer.domElement)

      // Light
      ambientLight = new AmbientLight(0xaaaaaa, 20)
      scene.add(ambientLight)

      // Loader
      loader = new GLTFLoader()
    },
    upload (file) {
      if (this.file) {
        URL.revokeObjectURL(this.file)
        this.file = undefined
      }
      this.fileName = file.name
      this.file = URL.createObjectURL(file)
      return false
    },
    load () {
      this.loading = true
      if (modelScene) {}
      if (this.file) {
        loader.load(this.file, result => {
          modelScene = scene.add(result.scene)
          animate()
          this.loading = false
        }, () => {}, () => {
          this.loading = false
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.threeContainer {
  width: 100%;
  height: calc(100% - .8rem - 32px);
}

:deep(.ant-upload) {
  width: 100% !important;
  margin-bottom: .8rem;
}

:deep(.ant-input-group-addon) {
  padding: 0;
  border: unset;
}
</style>
