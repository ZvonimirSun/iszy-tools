<script setup lang="tsx">
import type { Column, InputInstance } from 'element-plus'
import type { FeatureCollection, GeoJsonProperties } from 'geojson'
import $eventBus from '@/plugins/EventBus'
import { debounce } from 'lodash-es'

withDefaults(defineProps<{
  height?: number | null
}>(), {
  height: null,
})

onMounted(() => {
  $eventBus.on('updateGeojsonLayer', updateTable)
  $eventBus.on('updateEditor', updateTable)
})

const geoJSON = shallowRef<FeatureCollection>()
const edit: {
  row: number | null
  col: number | null
  value: string | null
  changed: boolean
} = reactive({
  row: null,
  col: null,
  value: null,
  changed: false,
})
let syncing = false

const propertyList = computed(() => {
  if (geoJSON.value?.features?.length) {
    return geoJSON.value.features.map((feature) => {
      return feature.properties || {}
    })
  }
  else {
    return []
  }
})

const tableColumns = computed(() => {
  if (geoJSON.value?.features?.length) {
    const keys = getArrayKeys(propertyList.value)
    if (!keys.length) {
      return null
    }
    const columns: Column[] = keys.map((item) => {
      return {
        title: item,
        dataKey: item,
        key: item,
        width: 150,
        cellRenderer: ({ rowData, column, rowIndex, columnIndex }: { rowData: any, column: Column, rowIndex: number, columnIndex: number }) => {
          let data: string
          let dataType: string
          if (rowData[column.dataKey!] != null) {
            dataType = typeof rowData[column.dataKey!]
            if (~['boolean', 'number', 'string'].indexOf(dataType)) {
              data = rowData[column.dataKey!].toString()
            }
            else {
              data = JSON.stringify(rowData[column.dataKey!])
            }
          }
          else {
            data = ''
          }

          const startEdit = () => {
            edit.row = rowIndex
            edit.col = columnIndex
            edit.value = data
          }
          const stopEdit = () => {
            if (edit.changed) {
              let value: string
              if (edit.value != null) {
                value = edit.value.trim()
              }
              else {
                value = ''
              }
              if (dataType !== 'string') {
                try {
                  value = JSON.parse(value!)
                }
                catch (e) {
                }
              }
              updateProperties(rowIndex, columnIndex, value)
            }
            edit.row = null
            edit.col = null
            edit.value = null
            edit.changed = false
          }

          const onChange = (value: string) => {
            edit.value = value
            edit.changed = true
          }

          const setFocus = (el: InputInstance) => {
            el?.focus?.()
          }

          if (edit.row === rowIndex && edit.col === columnIndex) {
            return (
              <el-input
                ref={setFocus}
                modelValue={edit.value}
                onInput={onChange}
                onBlur={stopEdit}
              />
            )
          }
          else {
            return (
              <div class="table-v2-inline-editing-trigger" onClick={startEdit} title={data}>
                {data}
              </div>
            )
          }
        },
      }
    })
    columns.unshift({
      title: '序号',
      dataKey: 'index',
      key: 'index',
      width: 50,
      fixed: true,
      cellRenderer: ({ rowIndex }: { rowIndex: number }) => {
        return <span class="_index">{rowIndex + 1}</span>
      },
    })
    return columns
  }
  else {
    return null
  }
})

const syncingGeoJSONDebounced = debounce(syncingGeoJSON, 500)

function clickRow(e: PointerEvent | TouchEvent) {
  let row: HTMLElement | null = e.target as HTMLElement
  if (!row.classList.contains('el-table-v2__row')) {
    row = row.closest('.el-table-v2__row')
  }
  if (row && row.parentElement) {
    const virIndex = [].indexOf.call(row.parentElement.children, row as never)
    const indexRow = row.closest('.el-table-v2__root')?.querySelectorAll('._index')[virIndex]
    if (indexRow) {
      const index = Number.parseInt(indexRow.textContent || '1') - 1
      $eventBus.emit('selectFeature', index)
    }
  }
}

function updateProperties(row: number, col: number, value: any) {
  const feature = geoJSON.value?.features?.[row]
  if (feature) {
    if (!feature.properties) {
      feature.properties = {}
    }
    const key = tableColumns.value?.[col]?.dataKey as string
    if (key) {
      feature.properties[key] = value
    }
  }
  if (geoJSON.value) {
    syncingGeoJSONDebounced(toRaw(geoJSON.value))
  }
}

function syncingGeoJSON(val: FeatureCollection) {
  if (syncing) {
    return
  }
  syncing = true
  // $eventBus.emit('updateGeojsonLayer', val)
  $eventBus.emit('updateEditor', val)
  syncing = false
}

function updateTable() {
  if (syncing) {
    return
  }
  $eventBus.emit('getGeoJson', (val: FeatureCollection) => {
    geoJSON.value = val
  })
}

function getArrayKeys(array: GeoJsonProperties[]): string[] {
  return [...(array as Record<string, any>).reduce((s: Set<string>, o: Record<string, any>) => {
    Object.keys(o).forEach(k => s.add(k))
    return s
  }, new Set<string>())]
}
</script>

<template>
  <div
    v-if="tableColumns"
    w-full
    :style="{
      height: height ? `${height}px` : undefined,
    }"
  >
    <el-auto-resizer>
      <template #default="{ height: h, width }">
        <el-table-v2
          :columns="tableColumns"
          :data="propertyList"
          :width="width"
          :height="h"
          fixed
          @click="clickRow"
        />
      </template>
    </el-auto-resizer>
  </div>
  <el-empty v-else />
</template>

<style scoped lang="scss">
:deep(.table-v2-inline-editing-trigger) {
  border: 1px transparent dotted;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 4.9rem;
  line-height: 4.9rem;
  cursor: text;

  &:hover {
    border-color: var(--el-color-primary);
  }
}
</style>
