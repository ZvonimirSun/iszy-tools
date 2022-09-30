<template>
  <a-table
    v-if="tableColumns"
    class="ant-table-striped"
    :columns="tableColumns"
    :data-source="propertyList"
    :row-key="(record,index)=>{return index}"
    :pagination="false"
    bordered
    size="small"
    :scroll="{x:true}"
    :row-class-name="(record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    :custom-row="rowEvents"
  >
    <template #property="{text, column, index}">
      <div
        v-if="editableData[index]"
        class="editable-cell-input-wrapper"
      >
        <a-input
          v-if="typeof editableData[index][column.dataIndex] === 'string'"
          v-model:value="editableData[index][column.dataIndex]"
          @click.stop
        />
        <a-input
          v-else-if="typeof editableData[index][column.dataIndex] === 'number'"
          v-model:value.number="editableData[index][column.dataIndex]"
          @click.stop
        />
        <a-input
          v-else
          :value="JSON.stringify(editableData[index][column.dataIndex])"
          @click.stop
          @change="saveToEditableData($event, editableData[index], column.dataIndex)"
        />
      </div>
      <div
        v-else
        class="editable-cell-text-wrapper"
      >
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
  </a-table>
  <a-empty v-else />
</template>

<script>
import { cloneDeep } from 'lodash-es'

export default defineComponent({
  name: 'PropertyTable',
  props: {
    geoJsonLayer: { type: Object, default: undefined }
  },
  data: () => ({
    editableData: {}
  }),
  computed: {
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
    },
    propertyList () {
      if (this.features) {
        return this.features.map(item => {
          return item.properties
        })
      }
      return null
    },
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
    }
  },
  methods: {
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
      this.$eventBus.emit('updateEditor')
    },
    cancel (index) {
      delete this.editableData[index]
    },
    rowEvents (record, index) {
      return {
        onClick: () => {
          this.$eventBus.emit('locationGeo', this.features[index])
        }
      }
    }
  }
})
</script>

<style scoped lang="scss">

:deep(.ant-table) {
  th {
    background-color: #e6e6e6;
  }

  td {
    white-space: nowrap;

    .editable-cell-input-wrapper, .editable-cell-text-wrapper {
      width: max-content;
    }
  }
}

:deep(.ant-table-striped) .table-striped {
  background-color: #fafafa;
}
</style>
