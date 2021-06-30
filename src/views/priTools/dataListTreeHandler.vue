<template>
  <container>
    <Group>
      <Upload :showUploadList="false" :beforeUpload="upload">
        <Button type="primary">
          <UploadOutlined/>
          上传
        </Button>
      </Upload>
      <Button @click="handler">
        <ToolOutlined/>
        处理
      </Button>
      <Button @click="download">
        <DownloadOutlined/>
        下载
      </Button>
    </Group>
    <div ref="jsonEditor" class="jsonEditor"></div>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import createFile from '@/utils/createFile.js'
import { markRaw } from 'vue'
import { Button, Upload } from 'ant-design-vue'
import { UploadOutlined, DownloadOutlined, ToolOutlined } from '@ant-design/icons-vue'
import { cloneDeep } from 'lodash'

const { Group } = Button

export default {
  name: 'dataListTreeHandler',
  components: {
    Container,
    Button,
    Group,
    Upload,
    UploadOutlined,
    DownloadOutlined,
    ToolOutlined
  },
  data: () => ({
    editor: null,
    code: undefined,
    loading: true
  }),
  mounted () {
    this.init()
  },
  methods: {
    // 初始化jsonEditor
    init () {
      this.editor = markRaw(new JSONEditor(
        this.$refs.jsonEditor,
        {
          mode: 'code',
          modes: ['code', 'tree', 'view'],
          onChange: () => {
            try {
              this.code = this.editor.get()
            } catch (e) {
            }
          }
        }
      ))
    },
    // 上传配置文件
    upload (e) {
      const reader = new FileReader()
      reader.readAsText(e, 'UTF-8')
      reader.onload = (e) => {
        try {
          this.code = JSON.parse(e.target.result)
          this.editor.set(this.code)
        } catch (e) {
        }
      }
      return false
    },
    // 下载配置文件
    download () {
      createFile(this.editor.getText(), 'data.json')
    },
    // 处理配置文件
    async handler () {
      if (this.code && Array.isArray(this.code.layerList) && this.code.layerList.length > 0) {
        this.loading = true
        const config = cloneDeep(this.code)
        for (const layer of config.layerList) {
          await this.checkLayer(layer)
        }
        this.code = config
        this.editor.set(this.code)
        this.loading = false
      }
    },

    // 遍历资源树，处理图层
    async checkLayer (layer) {
      if (layer.type === 'dir') {
        if (layer.children) {
          for (const item of layer.children) {
            await this.checkLayer(item)
          }
        }
      } else {
        await this.addIdentifyConfig(layer)
      }
    },
    // 添加属性识别相关配置
    async addIdentifyConfig (layer) {
      if (layer.serviceConfig && layer.serviceConfig.identify) {
        if (layer.serviceConfig.type && layer.serviceConfig.type.data) {
          layer.serviceConfig.identify.data = layer.serviceConfig.identify.data || []
          switch (layer.serviceConfig.type.data) {
            case 'supermap_rest':
            case 'supermap_tile': {
              const dataUrl = layer.serviceConfig.relevantUrls && Array.isArray(layer.serviceConfig.relevantUrls.data) ? layer.serviceConfig.relevantUrls.data.find(i => i.itemKey === 'dataUrl') : ''
              if (dataUrl) {
                for (const item of layer.serviceConfig.identify.data) {
                  if (!(Array.isArray(item.resultMapping) && item.resultMapping.length > 0)) {
                    await this.handleSupermapService(item, dataUrl.itemValue, item.datasetName)
                  }
                }
              }
              break
            }
            case 'arcgis_rest':
            case 'arcgis_tile': {
              const url = layer.serviceConfig.url.data
              for (const item of layer.serviceConfig.identify.data) {
                if (!(Array.isArray(item.resultMapping) && item.resultMapping.length > 0)) {
                  await this.handleArcgisService(item, url, item.layerId)
                }
              }
              break
            }
            default:
              break
          }
        }
      }
    },

    // 处理超图服务
    async handleSupermapService (layer, url, dataSet) {
      try {
        const fields = []
        const postData = {
          datasetNames: [dataSet],
          getFeatureMode: 'ID',
          ids: [1],
          hasGeometry: false
        }
        const postUrl = url + (url.endsWith('/') ? '' : '/') + 'data/featureResults.json?returnContent=true'
        const result = (await this.$axios.post(postUrl, postData)).data
        for (const fieldName of result.features[0].fieldNames) {
          fields.push({
            label: fieldName,
            value: fieldName
          })
        }
        layer.resultMapping = fields
        layer.title = layer.title || {
          field: fields[0].value,
          isTemplet: false,
          remark: ''
        }
      } catch (e) {
        console.log(e)
      }
    },
    // 处理ArcGIS服务
    async handleArcgisService (layer, url, layerID) {
      try {
        const fields = []
        layerID = parseInt(layerID)
        const result = (await this.$axios.get(url + (url.endsWith('/') ? '' : '/') + layerID, { params: { f: 'json' } })).data
        const fieldInfos = result.fields
        for (const field of fieldInfos) {
          fields.push({
            label: field.alias || field.name,
            value: field.name
          })
        }
        layer.layerName = layer.layerName || result.name
        layer.resultMapping = fields
        layer.title = layer.title || {
          field: fields[0].value,
          isTemplet: false,
          remark: ''
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  beforeUnmount () {
    if (this.editor) {
      this.editor.destroy()
    }
  }
}
</script>

<style scoped lang="scss">
.jsonEditor {
  height: calc(100vh - 36.3rem);

  .ace-jsoneditor *, textarea.jsoneditor-text * {
    font-family: JetBrains Mono, monospace;
  }
}

.ant-btn-group {
  margin-bottom: .8rem;
}

::v-deep(.jsoneditor-poweredBy) {
  display: none;
}
</style>
