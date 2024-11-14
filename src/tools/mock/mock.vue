<script setup lang="tsx">
import { selectedProject } from './child/mockData.service'
import MockDetail from './child/mockDetail.vue'
import MockList from './child/mockList.vue'
import { init } from './child/mockProject.service'

onMounted(() => {
  init()
})
</script>

<template>
  <MockList
    v-if="!selectedProject"
  />
  <MockDetail v-else />
</template>
