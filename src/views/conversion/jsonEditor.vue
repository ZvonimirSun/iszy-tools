<template>
  <div class="editorPanel">
    <div class="editorPanelContainer editorPanelContainerLeft">
      <div class="editorController editorControllerLeft">
        <div class="editorTitle">
          <Text
            :content="leftData?.name"
            :editable="leftData?.name ? {
              onStart:onEditStartLeft,
              onChange:onEditChange,
              onEnd:onEditEnd
            }:false"
          />
        </div>
        <Space class="editorControlButtons">
          <Button size="small" type="primary" @click="create('left')">
            <span class="buttonWithIcon"><FileAdditionOne theme="outline"/>&nbsp;新建</span>
          </Button>
          <Dropdown>
            <template #overlay>
              <Menu
                @click="open($event,'left')"
                :trigger="['click','hover']"
              >
                <MenuItem key="recent">
                  <span class="buttonWithIcon"><History theme="outline"/>&nbsp;打开最近记录</span>
                </MenuItem>
                <MenuItem key="file">
                  <span class="buttonWithIcon"><Computer theme="outline"/>&nbsp;打开本地文件</span>
                </MenuItem>
                <MenuItem key="url">
                  <span class="buttonWithIcon"><LinkThree theme="outline"/>&nbsp;打开URL</span>
                </MenuItem>
              </Menu>
            </template>
            <Button size="small" type="primary">
              <span class="buttonWithIcon"><FolderOpen theme="outline"/>&nbsp;打开<Down theme="outline"/></span>
            </Button>
          </Dropdown>
          <Button size="small" type="primary" @click="download('left')">
            <span class="buttonWithIcon"><Save theme="outline"/>&nbsp;保存</span>
          </Button>
          <Dropdown>
            <template #overlay>
              <Menu
                @click="changeOption($event,'left')"
                :trigger="['click','hover']"
              >
                <MenuItem key="indentation">
                  <span class="buttonWithIcon"><IndentRight theme="outline"/>&nbsp;缩进({{indent}})</span>
                </MenuItem>
                <MenuItem key="properties">
                  <span class="buttonWithIcon"><Info theme="outline"/>&nbsp;文档属性</span>
                </MenuItem>
                <MenuItem key="delete" :disabled="!Boolean(leftId)">
                  <span class="buttonWithIcon"><Delete theme="outline"/>&nbsp;删除文档</span>
                </MenuItem>
              </Menu>
            </template>
            <Button size="small" type="primary">
              <span class="buttonWithIcon"><SettingTwo theme="outline"/>&nbsp;选项<Down theme="outline"/></span>
            </Button>
          </Dropdown>
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
        <div class="drag"></div>
      </Space>
    </div>
    <div class="editorPanelContainer editorPanelContainerRight noShowMobile">
      <div class="editorController editorControllerRight">
        <div class="editorTitle">
          <Text
            :content="rightData?.name"
            :editable="rightData?.name ? {
              onStart:onEditStartRight,
              onChange:onEditChange,
              onEnd:onEditEnd
            }:false"
          />
        </div>
        <Space class="editorControlButtons">
          <Button size="small" type="primary" @click="create('right')">
            <span class="buttonWithIcon"><FileAdditionOne theme="outline"/>&nbsp;新建</span>
          </Button>
          <Dropdown>
            <template #overlay>
              <Menu
                @click="open($event,'right')"
                :trigger="['click','hover']"
              >
                <MenuItem key="recent">
                  <span class="buttonWithIcon"><History theme="outline"/>&nbsp;打开最近记录</span>
                </MenuItem>
                <MenuItem key="file">
                  <span class="buttonWithIcon"><Computer theme="outline"/>&nbsp;打开本地文件</span>
                </MenuItem>
                <MenuItem key="url">
                  <span class="buttonWithIcon"><LinkThree theme="outline"/>&nbsp;打开URL</span>
                </MenuItem>
              </Menu>
            </template>
            <Button size="small" type="primary">
              <span class="buttonWithIcon"><FolderOpen theme="outline"/>&nbsp;打开<Down theme="outline"/></span>
            </Button>
          </Dropdown>
          <Button size="small" type="primary" @click="download('right')">
            <span class="buttonWithIcon"><Save theme="outline"/>&nbsp;保存</span>
          </Button>
          <Dropdown>
            <template #overlay>
              <Menu
                @click="changeOption($event,'right')"
                :trigger="['click','hover']"
              >
                <MenuItem key="indentation">
                  <span class="buttonWithIcon"><IndentRight theme="outline"/>&nbsp;缩进({{indent}})</span>
                </MenuItem>
                <MenuItem key="properties">
                  <span class="buttonWithIcon"><Info theme="outline"/>&nbsp;文档属性</span>
                </MenuItem>
                <MenuItem key="delete" :disabled="!Boolean(rightId)">
                  <span class="buttonWithIcon"><Delete theme="outline"/>&nbsp;删除文档</span>
                </MenuItem>
              </Menu>
            </template>
            <Button size="small" type="primary">
              <span class="buttonWithIcon"><SettingTwo theme="outline"/>&nbsp;选项<Down theme="outline"/></span>
            </Button>
          </Dropdown>
        </Space>
      </div>
      <div ref="jsonEditorRight" class="jsonEditor jsonEditorRight"></div>
    </div>
  </div>
  <Modal :visible="modalStatus.type === 'openRecent'" title="打开最近" @cancel="closeModal" @ok="openRecent">
    <Paragraph>搜索</Paragraph>
    <Input v-model:value="keyword" placeholder="请输入文档名称"/>

    <List
      class="dataList"
      item-layout="horizontal"
      :data-source="dataListAfterSearch"
    >
      <template #renderItem="{ item }">
        <ListItem @click="selectId=item._id" :class="{selected: item._id === selectId}">
          <template #actions>
            <Button
              @click="deleteData({id:item._id})"
              type="primary"
              danger
            >删除</Button>
          </template>
          <ListItemMeta
            :description="'最后修改: '+item.updated"
          >
            <template #title>
              {{item.name}}
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </Modal>
  <input type="file" v-show="false" ref="uploader" @change="openFile" accept=".json,.JSON"/>
  <Modal :visible="modalStatus.type === 'openUrl'" title="打开URL" @cancel="closeModal" @ok="openUrl(url)">
    <Paragraph>不支持需要验证或开启CORS的地址</Paragraph>
    <Input v-model:value="url" placeholder="请输入URL地址"/>
  </Modal>
  <Modal :visible="modalStatus.type === 'setIndentation'" title="设置缩进" @cancel="closeModal" @ok="changeIndentation">
    <Paragraph>配置代码模式下用于缩进的空格数。 缩进同时应用于两个面板。</Paragraph>
    <Input v-model:value.number="indent"/>
  </Modal>
  <Modal :visible="modalStatus.type === 'documentProperties'" title="文档属性" @cancel="closeModal" @ok="closeModal" class="documentProperties">
    <Paragraph><strong>名称：</strong><Text
      v-show="documentProperties.name"
      :editable="{onStart:onEditStart,onChange:onEditChange,onEnd:onEditEnd}"
      :content="documentProperties.name"
    /></Paragraph>
    <Paragraph><strong>存储：</strong><Text
      v-show="documentProperties.storage"
      :content="documentProperties.storage"
    /></Paragraph>
    <Paragraph><strong>更新：</strong><Text
      v-show="documentProperties.updated"
      :content="documentProperties.updated"
    /></Paragraph>
    <Paragraph><strong>大小：</strong><Text
      v-show="documentProperties.size"
      :content="documentProperties.size"
    /></Paragraph>
  </Modal>
