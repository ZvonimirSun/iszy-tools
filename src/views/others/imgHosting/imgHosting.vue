<template>
  <container>
    <div class="container">
      <Tabs v-model:activeKey="activeKey" type="card" @change="changeModule">
        <TabPane key="home" tab="首页">
          <Empty/>
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
                    <Item v-for="(item1) of currentConfig" :key="item1.name" :label="item1.name"
                          :required="item1.required">
                      <Input v-model:value="item1.default" allow-clear v-if="item1.type==='input'"/>
                      <Password v-model:value="item1.default" allow-clear v-else-if="item1.type==='password'"/>
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
import { Form, Input, Tabs, Empty, Button } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
import * as uploaders from './uploader'
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
  components: {
    Container,
    Tabs,
    TabPane,
    Form,
    Item,
    Input,
    Password,
    Empty,
    Button
  },
  name: '极简图床',
  data: () => ({
    activeKey: 'home',
    currentUploader: 'aliyun',

    uploaders,
    currentConfig: []
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
      this.saveConfig({ uploader: this.currentUploader, config })
      this.$msg.success('保存成功')
    },
    async beforeUpload (file) {
      console.log(file)
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
