import { defineAsyncComponent } from 'vue'

export default {
  login: defineAsyncComponent(() => import('@/views/login/index.vue')),
  imgHosting: defineAsyncComponent(() => import('@/views/common/imgHosting.vue')),
  uuid: defineAsyncComponent(() => import('@/views/program/uuid.vue')),
  mtqLoans: defineAsyncComponent(() => import('@/views/money/mtqLoans.vue')),
  timeCompute: defineAsyncComponent(() => import('@/views/program/timeCompute.vue')),
  colorTransform: defineAsyncComponent(() => import('@/views/program/colorTransform.vue')),
  jsonEditor: defineAsyncComponent(() => import('@/views/program/jsonEditor.vue')),
  settings: defineAsyncComponent(() => import('@/views/settings/index.vue')),
  whatAnimeIsThis: defineAsyncComponent(() => import('@/views/anime/whatAnimeIsThis.vue')),
  bilibiliBv2av: defineAsyncComponent(() => import('@/views/anime/bilibiliBv2av.vue')),
  oreooo: defineAsyncComponent(() => import('@/views/others/oreooo/index.vue')),
  2048: defineAsyncComponent(() => import('@/views/games/2048/index.vue')),
  urlEncode: defineAsyncComponent(() => import('@/views/program/urlEncode.vue')),
  tetris: defineAsyncComponent(() => import('@/views/games/tetris/index.vue')),
  viewSourceCode: defineAsyncComponent(() => import('@/views/program/viewSourceCode.vue')),
  cssFormatter: defineAsyncComponent(() => import('@/views/program/cssFormatter.vue')),
  geoJson: defineAsyncComponent(() => import('@/views/gis/geoJson.vue')),
  latLng: defineAsyncComponent(() => import('@/views/gis/latLng.vue'))
}
