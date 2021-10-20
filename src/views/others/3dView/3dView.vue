<template>
  <container>
    <div class="threeContainer" ref="treeContainer"></div>
  </container>
</template>

<script>
import { Container } from '@/components'
import { WebGLRenderer, PerspectiveCamera, AmbientLight, Scene, Color } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let scene, camera, renderer, ambientLight, controls, loader, modelScene

const animate = () => {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

export default {
  name: '3dView',
  components: { Container },
  mounted () {
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

    loader = new GLTFLoader()
    // this.$nextTick(() => {
    //   // Loader
    //   loader = new GLTFLoader()
    //   loader.load('/models/lamborghini_huracan_gt3_-_squadra_corse_sdc/scene.gltf', result => {
    //     scene.add(result.scene)
    //     animate()
    //   })
    // })
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.threeContainer {
  width: 100%;
  height: 100%;
}
</style>
