<script setup>
import {
  AmbientLight,
  Color,
  LoaderUtils,
  LoadingManager,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

let scene, camera, renderer, ambientLight, controls, manager
let loader
let modelScene
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
  'specularMap',
]

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

const loading = ref(false)
const fileList = ref([])

const uploadRef = ref()
const treeContainer = ref()

onMounted(() => {
  uploadRef.value.$el.querySelector('.el-upload__input').webkitdirectory = true
  initScene()
})

const rawFileList = computed(() => {
  const result = []
  for (const file of fileList.value) {
    if (file.raw) {
      result.push(file.raw)
    }
  }
  return result
})

const rootFile = computed(() => {
  if (rawFileList.value.length) {
    for (const file of rawFileList.value) {
      if (file.name.match(/\.(gltf|glb)$/)) {
        return file
      }
    }
  }
  return null
})

const fileMap = computed(() => {
  const map = {}
  if (rawFileList.value.length) {
    for (const file of rawFileList.value) {
      const path = file.webkitRelativePath || file.name
      map[path] = file
    }
  }
  return map
})

const fileName = computed(() => {
  return rootFile.value?.name
})

const rootPath = computed(() => {
  if (rootFile.value) {
    const path = rootFile.value.webkitRelativePath || rootFile.value.name
    return path.replace(fileName.value || '', '')
  }
  return ''
})

function initScene() {
  // Scene
  scene = new Scene()
  scene.background = new Color(0x999999)

  // Renderer
  renderer = new WebGLRenderer({ antialias: true })
  renderer.setSize(Number.parseFloat(window.getComputedStyle(treeContainer.value).width), Number.parseFloat(window.getComputedStyle(treeContainer.value).height))
  treeContainer.value.appendChild(renderer.domElement)

  // Camera
  const aspect = Number.parseFloat(window.getComputedStyle(treeContainer.value).width) / Number.parseFloat(window.getComputedStyle(treeContainer.value).height)
  camera = new PerspectiveCamera(60, aspect, 0.01, 5000)
  camera.position.set(5, 2, 0)
  renderer.render(scene, camera)

  // Camera Controls
  controls = new OrbitControls(camera, renderer.domElement)

  // Light
  ambientLight = new AmbientLight(0xAAAAAA, 20)
  scene.add(ambientLight)

  manager = new LoadingManager()
  animate()
}

function startUpload() {
  fileList.value = []
}

function loadScene() {
  if (modelScene) {
    clearScene()
  }
  if (!rootFile.value) {
    return
  }
  const fileURL = URL.createObjectURL(rootFile.value)
  const baseURL = LoaderUtils.extractUrlBase(fileURL)
  manager.setURLModifier((url, path) => {
    const normalizedURL = rootPath.value + decodeURI(url)
      .replace(baseURL, '')
      .replace(/^(\.?\/)/, '')
    if (fileMap.value[normalizedURL]) {
      const blob = fileMap.value[normalizedURL]
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
}
function clearScene() {
  scene.remove(modelScene)
  modelScene.traverse((node) => {
    if (!node.isMesh)
      return
    node.geometry.dispose()
    const materials = Array.isArray(node.material)
      ? node.material
      : [node.material]
    materials.forEach((material) => {
      MAP_NAMES.forEach((map) => {
        if (material[map])
          material[map].dispose()
      })
    })
  })
}
</script>

<template>
  <el-upload
    ref="uploadRef"
    v-model:file-list="fileList"
    :show-file-list="false"
    :auto-upload="false"
    multiple
  >
    <el-input
      readonly
      placeholder="点击这里选择 gltf 文件所在文件夹"
      :value="fileName"
      @click="startUpload"
    >
      <template #append>
        <el-button
          block
          :disabled="!fileName"
          :loading="loading"
          @click.stop="loadScene"
        >
          <span v-if="loading">加载中</span>
          <span v-else>加载</span>
        </el-button>
      </template>
    </el-input>
  </el-upload>
  <div
    ref="treeContainer"
    class="threeContainer"
  />
</template>

<style scoped lang="scss">
.threeContainer {
  width: 100%;
  height: calc(100% - .8rem - 32px);
}

:deep(.el-upload) {
  width: 100% !important;
  margin-bottom: .8rem;
}
</style>
