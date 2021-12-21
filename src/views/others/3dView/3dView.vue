<template>
  <Upload :fileList="[]" :showUploadList="false" :before-upload="getFileList" :directory="true">
    <Input readonly placeholder="点击这里选择 gltf 文件所在文件夹" :value="fileName">
      <template #addonAfter>
        <Button block :disabled="!fileName" :loading="loading" @click.stop="loadScene">
          <span v-if="loading">加载中</span>
          <span v-else>加载</span>
        </Button>
      </template>
    </Input>
  </Upload>
  <div class="threeContainer" ref="treeContainer"></div>
</template>

<script>
import { WebGLRenderer, PerspectiveCamera, AmbientLight, Scene, Color, LoaderUtils, LoadingManager } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Input, Upload, Button } from 'ant-design-vue'

let scene, camera, renderer, ambientLight, controls, manager
let fileList, fileMap, rootFile, rootPath, loader, modelScene
let blobURLs = []
// glTF texture types. `envMap` is deliberately omitted, as it's used internally
// by the loader but not part of the glTF format.
const MAP_NAMES = [
  'map',
  'aoMap',
  'emissiveMap',
  'glossinessMap',
  'metalnessMap',
  'normalMap',
  'roughnessMap',
  'specularMap'
]

const animate = () => {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

export default {
  name: '3dView',
  components: {
    Upload,
    Input,
    Button
  },
  data: () => ({
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

      manager = new LoadingManager()
      animate()
    },
    getFileList (f, list) {
      if (fileList !== list) {
        const map = new Map()
        let flag = 0
        for (const file of list) {
          const path = file.webkitRelativePath || file.name
          map.set(path, file)
          if (file.name.match(/\.(gltf|glb)$/)) {
            flag = 1
            this.fileName = file.name
            rootFile = file
            rootPath = path.replace(file.name, '')
          }
        }
        if (flag === 1) {
          fileMap = map
        } else {
          this.$msg.error('此文件夹不包含gltf文件')
        }
      }
      return false
    },
    loadScene () {
      this.clearScene()
      const fileURL = typeof rootFile === 'string'
        ? rootFile
        : URL.createObjectURL(rootFile)
      const baseURL = LoaderUtils.extractUrlBase(fileURL)
      manager.setURLModifier((url, path) => {
        const normalizedURL = rootPath + decodeURI(url)
          .replace(baseURL, '')
          .replace(/^(\.?\/)/, '')
        if (fileMap.has(normalizedURL)) {
          const blob = fileMap.get(normalizedURL)
          const blobURL = URL.createObjectURL(blob)
          blobURLs.push(blobURL)
          return blobURL
        }
        return (path || '') + url
      })
      blobURLs = []
      loader = new GLTFLoader(manager)
      loader.load(fileURL, (gltf) => {
        modelScene = gltf.scene || gltf.scenes[0]
        scene.add(modelScene)
        blobURLs.forEach(URL.revokeObjectURL)
      }, () => {}, () => {
        blobURLs.forEach(URL.revokeObjectURL)
      })
    },
    clearScene () {
      if (!modelScene) {
        return
      }
      scene.remove(modelScene)
      modelScene.traverse((node) => {
        if (!node.isMesh) return
        node.geometry.dispose()
        const materials = Array.isArray(node.material)
          ? node.material
          : [node.material]
        materials.forEach((material) => {
          MAP_NAMES.forEach((map) => {
            if (material[map]) material[map].dispose()
          })
        })
      })
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
