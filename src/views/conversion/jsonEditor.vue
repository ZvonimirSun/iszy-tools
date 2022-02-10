<template>
  <div class="editorPanel">
    <div class="editorPanelContainer editorPanelContainerLeft">
      <div ref="jsonEditorLeft" class="jsonEditor jsonEditorLeft"></div>
    </div>
    <div class="controller noShowMobile">
      <Space direction="vertical">
        <Button type="primary" @click="copyRight" block>
          复制
          <Right theme="outline"/>
        </Button>
        <Button type="primary" @click="copyLeft" block>
          <Left theme="outline"/>
          复制
        </Button>
        <Button type="primary" @click="download" block>
          <CodeDownload theme="outline"/>
          下载
        </Button>
        <Checkbox :checked="diff" @change="changeDiff">对比</Checkbox>
      </Space>
    </div>
    <div class="editorPanelContainer editorPanelContainerRight noShowMobile">
      <div ref="jsonEditorRight" class="jsonEditor jsonEditorRight"></div>
    </div>
  </div>
  <Space class="showMobile" align="center">
    <Button type="primary" @click="download">
      下载
    </Button>
  </Space>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
/**
 * @type {Function}
 */
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import createFile from '@/utils/createFile.js'
import { Button, Space, Checkbox } from 'ant-design-vue'
import { Right, Left, CodeDownload } from '@icon-park/vue-next'
import { get, isEqual, debounce } from 'lodash-es'

let editorLeft, editorRight
let codeLeft = {
  array: [
    1,
    2,
    3
  ],
  boolean: true,
  color: 'gold',
  null: null,
  number: 123,
  object: {
    a: 'b',
    c: 'd'
  },
  string: 'Hello World'
}
let codeRight = {}

export default {
  name: 'JsonEditor',
  components: {
    Button,
    Space,
    Checkbox,
    Right,
    Left,
    CodeDownload
  },
  data: () => ({
    diff: false
  }),
  computed: {
    ...mapGetters(['getData'])
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let tmpLeft, tmpRight
      if (this.getData('jsonEditor')) {
        if (this.getData('jsonEditor').left) {
          tmpLeft = this.getData('jsonEditor').left
          try {
            if (typeof tmpLeft === 'string') {
              codeLeft = JSON.parse(tmpLeft)
            } else {
              codeLeft = tmpLeft
            }
            tmpLeft = JSON.stringify(codeLeft, null, 2)
          } catch (e) {
            codeLeft = tmpLeft
          }
        }
        if (this.getData('jsonEditor').right) {
          tmpRight = this.getData('jsonEditor').right
          try {
            if (typeof tmpRight === 'string') {
              codeRight = JSON.parse(tmpRight)
            } else {
              codeRight = tmpRight
            }
            tmpRight = JSON.stringify(codeRight, null, 2)
          } catch (e) {
            codeRight = tmpRight
          }
        }
      }
      editorLeft = new JSONEditor(
        this.$refs.jsonEditorLeft,
        {
          mode: 'code',
          modes: ['code', 'tree'],
          onClassName: this.onClassName,
          onChangeText: debounce((json) => {
            try {
              codeLeft = JSON.parse(json)
            } catch (e) {
              codeLeft = json
            }
            editorLeft.refresh()
            editorRight.refresh()
            this.save()
          }, 500),
          onModeChange: (mode) => {
            if (mode === 'code' && typeof codeLeft !== 'string') {
              editorLeft.updateText(JSON.stringify(codeLeft, null, 2))
            }
          },
          onError: (e) => {
            this.$msg.error(e.message)
          }
        }
      )
      editorRight = new JSONEditor(
        this.$refs.jsonEditorRight,
        {
          mode: 'tree',
          modes: ['code', 'tree'],
          onClassName: this.onClassName,
          onChangeText: debounce((json) => {
            try {
              codeRight = JSON.parse(json)
              editorLeft.refresh()
              editorRight.refresh()
            } catch (e) {
              codeRight = json
            }
            this.save()
          }, 500),
          onModeChange: (mode) => {
            if (mode === 'code' && typeof codeRight !== 'string') {
              editorRight.updateText(JSON.stringify(codeRight, null, 2))
            }
          },
          onError: (e) => {
            this.$msg.error(e.message)
          }
        }
      )
      if (typeof codeLeft === 'string') {
        editorLeft.setMode('code')
      }
      if (typeof codeRight === 'string') {
        editorRight.setMode('code')
      }
      editorLeft.setText(tmpLeft)
      editorRight.setText(tmpRight)
    },

    copyRight () {
      const content = editorLeft.getText()
      let tmp
      try {
        tmp = JSON.parse(content)
        editorRight.updateText(JSON.stringify(tmp, null, 2))
      } catch (e) {
        editorRight.setMode('code')
        editorRight.updateText(content)
      }
      editorLeft.refresh()
      editorRight.refresh()
      codeRight = tmp || codeLeft
      this.save()
    },
    copyLeft () {
      const content = editorRight.getText()
      let tmp
      try {
        tmp = JSON.parse(content)
        editorLeft.updateText(JSON.stringify(tmp, null, 2))
      } catch (e) {
        editorLeft.setMode('code')
        editorLeft.updateText(content)
      }
      editorLeft.refresh()
      editorRight.refresh()
      codeLeft = tmp || codeRight
      this.save()
    },
    save () {
      this.setData({
        key: 'jsonEditor',
        val: {
          left: editorLeft.getText(),
          right: editorRight.getText()
        }
      })
    },
    download () {
      createFile(editorLeft.getText(), 'left.json')
    },
    changeDiff () {
      if (!this.diff) {
        if (typeof codeLeft === 'string' || typeof codeRight === 'string') {
          this.$msg.error('JSON存在错误')
          return
        }
        if (editorLeft.getMode() !== 'tree' || editorRight.getMode() !== 'tree') {
          this.$msg.warn('对比模式仅在「树」模式下生效，请切换为树模式')
        }
      }
      this.diff = !this.diff
      editorLeft.refresh()
      editorRight.refresh()
    },

    onClassName ({ path }) {
      const leftValue = get(codeLeft, path)
      const rightValue = get(codeRight, path)

      if (this.diff) {
        if (isEqual(leftValue, rightValue)) {
          return ''
        } else {
          return 'differentElement'
        }
      } else {
        return ''
      }
    },
    ...mapMutations(['setData'])
  },
  beforeUnmount () {
    if (editorLeft) {
      editorLeft.destroy()
    }
    if (editorRight) {
      editorRight.destroy()
    }
  }
}
</script>

<style lang="scss" scoped>
.editorPanel {
  display: flex;
  height: 100%;

  @media (max-width: 1024px) {
    height: calc(100% - 32px - 1.2rem);
  }
}

.controller {
  height: 100%;
  width: 10rem;
  text-align: center;

  .ant-space {
    margin-top: 10rem;
    width: 80%;

    :deep(.ant-btn) {
      display: flex;
      align-items: center;

      .i-icon {
        font-size: 1.8rem;
      }

      .i-icon + span, span + .i-icon {
        margin-left: 0;
      }
    }
  }
}

.editorPanelContainer {
  height: 100%;
  width: calc(50% - 5rem);

  &Left {
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
}

:deep(.jsonEditor) {
  height: 100%;
  width: 100%;

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

.ant-space {
  @media (max-width: 1024px) {
    margin-top: 1.2rem;
  }
}

:deep(.jsoneditor-poweredBy) {
  display: none;
}
</style>
