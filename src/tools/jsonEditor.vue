<script setup lang="ts">
import VanillaJsonEditor from '@/components/VanillaJsonEditor.vue'

const editorPanelContainerLeft = useComponentRef(VanillaJsonEditor)
const editorPanelContainerRight = useComponentRef(VanillaJsonEditor)
const editorPanel = ref<HTMLDivElement>()
const loading = ref(true)
const fullPanel = ref('')

const store = useJsonEditorStore()

const defaultData = {
  array: [
    1,
    2,
    3,
  ],
  boolean: true,
  color: 'gold',
  null: null,
  number: 123,
  object: {
    a: 'b',
    c: 'd',
  },
  string: 'Hello World',
}

onMounted(() => {
  init()
})

async function init() {
  if (store.syncCloud) {
    await store.getSyncData()
    loading.value = false
  }
  else {
    loading.value = false
  }
  if (store.leftData && store.leftData.content) {
    if (store.leftData.content.json) {
      editorPanelContainerLeft.value?.set(store.leftData.content.json)
    }
    else if (store.leftData.content.text) {
      editorPanelContainerLeft.value?.set(store.leftData.content.text)
    }
  }
  else {
    editorPanelContainerLeft.value?.set(defaultData)
  }
  if (store.rightData && store.rightData.content) {
    if (store.rightData.content.json) {
      editorPanelContainerRight.value?.set(store.rightData.content.json)
    }
    else if (store.rightData.content.text) {
      editorPanelContainerRight.value?.set(store.rightData.content.text)
    }
  }
  fullPanel.value = store.fullStatus
}

function create(leftOrRight: 'left' | 'right') {
  store.saveData({
    [leftOrRight]: true,
  })
  if (leftOrRight === 'left') {
    editorPanelContainerLeft.value?.set({})
  }
  else if (leftOrRight === 'right') {
    editorPanelContainerRight.value?.set({})
  }
}

function changeName(leftOrRight: 'left' | 'right', name: string) {
  let id: string | null = null
  if (leftOrRight === 'left') {
    id = store.leftId
  }
  else if (leftOrRight === 'right') {
    id = store.rightId
  }
  if (id) {
    store.saveData({
      id,
      name,
    })
  }
}

function change(leftOrRight: 'left' | 'right', data: any) {
  let id: string | null = null
  if (leftOrRight === 'left') {
    id = store.leftId
  }
  else if (leftOrRight === 'right') {
    id = store.rightId
  }
  const tmp = {
    [leftOrRight]: true,
    content: data,
  }
  if (id) {
    tmp.id = id
  }
  store.saveData(tmp)
}

// region 最近打开相关
const showOpenRecent = ref(false)
const selectId = ref('')
const keyword = ref('')
let openRecentFlag: 'left' | 'right' | '' = ''
const dataListAfterSearch = computed(() => {
  return store.dataList(keyword.value)
})

function beforeOpenRecent(leftOrRight: 'left' | 'right') {
  selectId.value = ''
  keyword.value = ''
  openRecentFlag = leftOrRight
  showOpenRecent.value = true
}

function openRecent() {
  if (selectId.value) {
    const tmp = store.data(selectId.value)
    if (tmp && tmp.content) {
      const data = tmp.content
      if (openRecentFlag === 'left') {
        store.saveData({
          left: true,
          id: selectId.value,
        })
        if (data.json) {
          editorPanelContainerLeft.value?.set(data.json)
        }
        else if (data.text) {
          editorPanelContainerLeft.value?.set(data.text)
        }
      }
      else if (openRecentFlag === 'right') {
        store.saveData({
          right: true,
          id: selectId.value,
        })
        if (data.json) {
          editorPanelContainerRight.value?.set(data.json)
        }
        else if (data.text) {
          editorPanelContainerRight.value?.set(data.text)
        }
      }
    }
  }
  showOpenRecent.value = false
}

function open(leftOrRight: 'left' | 'right', { name, content }: { name: string, content: string }) {
  store.saveData({
    [leftOrRight]: true,
    name,
    content,
  })
  if (leftOrRight === 'left') {
    editorPanelContainerLeft.value?.set(content)
  }
  else if (leftOrRight === 'right') {
    editorPanelContainerRight.value?.set(content)
  }
}

function deleteJson(leftOrRight: 'left' | 'right') {
  const id = leftOrRight === 'left' ? store.leftId : store.rightId
  if (id) {
    store.deleteData({ id })
  }
}
// endregion

function copyRight() {
  const data = editorPanelContainerLeft.value?.get()
  if (data != null) {
    editorPanelContainerRight.value?.set(data)
  }
}

function copyLeft() {
  const data = editorPanelContainerRight.value?.get()
  if (data != null) {
    editorPanelContainerLeft.value?.set(data)
  }
}

