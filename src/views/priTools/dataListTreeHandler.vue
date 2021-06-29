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
    code: undefined
  }),
  mounted () {
    this.init()
  },
  methods: {
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
    download () {
      createFile(this.editor.getText(), 'data.json')
    },
    handler () {
      if (this.code && Array.isArray(this.code.layerList) && this.code.layerList.length > 0) {
        const config = cloneDeep(this.code)
        for (const layer of config.layerList) {
          this.handleLayer(layer)
        }
        this.code = config
        this.editor.set(this.code)
      }
    },

    handleLayer (layer) {
      if (layer.type === 'dir' && layer.children) {
        layer.children.forEach(item => {
          this.handleLayer(item)
        })
      } else {
        this.addIdentifyConfig(layer)
      }
    },
    async addIdentifyConfig (layer) {
      if (layer.serviceConfig && layer.serviceConfig.identify) {
        if (layer.serviceConfig.type && layer.serviceConfig.type.data) {
          layer.serviceConfig.identify.data = layer.serviceConfig.identify.data || []
          switch (layer.serviceConfig.type.data) {
            case 'arcgis_rest':
            case 'arcgis_tile': {
              const url = layer.serviceConfig.url.data
              for (const item of layer.serviceConfig.identify.data) {
                item.resultMapping = await this.getFieldFromeArcgisService(url, item.layerId)
              }
              break
            }
            case 'supermap_rest':
            case 'supermap_tile': {
              const dataUrl = layer.serviceConfig.relevantUrls && Array.isArray(layer.serviceConfig.relevantUrls.data) ? layer.serviceConfig.relevantUrls.data.find(i => i.itemKey === 'dataUrl') : ''
              if (dataUrl) {
                for (const item of layer.serviceConfig.identify.data) {
                  item.resultMapping = await this.getFieldFromSupermapService(dataUrl.itemValue, item.datasetName)
                }
              }
              break
            }
          }
        }
      }
    },

    async getFieldFromSupermapService (url, dataSet) {
      const fields = []
      const postData = {
        datasetNames: [dataSet],
        getFeatureMode: 'ID',
        ids: [1]
      }
      const postUrl = url + '/data/featureResults.rjson?returnContent=true'
      try {
        const resultSuperMap = await this.$axios.post(postUrl, postData)
        const fieldNames = resultSuperMap.features[0].fieldNames
        fieldNames.forEach((fieldName) => {
          const temp = {
            label: fieldName,
            value: fieldName
          }
          fields.push(temp)
        })
      } catch (e) {
        console.log(e)
      }
      return fields
    },
    async getFieldFromeArcgisService (url, layerID) {
      const fields = []
      try {
        const resultSuperMap = await this.$axios.get(url + '/layers', { params: { f: 'json' } })
        const layer = resultSuperMap.layers[Number(layerID)]
        layer.fields.forEach(e => {
          fields.push({
            label: e.alias || e.name,
            value: e.name
          })
        })
      } catch (e) {
        console.log(e)
      }
      return fields
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
