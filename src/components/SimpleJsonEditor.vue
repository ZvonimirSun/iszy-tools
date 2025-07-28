<script setup>
import JsonEditorVue from 'json-editor-vue'
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'

const isDark = useGlobalStore().isDark
</script>

<template>
  <JsonEditorVue
    v-bind="$attrs"
    :class="{
      'jse-theme-dark': isDark,
    }"
  />
</template>
