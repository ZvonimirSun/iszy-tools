export default {
  login: () => import('@/views/login/index.vue'),
  imgHosting: () => import('@/views/common/imgHosting.vue'),
  uuid: () => import('@/views/encrypt/uuid.vue'),
  mtqLoans: () => import('@/views/money/mtqLoans.vue'),
  timeCompute: () => import('@/views/program/timeCompute.vue'),
  colorTransform: () => import('@/views/program/colorTransform.vue'),
  jsonEditor: () => import('@/views/program/jsonEditor.vue'),
  settings: () => import('@/views/settings/index.vue'),
  whatAnimeIsThis: () => import('@/views/anime/whatAnimeIsThis.vue')
}
