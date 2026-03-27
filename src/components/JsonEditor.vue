<script setup>
import JsonEditorVue from 'json-editor-vue'
import { useGlobalStore } from '@/stores/global.ts'
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
