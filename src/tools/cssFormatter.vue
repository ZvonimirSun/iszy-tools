<script setup>
import Css from '@/components/editor/lang-css'
</script>

<template>
  <FormatTransformer
    w-full
    :plugin="Css"
    target="CSS"
  />
</template>
