<template>
  <div class="editorPanel">
    <div class="editorPanelContainer editorPanelContainerLeft">
      <div class="editorController editorControllerLeft">
        <div class="editorTitle">{{leftData?.name}}</div>
        <Space class="editorControlButtons">
          <Button size="small" type="primary" @click="create('left')">新建</Button>
          <Dropdown>
            <template #overlay>
              <Menu @click="open($event,'left')">
                <MenuItem key="recent">打开最近记录</MenuItem>
                <MenuItem key="file">打开本地文件</MenuItem>
                <MenuItem key="url">打开URL</MenuItem>
              </Menu>
            </template>
            <Button size="small" type="primary">
              <span class="buttonWithIcon">打开<Down theme="outline"/></span>
            </Button>
          </Dropdown>
          <Button size="small" type="primary" @click="download('left')">保存</Button>
        </Space>
      </div>
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
        <Checkbox :checked="diff" @change="changeDiff">对比</Checkbox>
      </Space>
    </div>
    <div class="editorPanelContainer editorPanelContainerRight noShowMobile">
      <div class="editorController editorControllerRight">
        <div class="editorTitle">{{rightData?.name}}</div>
        <Space class="editorControlButtons">
          <Button size="small" type="primary" @click="create('right')">新建</Button>
          <Dropdown>
            <template #overlay>
              <Menu @click="open($event,'right')">
                <MenuItem key="recent">打开最近记录</MenuItem>
                <MenuItem key="file">打开本地文件</MenuItem>
                <MenuItem key="url">打开URL</MenuItem>
              </Menu>
            </template>
            <Button size="small" type="primary">
              <span class="buttonWithIcon">打开<Down theme="outline"/></span>
            </Button>
          </Dropdown>
          <Button size="small" type="primary" @click="download('right')">保存</Button>
        </Space>
      </div>
      <div ref="jsonEditorRight" class="jsonEditor jsonEditorRight"></div>
    </div>
  </div>
  <Modal :visible="modalStatus.type === 'openUrl'" title="打开URL" @cancel="closeModal" @ok="openUrl(url)">
    <Paragraph>不支持需要验证或开启CORS的地址</Paragraph>
    <Input v-model:value="url"/>
  </Modal>
  <input type="file" v-show="false" ref="uploader" @change="openFile" accept=".json,.JSON"/>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
/**
 * @type {Function}
 */
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import createFile from '@/utils/createFile.js'
import { Button, Space, Checkbox, Dropdown, Menu, Modal, Input, Typography } from 'ant-design-vue'
import { Right, Left, Down } from '@icon-park/vue-next'
import { get, isEqual, debounce } from 'lodash-es'

