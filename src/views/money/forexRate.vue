<template>
  <div
    w-full
    h-full
    overflow-auto
  >
    <a-typography-paragraph>
      <blockquote>仅供参考，采用第三方接口，数据可能存在延迟</blockquote>
    </a-typography-paragraph>
    <a-space
      :gap="8"
      direction="vertical"
      style="margin: 0 auto"
    >
      <div>
        <a-statistic
          :title="`1 ${forexMap[curFromCode]} 等于`"
          :value="`${rate} ${forexMap[curToCode]}`"
        />
        <a-typography-paragraph>
          <blockquote>查询时间: {{ time }}</blockquote>
        </a-typography-paragraph>
      </div>
      <a-space :gap="8">
        <a-input-number
          v-model:value.number="fromValue"
          class="w-50"
          @change="updateToValue"
        />
        <a-select
          v-model:value="fromCode"
          class="w-50"
        >
          <a-select-option
            v-for="(item,index) in forexList"
            :key="index"
            :value="item.code"
          >
            {{ item.label }}
          </a-select-option>
        </a-select>
      </a-space>
      <a-space :gap="8">
        <a-input-number
          v-model:value.number="toValue"
          class="w-50"
          @change="updateFromValue"
        />
        <a-select
          v-model:value="toCode"
          class="w-50"
        >
          <a-select-option
            v-for="(item,index) in forexList"
            :key="index"
            :value="item.code"
          >
            {{ item.label }}
          </a-select-option>
        </a-select>
      </a-space>
    </a-space>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useAxios } from '@vueuse/integrations/useAxios'

dayjs.extend(utc)

const $axios = inject('$axios')
const $msg = inject('$msg')

const fromCode = ref('CNY')
const toCode = ref('USD')

const curFromCode = ref('CNY')
const curToCode = ref('USD')

const fromValue = ref(1)
const toValue = ref(0)

const forexList = ref([
  { code: 'USD', label: '美元' },
  { code: 'CNY', label: '人民币' },
  { code: 'GBP', label: '英镑' },
  { code: 'EUR', label: '欧元' },
  { code: 'HKD', label: '港币' },
  { code: 'MOP', label: '澳门元' },
  { code: 'JPY', label: '日元' },
  { code: 'CAD', label: '加拿大元' },
  { code: 'AUD', label: '澳大利亚元' },
  { code: 'SGD', label: '新加坡元' },
  { code: 'KRW', label: '韩元' },
  { code: 'PHP', label: '菲律宾比索' },
  { code: 'THB', label: '泰国铢' },
  { code: 'CHF', label: '瑞士法郎' },
  { code: 'NZD', label: '新西兰元' },
  { code: 'DKK', label: '丹麦克朗' },
  { code: 'NOK', label: '挪威克朗' },
  { code: 'SEK', label: '瑞典克朗' },
  { code: 'RUB', label: '卢布' },
  { code: 'MYR', label: '林吉特' },
  { code: 'ZAR', label: '南非兰特' }
])

const forexMap = computed(() => {
  const map = {}
  forexList.value.forEach(item => {
    map[item.code] = item.label
  })
  return map
})

const time = ref('')

const { data, execute } = useAxios('https://api.it120.cc/iszy/forex/rate', {
  params: {
    fromCode: fromCode.value,
    toCode: toCode.value
  }
})

const rate = computed(() => {
  if (data.value) {
    return data.value.data?.rate || 0
  }
  return 0
})

watch([fromCode, toCode], () => {
  execute('https://api.it120.cc/iszy/forex/rate', {
    params: {
      fromCode: fromCode.value,
      toCode: toCode.value
    }
  })
})

watch(rate, () => {
  time.value = dayjs.utc().format('M月D日 UTC HH:mm')
  curFromCode.value = fromCode.value
  curToCode.value = toCode.value
  toValue.value = fromValue.value * rate.value
})

function updateToValue () {
  toValue.value = parseFloat((fromValue.value * rate.value).toFixed(4))
}

function updateFromValue () {
  fromValue.value = parseFloat((toValue.value / rate.value).toFixed(4))
}
</script>

<style scoped lang="scss">

</style>
