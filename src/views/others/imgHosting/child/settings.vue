<template>
  <Space :size="8">
    <Button type="primary" @click="exportAll">导出所有</Button>
    <Popconfirm @confirm="handler" title="是否导入所有配置？将会完全覆盖此功能记录" ok-text="是" cancel-text="否"
                :getPopupContainer="getPopupContainer">
      <Button type="primary">导入所有</Button>
    </Popconfirm>
    <input type="file" v-show="false" ref="file" @click="e => {e.target.value = '';}" @change="importAll"/>
  </Space>
  <Divider/>
  <div class="commonConfigPanel">
    <Typography>
      <h4>通用配置</h4>
    </Typography>
    <Form layout="vertical">
      <Item label="重命名时间戳">
        <Switch v-model:checked="currentCommonConfig.renameTimeStamp"
                @change="saveCommonConfig(currentCommonConfig)"/>
      </Item>
    </Form>
  </div>
  <Divider/>
  <Tabs v-model:activeKey="currentUploader" type="card" @change="changeUploader">
    <TabPane v-for="(item,name) of uploaders" :key="name" :tab="item.name">
      <div class="configPanel">
        <div class="configTable">
          <Form layout="vertical" v-if="currentUploader === name">
            <Item v-for="(item1) of currentConfig" :key="item1.name" :label="item1.label"
                  :required="item1.required">
              <Input v-model:value="item1.default" allow-clear v-if="item1.type==='input'"
                     :placeholder="item1.hint"/>
              <Password v-model:value="item1.default" allow-clear v-else-if="item1.type==='password'"
                        :placeholder="item1.hint"/>
            </Item>
          </Form>
        </div>
        <div class="configOperator">
          <Button type="primary" @click="save">保存</Button>
        </div>
      </div>
    </TabPane>
  </Tabs>
</template>

<script>
import createFile from '@/utils/createFile.js'
import { Form, Input, Tabs, Button, Switch, Space, Typography, Divider, Popconfirm } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
import * as uploaders from '../uploader'
import { cloneDeep } from 'lodash-es'

const { TabPane } = Tabs
const { Item } = Form
const { Password } = Input
const {
  mapGetters,
  mapState,
  mapActions
} = createNamespacedHelpers('imgHosting')

export default {
  name: 'settings',
  components: {
    Tabs,
    TabPane,
    Form,
    Item,
    Input,
    Password,
    Button,
    Switch,
    Space,
    Typography,
    Divider,
    Popconfirm
  },
  data: () => ({
    uploaders,

    currentUploader: 'aliyun',
    currentConfig: [],
    currentCommonConfig: {
      renameTimeStamp: true
    }
  }),
  computed: {
    ...mapGetters(['config']),
    ...mapState(['uploader', 'commonConfig'])
  },
  mounted () {
    if (this.uploader) {
      this.currentUploader = this.uploader
    }
    this.changeUploader()
    this.currentCommonConfig = cloneDeep(this.commonConfig || {})
  },
  methods: {
    ...mapActions(['saveConfig', 'saveCommonConfig', 'importConfig']),
    changeUploader () {
      this.currentConfig = cloneDeep(uploaders[this.currentUploader].config(this.config(this.currentUploader)))
    },
    save () {
      const config = {}
      for (const c of this.currentConfig) {
        if (c.required && (c.default == null || c.default === '')) {
          this.$msg.warn('必填项未填写完整')
          return
        }
        config[c.name] = c.default
      }
      this.saveConfig({
        uploader: this.currentUploader,
        config
      })
      this.$msg.success('保存成功')
    },

    exportAll () {
      const allConfig = JSON.stringify(this.$store.state.imgHosting)
      createFile(allConfig, 'allConfig.json')
    },
    importAll () {
      if (!this.$refs.file.value || !this.$refs.file.files || !this.$refs.file.files.length) {
        return
      }
      const file = this.$refs.file.files[0]
      if (file.type === 'application/json' || file.type === 'text/plain') {
        const reader = new FileReader()
        reader.onload = async () => {
          if (reader.result) {
            try {
              const allConfig = JSON.parse(reader.result)
              await this.importConfig(allConfig)
              this.$msg.success('导入成功')
            } catch (e) {
              this.$msg.error('导入失败')
            }
          }
        }
        reader.readAsText(file)
      }
    },
    handler () {
      this.$refs.file.click()
    },

    getPopupContainer () {
      return document.body
    }
  }
}
</script>

<style scoped lang="scss">
.ant-divider {
  margin: .8rem 0;
}

.configPanel {

  .configOperator {
    text-align: right;
    margin-top: .8rem;
  }
}

.ant-form-item {
  margin-bottom: .8rem;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
