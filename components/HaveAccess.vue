<script setup lang="ts">
import type { AuthOption } from '@/types/auth'
const userStore = useUserStore()
const toolsStore = useToolsStore()
const router = useRouter()

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  auth?: AuthOption,
  link?: string
}>(), {
  auth: false,
  link: ''
})

const haveAccess = computed(() => {
  if (!props.auth) {
    if (props.link) {
      return userStore.checkAccess(toolsStore.getAuth(props.link))
    } else {
      return true
    }
  } else if (typeof props.auth === 'boolean') {
    return userStore.logged
  } else {
    return userStore.checkAccess(props.auth)
  }
})

function goto () {
  if (props.link) {
    router.push(props.link)
  }
}
</script>

<template>
  <template v-if="haveAccess">
    <slot
      v-bind="$attrs"
      :goto="goto"
    />
  </template>
</template>
