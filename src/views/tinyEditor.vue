<template>
  <div class="panel">
    <Editor
      v-show="!fullScreenStatus"
      class="inputPanel"
      placeholder="请输入HTML内容"
      :plugin="html"
      :input-default="store.html"
      @change="store.html = $event"
    />
    <Editor
      v-show="!fullScreenStatus"
      class="inputPanel"
      placeholder="请输入JS内容"
      :plugin="js"
      :input-default="store.js"
      @change="store.js = $event"
    />
    <Editor
      v-show="!fullScreenStatus"
      class="inputPanel"
      placeholder="请输入CSS内容"
      :plugin="css"
      :input-default="store.css"
      @change="store.css = $event"
    />
    <div
      class="displayPanel"
      :class="{
        fullPanel: fullScreenStatus
      }"
    >
      <el-space class="fullScreen">
        <span
          v-if="fullScreenStatus"
          class="i-icon-park-outline-off-screen"
          title="退出完整展示"
          @click="fullScreen"
        />
        <span
          v-else
          class="i-icon-park-outline-full-screen"
          title="完整展示"
          @click="fullScreen"
        />
        <span
          class="i-fa-solid-external-link-alt"
          title="新标签打开"
          @click="openNew"
        />
      </el-space>
      <iframe
        w-full
        h-full
        :srcdoc="doc"
        seamless
        title="展示面板"
        allowTransparency="true"
      />
    </div>
  </div>
</template>

<script setup>
import { useTinyEditorStore } from '@/stores/tinyEditor'
import html from '@/components/editor/lang-html'
import css from '@/components/editor/lang-css'
import js from '@/components/editor/lang-js'

const store = useTinyEditorStore()

const doc = computed(() => {
  if (store.html + store.css + store.js === '') {
    return '输入内容以在此展示'
  } else {
    return store.html + '<style>' + store.css + '<\/style><script>' + store.js + '<\/script>'
  }
})

const fullScreenStatus = ref(false)

function fullScreen () {
  fullScreenStatus.value = !fullScreenStatus.value
}
function openNew () {
  const newTab = window.open('', '_blank')
  newTab.document.write(doc.value)
}
</script>

<style scoped lang="scss">
.panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  * {
    box-sizing: border-box;
  }

  .inputPanel {
    height: 50%;
    width: 50%;
    resize: none;
    border: 1px solid var(--el-border-color);

    @media (max-width: 992px) {
      height: 70%;
      width: 100%;
    }

    &:hover {
      border-color: var(--el-color-primary);
    }
  }

  .displayPanel {
    flex: 1;
    height: 50%;
    position: relative;
    width: 50%;

    .fullScreen {
      position: absolute;
      right: .8rem;
      top: .8rem;

      [class^="i-"] {
        cursor: pointer;

        &:hover {
          color: var(--el-color-primary);
        }
      }
    }

    &.fullPanel {
      height: 100%;
      width: 100%;
    }

    iframe {
      border: 1px solid var(--el-border-color);
    }

    @media (max-width: 992px) {
      height: 70%;
    }

    &:hover {
      border-color: var(--el-color-primary);
    }
  }
}
</style>