let startX = 0
let originWidth = 0
let moved = false

// region 拖拽相关
function startDrag(e: TouchEvent | MouseEvent) {
  // 只允许左键
  if (e instanceof MouseEvent && e.button !== 0) {
    return
  }
  const dom = editorPanelContainerLeft.value?.container
  if (!dom) {
    return
  }
  moved = false
  originWidth = Number.parseFloat(window.getComputedStyle(dom).width)
  if (Number.isNaN(originWidth)) {
    originWidth = 0
  }
  if (e instanceof TouchEvent) {
    startX = e.touches[0].clientX
    document.addEventListener('touchend', endDrag)
    document.addEventListener('touchmove', dragMove)
  }
  else {
    startX = e.clientX
    document.addEventListener('mouseup', endDrag)
    document.addEventListener('mousemove', dragMove)
  }
}
function dragMove(e: TouchEvent | MouseEvent) {
  if (!editorPanel.value) {
    return
  }
  moved = true
  let clientX = 0
  if (e instanceof TouchEvent) {
    clientX = e.touches[0].clientX
  }
  else {
    clientX = e.clientX
  }
  const width = originWidth - startX + clientX
  const editorPanelWidth = Number.parseFloat(window.getComputedStyle(editorPanel.value).width)
  if (width < 435) {
    fullPanel.value = 'right'
    if (fullPanel.value !== store.fullStatus) {
      store.setFullStatus('right')
    }
  }
  else if (editorPanelWidth - 100 - width < 435) {
    fullPanel.value = 'left'
    if (fullPanel.value !== store.fullStatus) {
      store.setFullStatus('left')
    }
  }
  else {
    fullPanel.value = ''
    store.setSplitter(width / (editorPanelWidth - 100))
    if (fullPanel.value !== store.fullStatus) {
      store.setFullStatus()
    }
  }
}
function endDrag() {
  document.removeEventListener('mousemove', dragMove)
  document.removeEventListener('touchmove', dragMove)
  document.removeEventListener('mouseup', endDrag)
  document.removeEventListener('touchend', endDrag)
}
function clickDragger() {
  if (!editorPanel.value) {
    return
  }
  if (moved) {
    return
  }
  if (fullPanel.value === 'left') {
    store.setSplitter(1 - 435 / (Number.parseFloat(window.getComputedStyle(editorPanel.value).width) - 100))
    fullPanel.value = ''
  }
  else if (fullPanel.value === 'right') {
    store.setSplitter(435 / (Number.parseFloat(window.getComputedStyle(editorPanel.value).width) - 100))
    fullPanel.value = ''
  }
}
// endregion
</script>

