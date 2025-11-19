<script setup lang="ts">
import $axios from 'axios'

const loading = ref(false)
const domains = ref('')
const result = ref<string>()

async function search() {
  if (!domains.value)
    return
  loading.value = true
  try {
    const res = (await $axios.get(`https://cdn.owooo.cc/cors/https://www.iana.org/whois?q=${domains.value}`)).data
    const tree = new DOMParser().parseFromString(res, 'text/html')
    result.value = tree.querySelector('#results + pre')?.innerHTML
  }
  catch (e) {
    ElMessage.error('查询失败')
  }
  loading.value = false
}
</script>

<template>
  <div
    h-full w-full flex flex-col
  >
    <el-input
      v-model="domains"
      placeholder="输入域名查询"
      @keyup.enter="search"
    >
      <template #suffix>
        <span
          v-if="!loading"
          class="i-icon-park-outline-search"
          cursor-pointer
          @click="search"
        />
        <span
          v-else
          class="i-icon-park-outline-search"
          cursor-pointer
        />
      </template>
    </el-input>
    <pre
      v-loading="loading"
      flex-1
      overflow-auto
    >{{ result }}</pre>
  </div>
</template>
