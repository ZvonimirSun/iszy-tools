<template>
  <div
    w-full
    h-full
    overflow-auto
  >
    <a-space
      :gap="8"
      direction="vertical"
      style="margin: 0 auto"
    >
      <div>1 {{ forexMap[curFromCode] }} 等于</div>
      <div>{{ rate }} {{ forexMap[curToCode] }}</div>
      <a-space :gap="8">
        <a-input-number
          v-model:value.number="fromValue"
          @change="updateToValue"
        />
        <a-select v-model:value="fromCode">
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
          @change="updateFromValue"
        />
        <a-select v-model:value="toCode">
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

const $axios = inject('$axios')
const $msg = inject('$msg')

const fromCode = ref('CNY')
const toCode = ref('USD')
const rate = ref(0)

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

onBeforeMount(() => {
  getRate()
})

watch([fromCode, toCode], () => {
  getRate()
})

watch(rate, () => {
  toValue.value = fromValue.value * rate.value
})

function getRate () {
  if (fromCode.value !== toCode.value) {
    $axios.get('https://api.it120.cc/iszy/forex/rate', {
      params: {
        fromCode: fromCode.value,
        toCode: toCode.value
      }
    }).then(res => {
      rate.value = res.data?.data?.rate || 0
      curFromCode.value = fromCode.value
      curToCode.value = toCode.value
    }).catch(err => {
      $msg.error(err.message)
    })
  } else {
    rate.value = 1
    curFromCode.value = fromCode.value
    curToCode.value = toCode.value
  }
}

function getLabel (code) {
  const item = forexList.value.find(item => item.code === code)
  return item?.label || ''
}

function updateToValue () {
  toValue.value = parseFloat((fromValue.value * rate.value).toFixed(4))
}

function updateFromValue () {
  fromValue.value = parseFloat((toValue.value / rate.value).toFixed(4))
}
</script>

<style scoped lang="scss">

</style>
