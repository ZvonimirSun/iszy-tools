<template>
  <div class="editorPanel" ref="editorPanel">
    <div
      class="editorPanelContainer editorPanelContainerLeft"
      :class="{full:fullPanel==='left',hide:fullPanel==='right'}"
      ref="editorPanelContainerLeft"
      :style="{flex: splitterValue + ' 1 0'}"
    >
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
    <div class="controller noShowMobile" :class="{full:fullPanel}">
      <Space direction="vertical">
        <template v-if="!fullPanel">
          <div class="emptySpace"></div>
          <Button type="primary" @click="copyRight" block>
            复制
            <Right theme="outline"/>
          </Button>
          <Button type="primary" @click="copyLeft" block>
            <Left theme="outline"/>
            复制
          </Button>
          <Checkbox :checked="diff" @change="changeDiff">对比</Checkbox>
          <Space v-if="diff">
            <Button type="primary" class="diffBtn"><Up theme="outline"/></Button>
            <Button type="primary" class="diffBtn"><Down theme="outline"/></Button>
          </Space>
        </template>
        <div class="drag" @mousedown="startDrag" @touchstart="startDrag" @click="clickDragger">
          <div class="dragIcon">
            <svg v-if="fullPanel==='right'" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
            <svg v-else-if="fullPanel==='left'" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"></path></svg>
            <svg v-else aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-vertical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path fill="currentColor" d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"></path></svg>
          </div>
        </div>
      </Space>
    </div>
    <div
      class="editorPanelContainer editorPanelContainerRight noShowMobile"
      :class="{full:fullPanel==='right',hide:fullPanel==='left'}"
      :style="{flex: (1-splitterValue) + ' 1 0'}"
    >
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
import { Right, Left, Down, Up, FileAdditionOne, FolderOpen, Save, History, Computer, LinkThree, SettingTwo, Info, Delete, IndentRight } from '@icon-park/vue-next'
import { get, isEqual, debounce, cloneDeep } from 'lodash-es'
import formatBytes from '@/utils/formatBytes.js'

const { Item: MenuItem } = Menu
const { Paragraph, Text } = Typography
const { Item: ListItem } = List
const { Meta: ListItemMeta } = ListItem
const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('jsonEditor')

let editorLeft, editorRight

let startX = 0
let originWidth = 0
let moved = false

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
    Text,
    Up
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

    currentName: '',

    diffMap: {},

    leftMode: 'code',
    rightMode: 'tree',

    fullPanel: ''
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
    ...mapState(['leftId', 'rightId', 'splitterValue', 'fullStatus']),
    ...mapGetters(['dataList', 'data', 'leftData', 'rightData'])
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.fullPanel = this.fullStatus
      editorLeft = new JSONEditor(
        this.$refs.jsonEditorLeft,
        {
          mode: 'code',
          modes: ['code', 'tree'],
          onClassName: this.onClassName,
          onChangeText: debounce((json) => {
            this.diffMap = {}
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
            this.leftMode = mode
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
            this.diffMap = {}
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
            this.rightMode = mode
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
        window.addEventListener('hashchange', this.hashChange)
      })
    },

    copyRight () {
      if (typeof this.codeLeft === 'string') {
        editorRight.setMode('code')
        editorRight.updateText(this.codeLeft)
        this.codeRight = this.codeLeft
      } else {
        if (this.leftMode === 'code') {
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
        if (this.rightMode === 'code') {
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
        if (this.leftMode === 'tree') {
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
        if (this.rightMode === 'tree') {
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
        if (this.leftMode !== 'tree' || this.rightMode !== 'tree') {
          this.$msg.warn('对比模式仅在「树」模式下生效，请切换为树模式')
        }
      }
      this.diff = !this.diff
      editorLeft.refresh()
      editorRight.refresh()
    },

    onClassName ({ path }) {
      if (this.diff && !this.fullPanel) {
        const leftValue = get(this.codeLeft, path)
        const rightValue = get(this.codeRight, path)
        if (isEqual(leftValue, rightValue)) {
          delete this.diffMap[path]
          return ''
        } else {
          this.diffMap[path] = true
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
    hashChange () {
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
    },
    startDrag (e) {
      moved = false
      originWidth = parseFloat(window.getComputedStyle(this.$refs.editorPanelContainerLeft).width)
      if (isNaN(originWidth)) {
        originWidth = 0
      }
      if (e.touches) {
        startX = e.touches[0].clientX
        document.addEventListener('touchend', this.endDrag)
        document.addEventListener('touchmove', this.dragMove)
      } else {
        startX = e.clientX
        document.addEventListener('mouseup', this.endDrag)
        document.addEventListener('mousemove', this.dragMove)
      }
    },
    dragMove (e) {
      moved = true
      let clientX = 0
      if (e.touches) {
        clientX = e.touches[0].clientX
      } else {
        clientX = e.clientX
      }
      const width = originWidth - startX + clientX
      const editorPanelWidth = parseFloat(window.getComputedStyle(this.$refs.editorPanel).width)
      if (width < 435) {
        this.fullPanel = 'right'
        if (this.fullPanel !== this.fullStatus) { this.setFullStatus('right') }
      } else if (editorPanelWidth - 100 - width < 435) {
        this.fullPanel = 'left'
        if (this.fullPanel !== this.fullStatus) { this.setFullStatus('left') }
      } else {
        this.fullPanel = ''
        this.setSplitter(width / (editorPanelWidth - 100))
        if (this.fullPanel !== this.fullStatus) {
          this.setFullStatus()
        }
      }
    },
    endDrag () {
      document.removeEventListener('mousemove', this.dragMove)
      document.removeEventListener('touchmove', this.dragMove)
      document.removeEventListener('mouseup', this.endDrag)
      document.removeEventListener('touchend', this.endDrag)
    },
    clickDragger () {
      if (moved) { return }
      if (this.fullPanel === 'left') {
        this.setSplitter(1 - 435 / (parseFloat(window.getComputedStyle(this.$refs.editorPanel).width) - 100))
        this.fullPanel = ''
      } else if (this.fullPanel === 'right') {
        this.setSplitter(435 / (parseFloat(window.getComputedStyle(this.$refs.editorPanel).width) - 100))
        this.fullPanel = ''
      }
    },
    ...mapMutations(['saveData', 'deleteData', 'setSplitter', 'setFullStatus'])
  },
  beforeUnmount () {
    if (editorLeft) {
      editorLeft.destroy()
    }
    if (editorRight) {
      editorRight.destroy()
    }
    window.removeEventListener('hashchange', this.hashChange)
  }
}
</script>

<style lang="scss" scoped>
.editorPanel {
  display: flex;
  height: 100%;
  flex: 1 1;
}

.controller {
  height: 100%;
  width: 10rem;
  text-align: center;
  user-select: none;

  &.full {
    width: 5rem;
  }

  > :deep(.ant-space) {
    width: calc(100% - 1.6rem);
    height: 100%;

    .emptySpace {
      display: block;
      width: 100%;
      height: 9.2rem;
    }

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
      cursor: col-resize;
      display: inline-flex;
      border-radius: .3rem;
      flex: 4 1;
      align-items: center;

      &:hover {
        background: #dedede;
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

.editorPanelContainer {
  height: 100%;
  display: flex;
  flex-direction: column;

  &.full {
    @media (min-width: 1024px) {
      flex: 1 !important;
    }
  }

  &.hide {
    @media (min-width: 1024px) {
      display: none !important;
    }
  }

  &Left {
    @media (max-width: 1024px) {
      flex: 1 !important;
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
