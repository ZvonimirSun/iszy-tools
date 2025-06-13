<script setup lang="tsx">
import { useRouteHash } from '@vueuse/router'
import { getParam } from '@/utils/hashHandler'
import { selectedProject, setProject } from './child/mockData.service'
import MockDetail from './child/mockDetail.vue'
import MockList from './child/mockList.vue'
import { init, selectProject } from './child/mockProject.service'

const hash = useRouteHash()

onMounted(() => {
  init()
})

watch(hash, () => {
  // 修复路由不跟随问题
  const prjId = getParam('prjId')
  if (prjId && !selectedProject.value) {
    selectProject(prjId)
  }
  else if (!prjId && selectedProject.value) {
    setProject()
  }
})
</script>

<template>
  <MockList
    v-if="!selectedProject"
  />
  <MockDetail v-else />
</template>
