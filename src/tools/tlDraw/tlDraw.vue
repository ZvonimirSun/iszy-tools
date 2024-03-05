<script setup lang="ts">
import 'tldraw/tldraw.css'
import { applyReactInVue } from 'veaury'
import { Tldraw } from 'tldraw'
import { getAssetUrls } from '@tldraw/assets/selfHosted'
import config from '@/config'

const assetUrls = getAssetUrls({
  baseUrl: `https://jsdelivr.${config.cdnHost}/npm/@tldraw/assets@2.0.0/`,
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
