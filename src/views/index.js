export default {
  login: () => import('@/views/login/index.vue'),
  imgHosting: () => import('@/views/common/imgHosting.vue'),
  uuid: () => import('@/views/program/uuid.vue'),
  mtqLoans: () => import('@/views/money/mtqLoans.vue'),
  timeCompute: () => import('@/views/program/timeCompute.vue'),
  colorTransform: () => import('@/views/program/colorTransform.vue'),
  jsonEditor: () => import('@/views/program/jsonEditor.vue'),
  settings: () => import('@/views/settings/index.vue'),
  whatAnimeIsThis: () => import('@/views/anime/whatAnimeIsThis.vue'),
  bilibiliBv2av: () => import('@/views/anime/bilibiliBv2av.vue'),
  oreooo: () => import('@/views/others/oreooo/index.vue'),
  2048: () => import('@/views/games/2048/index.vue'),
  urlEncode: () => import('@/views/program/urlEncode.vue'),
  dataListTreeHandler: () => import('@/views/priTools/dataListTreeHandler.vue'),
  tetris: () => import('@/views/games/tetris/index.vue')
}
