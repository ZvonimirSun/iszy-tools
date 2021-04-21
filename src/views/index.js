import login from '@/views/login/index.vue'
import imgHosting from '@/views/common/imgHosting.vue'
import uuid from '@/views/encrypt/uuid.vue'
import mtqLoans from '@/views/money/mtqLoans.vue'
import timeCompute from '@/views/program/timeCompute.vue'
import colorTransform from '@/views/program/colorTransform.vue'

let widgets = [login]
widgets = [
  ...widgets,
  imgHosting,
  uuid,
  mtqLoans,
  timeCompute,
  colorTransform
]

export default widgets
