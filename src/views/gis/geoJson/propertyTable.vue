<template>
  <Table class="ant-table-striped" v-if="tableColumns" :columns="tableColumns" :data-source="propertyList"
         :rowKey="(record,index)=>{return index}" :pagination="false" bordered size="small" :scroll="{x:true}"
         :rowClassName="(record, index) => (index % 2 === 1 ? 'table-striped' : null)"
         :customRow="rowEvents">
    <template #property="{text, column, index}">
      <div v-if="editableData[index]" class="editable-cell-input-wrapper">
        <Input v-model:value="editableData[index][column.dataIndex]" @click.stop
               v-if="typeof editableData[index][column.dataIndex] === 'string'"/>
        <Input v-model:value.number="editableData[index][column.dataIndex]" @click.stop
               v-else-if="typeof editableData[index][column.dataIndex] === 'number'"/>
        <Input :value="JSON.stringify(editableData[index][column.dataIndex])" v-else @click.stop
               @change="saveToEditableData($event, editableData[index], column.dataIndex)"/>
      </div>
      <div v-else class="editable-cell-text-wrapper">
        {{ typeof text === 'object' ? JSON.stringify(text) : text }}
      </div>
    </template>
    <template #operation="{ index }">
      <span v-if="editableData[index]">
        <a @click.stop="save(index)"> 保存属性 </a>
        <a @click.stop="cancel(index)"> 取消编辑 </a>
      </span>
      <span v-else>
        <a @click.stop="edit(index)"> 编辑属性 </a>
      </span>
    </template>
  </Table>
  <Empty v-else></Empty>
</template>

<script>
import { Table, Empty, Input } from 'ant-design-vue'
import { geoJSON } from 'leaflet'
import { cloneDeep } from 'lodash-es'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'propertyTable',
  components: { Table, Empty, Input },
  emits: ['change'],
  props: {
    geoJsonLayer: Object,
    map: Object
  },
  data: () => ({
    editableData: {}
  }),
  computed: {
    tableColumns () {
      if (this.propertyList && this.propertyList.length > 0) {
        const keys = Object.keys(this.propertyList[0])
        const columns = keys.map(item => {
          return {
            title: item,
            dataIndex: item,
            key: item,
            slots: { customRender: 'property' }
          }
        })
        columns.push({
          title: '操作',
          dataIndex: 'operation',
          width: 40,
          fixed: 'right',
          slots: {
            customRender: 'operation'
          }
        })
        return columns
      } else {
        return null
      }
    },
    propertyList () {
      if (this.features) {
        return this.features.map(item => {
          return item.properties
        })
      }
      return null
    },
    features () {
      if (this.geoJsonLayer) {
        try {
          const tmp = this.geoJsonLayer.toGeoJSON()
          return tmp.features
        } catch (e) {
          return null
        }
      }
      return null
    }
  },
  methods: {
    locationGeo (geoJson) {
      try {
        const layer = geoJSON(geoJson)
        const bounds = layer.getBounds()
        const center = bounds.getCenter()
        const zoom = this.map.getBoundsZoom(bounds)
        this.map.setView(center, zoom)
      } catch (e) {
      }
    },

    saveToEditableData (val, property, key) {
      if (val instanceof InputEvent && property && key) {
        try {
          property[key] = JSON.parse(val.currentTarget.value)
        } catch (e) {
          property[key] = val.currentTarget.value
        }
      }
    },
    edit (index) {
      this.editableData[index] = cloneDeep(this.propertyList[index])
    },
    save (index) {
      Object.assign(this.propertyList[index], this.editableData[index])
      delete this.editableData[index]
      this.$emit('change')
    },
    cancel (index) {
      delete this.editableData[index]
    },

    rowEvents (record, index) {
      return {
        onClick: () => {
          this.locationGeo(this.features[index])
        }
      }
    }
  }
})
</script>

<style scoped lang="scss">

</style>
