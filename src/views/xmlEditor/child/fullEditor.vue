<script setup lang="ts">
import Xml from '@/components/editor/lang-xml'

defineProps({
  value: {
    type: String,
    default: ''
  }
})

const emits = defineEmits<{(e: 'change', val: string): void}>()

function change (val: string) {
  emits('change', val)
}
</script>

<template>
  <Editor
    h-full
    :input-default="value"
    :plugin="Xml"
    @change="change"
  />
</template>