<template>
  <div
    v-show="loading"
    v-loading="true"
    element-loading-text="同步中..."
    class="loadingPanel"
  />
  <div
    v-show="!loading"
    ref="editorPanel"
    class="editorPanel"
  >
    <VanillaJsonEditor
      ref="editorPanelContainerLeft"
      show-menu-bar
      class="editorPanelContainer editorPanelContainerLeft"
      :class="{ full: fullPanel === 'left', hide: fullPanel === 'right' }"
      :style="{ flex: `${store.splitterValue} 1 0` }"
      :name="store.leftData?.name"
      :config="{
        mode: 'text',
      }"
      @change="change('left', $event)"
      @open-recent="beforeOpenRecent('left')"
      @open="open('left', $event)"
      @create="create('left')"
      @change-name="changeName('left', $event)"
      @delete="deleteJson('left')"
    />
    <div
      class="controller noShowMobile"
      :class="{ full: fullPanel }"
    >
      <el-space
        direction="vertical"
      >
        <template v-if="!fullPanel">
          <div class="emptySpace" />
          <el-button
            type="primary"
            block
            @click="copyRight"
          >
            复制
            <span class="i-icon-park-outline-right" />
          </el-button>
          <el-button
            type="primary"
            block
            @click="copyLeft"
          >
            <span class="i-icon-park-outline-left" />
            复制
          </el-button>
        </template>
        <div
          class="drag"
          @mousedown="startDrag"
          @touchstart="startDrag"
          @click="clickDragger"
        >
          <div class="dragIcon">
            <svg
              v-if="fullPanel === 'right'"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            ><path
              fill="currentColor"
              d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
            /></svg>
            <svg
              v-else-if="fullPanel === 'left'"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            ><path
              fill="currentColor"
              d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
            /></svg>
            <svg
              v-else
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis-vertical"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
            ><path
              fill="currentColor"
              d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"
            /></svg>
          </div>
        </div>
      </el-space>
    </div>
    <VanillaJsonEditor
      ref="editorPanelContainerRight"
      show-menu-bar
      class="editorPanelContainer noShowMobile editorPanelContainerRight"
      :class="{ full: fullPanel === 'right', hide: fullPanel === 'left' }"
      :style="{ flex: `${1 - store.splitterValue} 1 0` }"
      :name="store.rightData?.name"
      :config="{
        mode: 'tree',
      }"
      @change="change('right', $event)"
      @open-recent="beforeOpenRecent('right')"
      @open="open('right', $event)"
      @create="create('right')"
      @change-name="changeName('right', $event)"
      @delete="deleteJson('right')"
    />
  </div>
  <el-dialog
    v-model="showOpenRecent"
    title="打开最近"
  >
    <a-typography-paragraph>搜索</a-typography-paragraph>
    <el-input
      v-model="keyword"
      placeholder="请输入文档名称"
    />

    <div class="data-list">
      <div
        v-for="(item) in dataListAfterSearch"
        :key="item._id"
        class="data-list-item"
        :class="{ selected: item._id === selectId }"
        @click="selectId = item._id"
      >
        <div class="data-list-item-info">
          <div class="data-list-item-info-title">
            {{ item.name }}
          </div>
          <div class="data-list-item-info-description">
            {{ `最后修改: ${item.updated}` }}
          </div>
        </div>
        <div class="data-list-item-actions">
          <el-button
            type="danger"
            @click.stop="store.deleteData({ id: item._id })"
          >
            删除
          </el-button>
        </div>
      </div>
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showOpenRecent = false">取消</el-button>
        <el-button
          type="primary"
          @click="openRecent"
        >
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.loadingPanel {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.editorPanel {
  display: flex;
  height: 100%;
  flex: 1 1;
}

.editorPanelContainer.hide {
  @media (min-width: 1024px) {
    display: none !important;
  }
}

.editorPanelContainer.full {
  @media (min-width: 1024px) {
    flex: 1 !important;
  }
}

.controller {
  height: 100%;
  width: 10rem;
  text-align: center;
  user-select: none;

  &.full {
    width: 5rem;
  }

  > :deep(.el-space) {
    width: calc(100% - 1.6rem);
    height: 100%;

    .emptySpace {
      display: block;
      width: 100%;
      height: 9.2rem;
    }

    .el-space__item {
      min-width: 100%;
    }

    .el-space__item:last-child {
      flex: 1;
    }

    .drag {
      width: 100%;
      height: 100%;
      cursor: col-resize;
      display: inline-flex;
      border-radius: .3rem;
      flex: 4 1;
      align-items: center;

      &:hover {
        background: var(--el-fill-color-dark);
      }

      .dragIcon {
        color: #a8a8a8;
        width: 100%;
        text-align: center;

        svg {
          width: 3rem;
          height: 2.4rem;
        }
      }
    }

    .diffBtn {
      padding: 4px 0.9rem;
    }
  }
}

.editorPanelContainerLeft {
  @media (max-width: 1024px) {
    flex: 1 !important;
  }
}

:deep(.jsonEditor) {
  &.jsonEditorLeft .differentElement {
    background-color: pink;

    .jsoneditor-field, .jsoneditor-value {
      color: red;
    }
  }

  &.jsonEditorRight .differentElement {
    background-color: #acee61;

    .jsoneditor-field, .jsoneditor-value {
      color: red;
    }
  }
}

.noShowMobile {
  @media (max-width: 1024px) {
    display: none !important;
  }
}

.showMobile {
  @media (min-width: 1024px) {
    display: none !important;
  }
}

.el-space {
  @media (max-width: 1024px) {
    margin-top: 1.2rem;
  }
}

.data-list {
  max-height: 50vh;
  overflow: auto;
  margin-top: .8rem;
  padding: 0 .8rem;
  border: 1px solid #dedede;

  .data-list-item {
    cursor: pointer;
    padding: 1.2rem 0;
    height: 4.8rem;
    display: flex;
    align-items: center;
    box-sizing: content-box;

    .data-list-item-info {
      height: 4.8rem;
      flex: 1;
    }

    .data-list-item-actions {
      padding-right: .8rem;
      margin-left: 4.8rem;
    }

    &.selected {
      background: var(--el-color-primary);
      color: var(--el-color-white);
    }

    &:hover {
      background: var(--el-border-color);
    }

    & + .data-list-item {
      border-top: 1px solid var(--el-border-color);
    }
  }
}

.documentProperties {
  .ant-typography-edit-content {
    left: unset;
    margin: 0;
    display: inline-block;
    width: calc(100% - 42px);
  }
}

:deep(.ant-list-item) {
  &.selected, &:hover {
    .ant-list-item-meta-title {
      color: var(--el-color-black) !important;
    }

    .ant-list-item-meta-description {
      color: var(--el-color-black) !important;
    }
  }
}
</style>
