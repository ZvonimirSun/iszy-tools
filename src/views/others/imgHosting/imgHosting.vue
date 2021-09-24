<template>
  <container>
    <div class="container">
      <Tabs v-model:activeKey="activeKey" type="card" @change="changeModule">
        <TabPane key="home" tab="首页">
          <Dragger v-model:fileList="fileList" accept="image/bmp,image/gif,image/jpeg,image/png,image/webp"
                   @reject="rejectFile" :showUploadList="false" :customRequest="customRequest">
            <p class="ant-upload-drag-icon">
              <UploadOne/>
            </p>
            <p class="ant-upload-text">拖拽图片到这里上传<br/>或者点击选择文件上传</p>
            <p class="ant-upload-hint">
              暂时仅支持单文件上传。
            </p>
          </Dragger>
        </TabPane>
        <TabPane key="uploaded" tab="我的上传">
          <Empty/>
        </TabPane>
        <TabPane key="settings" tab="设置">
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
        </TabPane>
      </Tabs>
    </div>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import { Form, Input, Tabs, Empty, Button, Upload } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
import * as uploaders from './uploader'
import { cloneDeep } from 'lodash-es'
import { UploadOne } from '@icon-park/vue-next'

const { TabPane } = Tabs
const { Item } = Form
const { Password } = Input
const { Dragger } = Upload
const {
  mapGetters,
  mapState,
  mapActions
} = createNamespacedHelpers('imgHosting')

export default {
  components: {
    Container,
    Tabs,
    TabPane,
    Form,
    Item,
    Input,
    Password,
    Empty,
    Button,
    Dragger,
    UploadOne
  },
  name: '极简图床',
  data: () => ({
    activeKey: 'home',

    uploaders,

    currentUploader: 'aliyun',
    currentConfig: [],
    fileList: []
  }),
  watch: {},
  computed: {
    ...mapGetters(['config']),
    ...mapState(['uploader'])
  },
  mounted () {
    if (this.uploader) {
      this.currentUploader = this.uploader
      this.changeUploader()
    }
  },
  methods: {
    ...mapActions(['saveConfig']),
    changeModule (activeKey) {
      if (activeKey === 'settings') {
        this.changeUploader()
      }
    },
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
    async customRequest (val) {
      if (this.uploader && this.config(this.uploader)) {
        uploaders[this.uploader].handle(this.config(this.uploader), val.file)
      } else {
        this.$msg.warn('请先进行设置')
      }
    },
    rejectFile () {
      this.$msg.warning('不支持的文件类型！')
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;

  ::v-deep(.ant-tabs) {
    width: 100%;
    height: 100%;

    .ant-tabs-bar {
      height: 4rem;
      margin-bottom: .8rem;
    }

    .ant-tabs-content {
      width: 100%;
      height: calc(100% - 4.8rem);

      .ant-tabs-tabpane {
        width: 100%;
        height: 100%;
        overflow: auto;

        &.ant-tabs-tabpane-inactive {
          display: none;
        }

        .configPanel {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;

          .configTable {
            flex: 1;
            overflow: auto;

            .ant-form-item {
              margin-bottom: .8rem;

              &:last-child {
                margin-bottom: 0;
              }
            }
          }

          .configOperator {
            text-align: right;
            margin-top: .8rem;
          }
        }
      }
    }
  }

  .ant-upload-drag-icon {
    .i-icon {
      font-size: 4.8rem;
    }
  }
}

.imgUploaderContent {
  user-select: none;
  height: 25rem;
  padding-top: 7.8rem;
}

.ant-upload {
  cursor: pointer;
}
</style>
