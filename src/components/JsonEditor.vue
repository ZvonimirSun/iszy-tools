<script setup>
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'
import JsonEditorVue from 'json-editor-vue'

const isDark = useStyleStore().isDark
</script>

<template>
  <JsonEditorVue
    v-bind="$attrs"
    :class="{
      'jse-theme-dark': isDark
    }"
  />
</template>