</template>

<script>
import { deleteParam, getParam, setParam } from '@/utils/hashHandler.js'
import { createNamespacedHelpers } from 'vuex'
/**
 * @type {Function}
 */
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import createFile from '@/utils/createFile.js'
import { Button, Space, Checkbox, Dropdown, Menu, Modal, Input, Typography, List } from 'ant-design-vue'
import { Right, Left, Down, FileAdditionOne, FolderOpen, Save, History, Computer, LinkThree, SettingTwo, Info, Delete, IndentRight } from '@icon-park/vue-next'
import { get, isEqual, debounce, cloneDeep } from 'lodash-es'
import formatBytes from '@/utils/formatBytes.js'

const { Item: MenuItem } = Menu
const { Paragraph, Text } = Typography
const { Item: ListItem } = List
const { Meta: ListItemMeta } = ListItem
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('jsonEditor')

let editorLeft, editorRight

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
    Paragraph,
    List,
    ListItem,
    ListItemMeta,
    FileAdditionOne,
    FolderOpen,
    Save,
    History,
    Computer,
    LinkThree,
    SettingTwo,
    Info,
    Delete,
    IndentRight,
    Text
  },
  data: () => ({
    codeLeft: {
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
    },
    codeRight: {},

    diff: false,

    modalStatus: {
      type: '',
      leftOrRight: ''
    },

    url: '',

    keyword: '',
    selectId: '',

    indent: 2,

    currentName: ''
  }),
  watch: {
    leftId: {
      handler: function (val) {
        this.handleHashParams('left', val)
      }
    },
    rightId: {
      handler: function (val) {
        this.handleHashParams('right', val)
      }
    }
  },
  computed: {
    dataListAfterSearch: function () {
      return this.dataList(this.keyword)
    },
    codeLeftString: function () {
      if (typeof this.codeLeft === 'string') {
        return this.codeLeft
      } else {
        return JSON.stringify(this.codeLeft, null, this.indent)
      }
    },
    codeRightString: function () {
      if (typeof this.codeRight === 'string') {
        return this.codeRight
      } else {
        return JSON.stringify(this.codeRight, null, this.indent)
      }
    },
    documentProperties: function () {
      if (this.modalStatus.leftOrRight === 'left') {
        return {
          name: this.leftData?.name,
          storage: this.leftData ? '浏览器本地' : '',
          updated: this.leftData?.updated,
          size: formatBytes(this.codeLeftString.length)
        }
      } else if (this.modalStatus.leftOrRight === 'right') {
        return {
          name: this.rightData?.name,
          storage: this.rightData ? '浏览器本地' : '',
          updated: this.rightData?.updated,
          size: formatBytes(this.codeRightString.length)
        }
      } else {
        return {}
      }
    },
    ...mapState(['leftId', 'rightId']),
    ...mapGetters(['dataList', 'data', 'leftData', 'rightData'])
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
              this.codeLeft = JSON.parse(json)
            } catch (e) {
              this.codeLeft = json
            }
            editorLeft.refresh()
            editorRight.refresh()
            this.save('left')
          }, 100),
          onModeChange: (mode) => {
            if (mode === 'code' && typeof this.codeLeft !== 'string') {
              editorLeft.updateText(this.codeLeftString)
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
              this.codeRight = JSON.parse(json)
            } catch (e) {
              this.codeRight = json
            }
            editorLeft.refresh()
            editorRight.refresh()
            this.save('right')
          }, 100),
          onModeChange: (mode) => {
            if (mode === 'code' && typeof this.codeRight !== 'string') {
              editorRight.updateText(this.codeRightString)
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
          this.codeLeft = this.leftData.content.json
          editorLeft.set(this.leftData.content.json)
          editorLeft.setMode('tree')
        } else if (this.leftData.content.text) {
          try {
            this.codeLeft = JSON.parse(this.leftData.content.text)
          } catch (e) {
            this.codeLeft = this.leftData.content.text
          }
          editorLeft.setText(this.leftData.content.text)
          editorLeft.setMode('code')
        }
      } else {
        editorLeft.set(this.codeLeft)
      }
      if (this.rightData && this.rightData.content) {
        if (this.rightData.content.json) {
          this.codeRight = this.rightData.content.json
          editorRight.set(this.rightData.content.json)
          editorRight.setMode('tree')
        } else if (this.rightData.content.text) {
          try {
            this.codeRight = JSON.parse(this.rightData.content.text)
          } catch (e) {
            this.codeRight = this.rightData.content.text
          }
          editorRight.setText(this.rightData.content.text)
          editorRight.setMode('code')
        }
      } else {
        editorRight.set(this.codeRight)
      }
      const left = getParam('left')
      const right = getParam('right')
      if (left && left !== this.leftId) {
        this.selectId = left
        this.modalStatus.leftOrRight = 'left'
        this.openRecent()
      }
      if (right && right !== this.rightId) {
        this.selectId = right
        this.modalStatus.leftOrRight = 'right'
        this.openRecent()
      }
      this.$nextTick(() => {
        this.handleHashParams('left', this.leftId)
        this.handleHashParams('right', this.rightId)
      })
    },

    copyRight () {
      if (typeof this.codeLeft === 'string') {
        editorRight.setMode('code')
        editorRight.updateText(this.codeLeft)
        this.codeRight = this.codeLeft
      } else {
        if (editorLeft.getMode === 'code') {
          editorRight.updateText(editorLeft.getText())
        } else {
          editorRight.updateText(this.codeLeftString)
        }
        this.codeRight = cloneDeep(this.codeLeft)
      }
      editorLeft.refresh()
      editorRight.refresh()
      this.save('right')
    },
    copyLeft () {
      if (typeof this.codeRight === 'string') {
        editorLeft.setMode('code')
        editorLeft.updateText(this.codeRight)
        this.codeLeft = this.codeRight
      } else {
        if (editorRight.getMode === 'code') {
          editorLeft.updateText(editorRight.getText())
        } else {
          editorLeft.updateText(this.codeRightString)
        }
        this.codeLeft = cloneDeep(this.codeRight)
      }
      editorLeft.refresh()
      editorRight.refresh()
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
        this.codeLeft = {}
        this.saveData({
          left: true
        })
      } else if (leftOrRight === 'right') {
        editorRight.set({})
        this.codeRight = {}
        this.saveData({
          right: true
        })
      }
    },
    open (e, leftOrRight) {
      this.modalStatus.leftOrRight = leftOrRight
      switch (e.key) {
        case 'recent':
          this.modalStatus.type = 'openRecent'
          break
        case 'file':
          this.$refs.uploader.click()
          break
        case 'url':
          this.modalStatus.type = 'openUrl'
          break
      }
    },
    openRecent () {
      if (this.selectId && this.data(this.selectId) && this.data(this.selectId).content) {
        const data = this.data(this.selectId).content
        if (this.modalStatus.leftOrRight === 'left') {
          this.saveData({
            left: true,
            id: this.selectId
          })
          if (data.json) {
            this.codeLeft = data.json
            editorLeft.set(data.json)
            editorLeft.setMode('tree')
          } else if (data.text) {
            try {
              this.codeLeft = JSON.parse(data.text)
            } catch (e) {
              this.codeLeft = data.text
            }
            editorLeft.setText(data.text)
            editorLeft.setMode('code')
          }
        } else if (this.modalStatus.leftOrRight === 'right') {
          this.saveData({
            right: true,
            id: this.selectId
          })
          if (data.json) {
            this.codeRight = data.json
            editorRight.set(data.json)
            editorRight.setMode('tree')
          } else if (data.text) {
            try {
              this.codeRight = JSON.parse(data.text)
            } catch (e) {
              this.codeRight = data.text
            }
            editorRight.setText(data.text)
            editorRight.setMode('code')
          }
        }
      }
      this.selectId = ''
      this.closeModal()
    },
    openFile (e) {
      if (e.target.files.length) {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = () => {
          if (reader.result) {
            this.create(this.modalStatus.leftOrRight)
            if (this.modalStatus.leftOrRight === 'left') {
              this.codeLeft = reader.result
              editorLeft.setText(reader.result)
              this.save('left')
            } else if (this.modalStatus.leftOrRight === 'right') {
              this.codeRight = reader.result
              editorRight.setText(reader.result)
              this.save('right')
            }
          }
        }
        reader.readAsText(file)
      }
      e.target.value = ''
    },
    async openUrl (url) {
      try {
        const res = (await this.$axios.get(url)).data
        if (res) {
          this.create(this.modalStatus.leftOrRight)
          if (this.modalStatus.leftOrRight === 'left') {
            this.codeLeft = res
            editorLeft.set(res)
            this.save('left')
          } else if (this.modalStatus.leftOrRight === 'right') {
            this.codeRight = res
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
    download (leftOrRight) {
      if (leftOrRight === 'left') {
        createFile(editorLeft.getText(), `${this.leftData?.name || 'left'}.json`)
      } else if (leftOrRight === 'right') {
        createFile(editorRight.getText(), `${this.rightData?.name || 'right'}.json`)
      }
    },
    changeOption (e, leftOrRight) {
      this.modalStatus.leftOrRight = leftOrRight
      switch (e.key) {
        case 'indentation':
          this.modalStatus.type = 'setIndentation'
          break
        case 'properties':
          this.modalStatus.type = 'documentProperties'
          break
        case 'delete':
          if (leftOrRight === 'left') {
            this.deleteData({ id: this.leftId })
          } else if (leftOrRight === 'right') {
            this.deleteData({ id: this.rightId })
          }
          break
      }
    },
    changeIndentation () {
      editorLeft.indentation = this.indent
      editorRight.indentation = this.indent
      if (typeof this.codeLeft === 'object') {
        editorLeft.updateText(this.codeLeftString)
      }
      if (typeof this.codeRight === 'object') {
        editorRight.updateText(this.codeRightString)
      }
      this.closeModal()
    },

    onEditStartLeft () {
      this.onEditStart('left')
    },
    onEditStartRight () {
      this.onEditStart('right')
    },
    onEditStart (leftOrRight, val) {
      this.currentName = this.documentProperties.name
      this.modalStatus.leftOrRight = leftOrRight || this.modalStatus.leftOrRight
    },
    onEditChange (val) {
      this.currentName = val
    },
    onEditEnd () {
      if (this.modalStatus.leftOrRight === 'left') {
        this.saveData({ id: this.leftId, name: this.currentName })
      } else if (this.modalStatus.leftOrRight === 'right') {
        this.saveData({ id: this.rightId, name: this.currentName })
      }
      this.currentName = ''
    },

    changeDiff () {
      if (!this.diff) {
        if (typeof this.codeLeft === 'string' || typeof this.codeRight === 'string') {
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
      const leftValue = get(this.codeLeft, path)
      const rightValue = get(this.codeRight, path)

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
    handleHashParams (leftOrRight, val) {
      if (val != null) {
        setParam(leftOrRight, val)
      } else {
        deleteParam(leftOrRight)
      }
    },
    ...mapMutations(['saveData', 'deleteData'])
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

  :deep(.ant-space) {
    margin-top: 10rem;
    width: calc(100% - 1.6rem);
    height: calc(100% - 10rem);

    .ant-btn {
      display: flex;
      align-items: center;

      .i-icon {
        font-size: 1.8rem;
      }

      .i-icon + span, span + .i-icon {
        margin-left: 0;
      }
    }

    .ant-space-item:last-child {
      flex: 1;
    }

    .drag {
      width: 100%;
      height: 100%;

      &:hover {
        background: #dedede;
      }
    }
  }
}

.editorPanelContainer {
  height: 100%;
  width: calc(50% - 5rem);
  display: flex;
  flex-direction: column;

  &Left {
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
}

.editorController {
  display: flex;
  width: 100%;
  background: #71a8ff;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  .editorTitle {
    color: white;
    padding: .8rem;
    margin-right: auto;

    .ant-typography-edit-content {
      left: unset;
      margin: 0;
      display: inline-block;
    }

    :deep(.ant-typography) {
      color: white;

      .ant-typography-edit {
        color: white;
      }
    }
  }

  .editorControlButtons {
    margin: 0 .8rem;
    height: 35px;
  }
}

.buttonWithIcon {
  display: inline-flex;
  align-items: center;
}

:deep(.jsonEditor) {
  flex: 1;
  width: 100%;
  overflow: auto;

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

.dataList {
  max-height: 50vh;
  overflow: auto;
  margin-top: .8rem;
  padding: 0 .8rem;
  border: 1px solid #dedede;

  .ant-list-item {
    cursor: pointer;

    &.selected {
      background: #dedede;
    }

    &:hover {
      background: #dedede;
    }
  }
}

:deep(.jsoneditor-poweredBy) {
  @media (max-width: 1024px) {
    display: none;
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
</style>
