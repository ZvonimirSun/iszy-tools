<template>
  <Typography>
    <h4>通用配置</h4>
  </Typography>
  <div class="commonConfigPanel">
    <Space layout="inline">
      <!--      <Item label="上传前重命名">-->
      <!--        <Switch v-model:checked="currentCommonConfig.renameBeforeUpload"-->
      <!--                @change="saveCommonConfig(currentCommonConfig)"/>-->
      <!--      </Item>-->
      <Item label="时间戳重命名">
        <Switch
          v-model:checked="currentCommonConfig.renameTimeStamp"
          @change="updateConfig"
        />
      </Item>
      <Item label="上传后自动复制URL">
        <Switch
          v-model:checked="currentCommonConfig.copyUrlAfterUpload"
          @change="updateConfig"
        />
      </Item>
      <Item label="自定义复制内容">
        <Input
          v-model:value="currentCommonConfig.customCopyContent"
          @change="updateConfig"
        />
      </Item>
    </Space>
  </div>
  <Divider />
  <Typography>
    <h4>图床设置</h4>
  </Typography>
  <Tabs
    v-model:activeKey="currentUploader"
    type="card"
    @change="changeUploader"
  >
    <TabPane
      v-for="(item,name) of uploaders"
      :key="name"
      :tab="item.name"
    >
      <div class="configPanel">
        <div class="configTable">
          <Form
            v-if="currentUploader === name"
            layout="vertical"
          >
            <Item
              v-for="(item1) of currentConfig"
              :key="item1.name"
              :label="item1.label"
              :required="item1.required"
            >
              <Input
                v-if="item1.type==='input'"
                v-model:value="item1.default"
                allow-clear
                :placeholder="item1.hint"
              />
              <Password
                v-else-if="item1.type==='password'"
                v-model:value="item1.default"
                allow-clear
                :placeholder="item1.hint"
              />
            </Item>
          </Form>
        </div>
        <div class="configOperator">
          <Button
            type="primary"
            @click="save"
          >
            保存
          </Button>
        </div>
      </div>
    </TabPane>
  </Tabs>
</template>

<script>
import { Form, Input, Tabs, Button, Switch, Typography, Divider, Space } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
import * as uploaders from '../uploader/index.js'
import { cloneDeep, debounce, merge } from 'lodash-es'

const { TabPane } = Tabs
const { Item } = Form
const { Password } = Input
const {
  mapGetters,
  mapActions
} = createNamespacedHelpers('imgHosting')

export default {
  name: 'ImgHostingSettings',
  components: {
    Tabs,
    TabPane,
    Form,
    Item,
    Input,
    Password,
    Button,
    Switch,
    Typography,
    Divider,
    Space
  },
  data: () => ({
    uploaders,

    currentUploader: 'aliyun',
    currentConfig: [],
    currentCommonConfig: {
      renameBeforeUpload: false,
      renameTimeStamp: true,
      copyUrlAfterUpload: true,
      customCopyContent: '$url'
    }
  }),
  computed: {
    ...mapGetters(['config', 'uploader', 'commonConfig'])
  },
  mounted () {
    if (this.uploader) {
      this.currentUploader = this.uploader
    }
    this.changeUploader()
    this.currentCommonConfig = merge(this.currentCommonConfig, cloneDeep(this.commonConfig || {}))
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
    handler () {
      this.$refs.file.click()
    },
    updateConfig () {
      debounce(() => {
        this.saveCommonConfig(this.currentCommonConfig)
      }, 100)()
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

.commonConfigPanel {
  .ant-space {
    flex-wrap: wrap;
  }
}

.ant-form-item {
  margin-bottom: .8rem;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
