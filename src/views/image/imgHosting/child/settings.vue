<template>
  <Title :level="4">
    通用配置
  </Title>
  <div class="commonConfigPanel">
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
    <Title :level="5">
      链接复制格式
    </Title>
    <Space>
      <Radio
        :style="radioStyle"
        :checked="currentCommonConfig.customCopyContent==='$url'"
        @change="updateCustomCopyContent('$url')"
      >
        标准<Text
          code
          content="$url"
        />
      </Radio>
      <Radio
        :style="radioStyle"
        :checked="currentCommonConfig.customCopyContent==='![]($url)'"
        @change="updateCustomCopyContent('![]($url)')"
      >
        MarkDown<Text
          code
          content="![]($url)"
        />
      </Radio>
      <Radio
        :style="radioStyle"
        :checked="currentCommonConfig.customCopyContent===customContent"
        @change="updateCustomCopyContent(customContent)"
      >
        自定义<Input
          v-model:value="customContent"
          style="width: 100px; margin-left: 10px"
          @change="updateCustomCopyContent($event.target.value)"
        />
      </Radio>
    </Space>
  </div>
  <Divider />
  <Title :level="4">
    图床设置
  </Title>
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
import { Form, Input, Tabs, Button, Switch, Typography, Divider, Space, Radio } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
import * as uploaders from '../uploader/index.js'
import { cloneDeep, debounce, merge } from 'lodash-es'

const { Title, Text } = Typography
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
    Divider,
    Space,
    Radio,
    Title,
    Text
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
    },

    radioStyle: {
      display: 'flex',
      height: '32px',
      lineHeight: '32px'
    },

    customContent: '$url'
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
    if (this.currentCommonConfig.customCopyContent !== '$url' && this.currentCommonConfig.customCopyContent !== '![]($url)') {
      this.customContent = this.currentCommonConfig.customCopyContent
    }
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
    updateConfig: debounce(function () {
      this.saveCommonConfig(this.currentCommonConfig)
    }, 100),
    updateCustomCopyContent (val) {
      this.currentCommonConfig.customCopyContent = val
      this.updateConfig()
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
