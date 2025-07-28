<script setup lang="tsx">
import type { Column } from 'element-plus'
import type { MockData } from './mock'
import { TableV2FixedDir } from 'element-plus'
import config from '@/config'
import { createData, deleteData, editData, getNewMockData, mockData, selectedProject, setProject } from './mockData.service'

const { copy } = useCopy({ text: '复制成功' })

const showDataDialog = ref(false)
const dataForm: MockData & { response: any } = reactive(getNewMockData())

const columns: Column[] = [
  {
    title: '名称',
    key: 'name',
    dataKey: 'name',
    width: 300,
    fixed: TableV2FixedDir.LEFT,
  },
  {
    title: '请求类型',
    key: 'type',
    dataKey: 'type',
    width: 100,
    align: 'center',
    cellRenderer: ({ cellData: type }: { cellData: string }) => <el-tag>{type}</el-tag>,
  },
  {
    title: '请求状态',
    key: 'enabled',
    dataKey: 'enabled',
    width: 100,
    align: 'center',
    cellRenderer: ({ cellData: enabled }: { cellData: boolean }) => <el-tag type="success">{enabled ? '开启' : '关闭'}</el-tag>,
  },
  {
    title: '接口地址',
    key: 'path',
    dataKey: 'path',
    width: 300,
    cellRenderer: ({ cellData: path }: { cellData: string }) => <copyable-text val={path} />,
  },
  {
    title: '接口描述',
    key: 'description',
    dataKey: 'description',
    width: 300,
  },
  {
    title: '创建时间',
    key: 'createdAt',
    dataKey: 'createdAt',
    width: 200,
  },
  {
    title: '操作',
    key: 'operations',
    fixed: TableV2FixedDir.RIGHT,
    cellRenderer: ({ rowData: data }: { rowData: MockData }) => (
      <>
        <el-button size="small" onClick={() => copy(data.url ?? '')}>复制</el-button>
        <el-button size="small" onClick={() => openEditDataDialog(data)}>编辑</el-button>
        <el-popconfirm
          title="确认要删除该数据吗？删除后无法恢复！"
          onConfirm={() => deleteData(data)}
          v-slots={{
            reference: () => (
              <el-button size="small" type="danger">
                删除
              </el-button>
            ),
          }}
        >
        </el-popconfirm>
      </>
    ),
    width: 200,
    align: 'center',
  },
]

function openCreateDataDialog() {
  Object.assign(dataForm, getNewMockData())
  showDataDialog.value = true
}

function openEditDataDialog(data: MockData) {
  let response: string | unknown
  try {
    response = JSON.parse(data.response) as unknown
  }
  catch (e) {
    response = data.response
  }
  Object.assign(dataForm, {
    id: data.id,
    name: data.name,
    type: data.type,
    enabled: data.enabled,
    path: data.path,
    description: data.description,
    delay: data.delay,
    response,
    projectId: data.projectId,
  })
  showDataDialog.value = true
}

async function createOrEditData(data: MockData & { response: any }) {
  let response = data.response
  if (!response) {
    ElMessage.error('请填写接口返回数据')
    return
  }
  if (typeof response !== 'string') {
    try {
      response = JSON.stringify(response)
    }
    catch (e) {
      response = response.toString()
    }
  }
  else {
    try {
      response = JSON.stringify(JSON.parse(response))
    }
    catch (e) {}
  }
  let status: boolean
  if (data.id > -1) {
    status = await editData({ ...data, response })
  }
  else {
    status = await createData({ ...data, response })
  }
  if (status) {
    showDataDialog.value = false
  }
}
</script>

<template>
  <div
    v-if="selectedProject"
    class="prj-detail"
  >
    <el-page-header @back="setProject()">
      <template #content>
        {{ selectedProject.name }}
      </template>
    </el-page-header>
    <div class="prj-meta-wrapper">
      <div class="prj-meta">
        <div class="prj-meta-name">
          接口根地址
        </div>
        <CopyableText
          :val="`${config.apiBaseUrl}/mock/${selectedProject.id}${selectedProject.path}`"
          class="prj-meta-content"
        />
      </div>
      <div class="prj-meta">
        <div class="prj-meta-name">
          项目ID
        </div>
        <CopyableText
          :val="selectedProject.id"
          class="prj-meta-content"
        />
      </div>
    </div>
    <div class="prj-data-control">
      <el-button
        type="primary"
        @click="openCreateDataDialog"
      >
        新增接口
      </el-button>
    </div>
    <div class="prj-data-wrapper">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            :columns="columns"
            :data="mockData"
            :width="width"
            :height="height"
            :fixed="true"
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
  <el-dialog
    v-model="showDataDialog"
    fullscreen
    :title="dataForm.id > -1 ? '修改接口' : '添加接口'"
    destroy-on-close
  >
    <div class="edit-data-wrapper">
      <el-form
        :model="dataForm"
        class="edit-data-form"
      >
        <el-form-item
          label="接口名"
          :label-width="120"
          :required="true"
        >
          <el-input
            v-model="dataForm.name"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="类型(method)"
          :label-width="120"
          :required="true"
        >
          <el-select
            v-model="dataForm.type"
          >
            <el-option
              label="ALL"
              value="all"
            />
            <el-option
              label="GET"
              value="get"
            />
            <el-option
              label="POST"
              value="post"
            />
            <el-option
              label="DELETE"
              value="delete"
            />
            <el-option
              label="PUT"
              value="put"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="返回延时(单位毫秒)"
          :label-width="120"
        >
          <el-input
            v-model.number="dataForm.delay"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="数据类型"
          :label-width="120"
        >
          <el-select
            v-model="dataForm.contentType"
          >
            <el-option
              label="自动"
              value=""
            />
            <el-option
              label="XML"
              value="text/xml"
            />
            <el-option
              label="HTML"
              value="text/html"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="接口"
          :label-width="120"
          :required="true"
        >
          <el-input
            v-model="dataForm.path"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="接口描述"
          :label-width="120"
        >
          <el-input
            v-model="dataForm.description"
            type="textarea"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="接口状态"
          :label-width="120"
        >
          <el-switch
            v-model="dataForm.enabled"
            inline-prompt
            active-text="开"
            inactive-text="关"
          />
        </el-form-item>
      </el-form>
      <SimpleJsonEditor
        v-model="dataForm.response"
        class="edit-data-json"
        mode="text"
      />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showDataDialog = false">取消</el-button>
        <el-button
          type="primary"
          @click="createOrEditData(dataForm)"
        >
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.prj-detail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  * {
    box-sizing: border-box;
  }

  .prj-meta-wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background: var(--el-fill-color-blank);
    box-shadow: var(--el-box-shadow-light);
    border-radius: var(--el-border-radius-middle);

    .prj-meta {
      display: flex;

      .prj-meta-name {
        font-weight: bold;
        width: 12rem;
      }

      .prj-meta-content {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .prj-data-control {
    text-align: right;
  }

  .prj-data-wrapper {
    flex: 1;
    overflow: hidden;
    background: var(--el-fill-color-blank);
    box-shadow: var(--el-box-shadow-light);
    border-radius: var(--el-border-radius-middle);
  }
}

.edit-data-wrapper {
  height: calc(100vh - 6.2rem - 5.4rem - 6rem);
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  overflow: auto;

  .edit-data-form {
    width: 300px;

    @media screen and (max-width: 1440px) {
      width: 100%;
    }
  }

  .edit-data-json {
    flex: 1;
    height: 100%;

    @media screen and (max-width: 1440px) {
      height: 75%;
    }
  }
}
</style>