const { Item: MenuItem } = Menu
const { Paragraph } = Typography
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('jsonEditor')

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
    Dropdown,
    Menu,
    MenuItem,
    Down,
    Modal,
    Input,
    Paragraph
  },
  data: () => ({
    diff: false,

    modalStatus: {
      type: '',
      leftOrRight: ''
    },

    url: ''
  }),
  computed: {
    ...mapState(['leftId', 'rightId']),
    ...mapGetters(['data', 'leftData', 'rightData'])
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
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
            this.save('left')
          }, 100),
          onModeChange: (mode) => {
            if (mode === 'code' && typeof codeLeft !== 'string') {
              editorLeft.updateText(JSON.stringify(codeLeft, null, 2))
            }
            this.save('left')
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
            } catch (e) {
              codeRight = json
            }
            editorLeft.refresh()
            editorRight.refresh()
            this.save('right')
          }, 100),
          onModeChange: (mode) => {
            if (mode === 'code' && typeof codeRight !== 'string') {
              editorRight.updateText(JSON.stringify(codeRight, null, 2))
            }
            this.save('right')
          },
          onError: (e) => {
            this.$msg.error(e.message)
          }
        }
      )
      if (this.leftData && this.leftData.content) {
        if (this.leftData.content.json) {
          codeLeft = this.leftData.content.json
          editorLeft.set(this.leftData.content.json)
          editorLeft.setMode('tree')
        } else if (this.leftData.content.text) {
          try {
            codeLeft = JSON.parse(this.leftData.content.text)
          } catch (e) {
            codeLeft = this.leftData.content.text
          }
          editorLeft.setText(this.leftData.content.text)
          editorLeft.setMode('code')
        }
      } else {
        editorLeft.set(codeLeft)
      }
      if (this.rightData && this.rightData.content) {
        if (this.rightData.content.json) {
          codeRight = this.rightData.content.json
          editorRight.set(this.rightData.content.json)
          editorRight.setMode('tree')
        } else if (this.rightData.content.text) {
          try {
            codeRight = JSON.parse(this.rightData.content.text)
          } catch (e) {
            codeRight = this.rightData.content.text
          }
          editorRight.setText(this.rightData.content.text)
          editorRight.setMode('code')
        }
      } else {
        editorRight.set(codeRight)
      }
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
      this.save('right')
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
      this.save('left')
    },
    save (leftOrRight) {
      if (!leftOrRight || leftOrRight === 'left') {
        if (editorLeft.getMode() === 'tree') {
          this.saveData({
            left: true,
            id: this.leftId,
            content: editorLeft.get()
          })
        } else {
          this.saveData({
            left: true,
            id: this.leftId,
            content: editorLeft.getText()
          })
        }
      }
      if (!leftOrRight || leftOrRight === 'right') {
        if (editorRight.getMode() === 'tree') {
          this.saveData({
            right: true,
            id: this.rightId,
            content: editorRight.get()
          })
        } else {
          this.saveData({
            right: true,
            id: this.rightId,
            content: editorRight.getText()
          })
        }
      }
    },
    create (leftOrRight) {
      if (leftOrRight === 'left') {
        editorLeft.set({})
        codeLeft = {}
        this.saveData({
          left: true
        })
      } else if (leftOrRight === 'right') {
        editorRight.set({})
        codeRight = {}
        this.saveData({
          right: true
        })
      }
    },
    open (e, leftOrRight) {
      this.modalStatus.leftOrRight = leftOrRight
      switch (e.key) {
        case 'recent':
          this.$msg.info('正在建设中')
          break
        case 'file':
          this.$refs.uploader.click()
          break
        case 'url':
          this.modalStatus.type = 'openUrl'
          break
      }
    },
    async openUrl (url) {
      try {
        const res = (await this.$axios.get(url)).data
        if (res) {
          this.create(this.modalStatus.leftOrRight)
          if (this.modalStatus.leftOrRight === 'left') {
            codeLeft = res
            editorLeft.set(res)
            this.save('left')
          } else if (this.modalStatus.leftOrRight === 'right') {
            codeRight = res
            editorRight.set(res)
            this.save('right')
          }
          this.url = ''
          this.closeModal()
        }
      } catch (e) {
        this.$msg.error(e.message)
      }
    },
    openFile (e) {
      if (e.target.files.length) {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = () => {
          if (reader.result) {
            if (this.modalStatus.leftOrRight === 'left') {
              codeLeft = reader.result
              editorLeft.setText(reader.result)
              this.save('left')
            } else if (this.modalStatus.leftOrRight === 'right') {
              codeRight = reader.result
              editorRight.setText(reader.result)
              this.save('right')
            }
          }
        }
        reader.readAsText(file)
      }
    },
    download (leftOrRight) {
      if (leftOrRight === 'left') {
        createFile(editorLeft.getText(), `${this.leftData?.name || 'left'}.json`)
      } else if (leftOrRight === 'right') {
        createFile(editorRight.getText(), `${this.rightData?.name || 'right'}.json`)
      }
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
    closeModal () {
      this.modalStatus.type = ''
      this.modalStatus.leftOrRight = ''
    },
    ...mapMutations(['saveData'])
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

.editorController {
  display: inline-flex;
  width: 100%;
  height: 35px;
  background: #71a8ff;
  align-items: center;
  justify-content: space-between;

  .editorTitle {
    color: white;
    padding: .8rem;
  }

  .editorControlButtons {
    margin: 0 .8rem;
    height: 100%;
  }
}

.buttonWithIcon {
  display: inline-flex;
  align-items: center;
}

:deep(.jsonEditor) {
  height: calc(100% - 35px);
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
  @media (max-width: 1024px) {
    display: none;
  }
}
</style>
