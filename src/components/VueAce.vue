<template>
  <div
    ref="aceDiv"
    class="w-full h-full"
  />
</template>

<script setup>
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/mode-xml.js'

const aceDiv = ref()
let aceEditor

// eslint-disable-next-line no-undef
const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})

watch(props.value, (value) => {
  if (aceEditor) {
    aceEditor.setValue(value)
  }
})

onMounted(() => {
  aceEditor = ace.edit(aceDiv.value, {
    tabSize: 2,
    theme: 'ace/theme/idea',
    mode: 'ace/mode/xml',
    value: props.value.value
  })
})
</script>

<style lang="scss" scoped></style>
