<script setup lang="ts">
import { getAssetUrls } from '@tldraw/assets/selfHosted'
import { Tldraw } from 'tldraw'
import { applyReactInVue } from 'veaury'
import config from '@/config'
import 'tldraw/tldraw.css'

const assetUrls = getAssetUrls({
  baseUrl: `${config.cdnOrigin}/jsd/npm/@tldraw/assets@3/`,
})
const TldrawComponent = applyReactInVue(Tldraw)
</script>

<template>
  <div class="tldraw-container">
    <!-- eslint-disable -->
    <TldrawComponent :inferDarkMode="true" :assetUrls="assetUrls" />
  </div>
</template>

<style scoped lang="scss">
.tldraw-container {
  @apply font-inter;
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
