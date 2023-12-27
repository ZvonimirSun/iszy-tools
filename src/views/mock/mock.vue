<template>
  <MockList
    v-if="!selectedProject"
  />
  <MockDetail v-else />
</template>
<script setup lang="tsx">
import { selectedProject } from './child/mockData.service'
import { init } from './child/mockProject.service'
import MockList from './child/mockList.vue'
import MockDetail from './child/mockDetail.vue'

onMounted(() => {
  init()
})
</script>
