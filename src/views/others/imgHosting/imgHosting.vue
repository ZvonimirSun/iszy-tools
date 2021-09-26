<template>
  <container>
    <div class="container">
      <Tabs v-model:activeKey="activeKey" type="card" @change="changeModule" class="totalTab">
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
          <div class="imgList" v-if="imgList.length">
            <PreviewGroup>
              <Space :size="8">
                <Card v-for="(item) in imgList" :key="item.id">
                  <template #cover>
                    <Image :src="item.url" :alt="item.name" width="20rem" height="12.36rem"/>
                  </template>
                  <template class="ant-card-actions" #actions>
                    <CopyLink @click="copyImgUrl(item)"/>
                    <Delete @click="removeImage(item)"/>
                  </template>
                  <Meta :title="item.name"></Meta>
                </Card>
              </Space>
            </PreviewGroup>
          </div>
          <Empty v-else/>
        </TabPane>
        <TabPane key="settings" tab="设置">
          <div class="commonConfigPanel">
            <Form layout="vertical">
              <Item label="重命名时间戳">
                <Switch v-model:checked="currentCommonConfig.renameTimeStamp"
                        @change="saveCommonConfig(currentCommonConfig)"/>
              </Item>
            </Form>
          </div>
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
import { Form, Input, Tabs, Empty, Button, Upload, Switch, Card, Space, Image } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
import * as uploaders from './uploader'
import { cloneDeep } from 'lodash-es'
import { UploadOne, CopyLink, Delete } from '@icon-park/vue-next'

const { TabPane } = Tabs
const { Item } = Form
const { Password } = Input
const { Dragger } = Upload
const { Meta } = Card
const { PreviewGroup } = Image
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
    Switch,
    Card,
    Meta,
    Space,
    Image,
    PreviewGroup,
    UploadOne,
    CopyLink,
    Delete
  },
  name: '极简图床',
  data: () => ({
    activeKey: 'home',

    uploaders,

    currentUploader: 'aliyun',
    currentConfig: [],
    currentCommonConfig: {
      renameTimeStamp: true
    },
    fileList: []
  }),
  watch: {},
  computed: {
    ...mapGetters(['config']),
    ...mapState(['uploader', 'commonConfig', 'imgList'])
  },
  mounted () {
    if (this.uploader) {
      this.currentUploader = this.uploader
      this.changeUploader()
    }
    this.currentCommonConfig = cloneDeep(this.commonConfig || {})
  },
  methods: {
    ...mapActions(['saveConfig', 'saveCommonConfig', 'addImage', 'removeImage']),
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
        if (this.currentCommonConfig.renameTimeStamp) {
          const tmp = val.file.name || ''
          val.file = new File([val.file], ((new Date().getTime()) + tmp.substring(tmp.lastIndexOf('.'))).toLowerCase(), {
            type: val.file.type,
            lastModified: val.file.lastModified
          })
        }
        try {
          this.addImage(await uploaders[this.uploader].handle(this.config(this.uploader), val.file))
          this.$msg.success('上传成功')
          this.activeKey = 'uploaded'
        } catch (e) {
          console.log(e)
          this.$msg.error('上传失败')
        }
      } else {
        this.$msg.warn('请先进行设置')
      }
    },
    rejectFile () {
      this.$msg.warning('不支持的文件类型！')
    },

    async copyImgUrl ({ url }) {
      try {
        await navigator.clipboard.writeText(url)
        this.$msg.success('地址已复制到剪贴板')
      } catch (e) {
        this.$msg.error('复制失败')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;

  .totalTab {
    height: 100%;
  }

  ::v-deep(.ant-tabs) {
    width: 100%;

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

          }

          .configOperator {
            text-align: right;
            margin-top: .8rem;
          }
        }

        .commonConfigPanel {
          margin-bottom: .8rem;
        }

        .ant-form-item {
          margin-bottom: .8rem;

          &:last-child {
            margin-bottom: 0;
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

.imgList {
  width: 100%;
  height: 100%;
  overflow: auto;

  ::v-deep(.ant-image) {
    cursor: pointer;
  }

  ::v-deep(.ant-card-body) {
    padding: .8rem;
    width: 20rem;
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
