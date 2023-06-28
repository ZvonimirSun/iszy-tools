<template>
  <div
    v-if="!selectedPrj"
    class="prj-wrapper"
  >
    <div
      w-full
      class="prj-list"
    >
      <div
        v-for="(prj, index) of prjs"
        :key="index"
        class="prj-item"
      >
        <div class="prj-title">
          {{ prj.name }}
        </div>
        <div class="prj-path">
          {{ prj.path }}
        </div>
        <div class="prj-desc">
          {{ prj.description }}
        </div>
        <div class="prj-control">
          <div
            class="prj-control-btn prj-btn-open"
            @click="selectPrj(prj)"
          >
            <i class="i-icon-park-outline-preview-open" />
          </div>
          <div
            class="prj-control-btn prj-btn-edit"
            @click="openEditPrjDialog(prj)"
          >
            <i class="i-icon-park-outline-edit-two" />
          </div>
          <el-popconfirm
            title="确认要删除该项目吗？删除后无法恢复！"
            @confirm="deletePrj(prj)"
          >
            <template #reference>
              <div class="prj-control-btn prj-btn-delete">
                <i class="i-icon-park-outline-delete" />
              </div>
            </template>
          </el-popconfirm>
        </div>
      </div>
      <div
        class="prj-add"
        @click="openCreatePrjDialog"
      >
        <i class="i-icon-park-outline-plus" />
      </div>
    </div>
  </div>
  <div
    v-else
    class="prj-detail"
  >
    <el-page-header @back="returnToList">
      <template #content>
        {{ selectedPrj.name }}
      </template>
    </el-page-header>
    <div class="prj-meta-wrapper">
      <div class="prj-meta">
        <div class="prj-meta-name">
          接口根地址
        </div>
        <copyable-text
          :val="axios.$apiBase + '/mock/' + selectedPrj.id + selectedPrj.path"
          class="prj-meta-content"
        />
      </div>
      <div class="prj-meta">
        <div class="prj-meta-name">
          项目ID
        </div>
        <copyable-text
          :val="selectedPrj.id"
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
            :data="datas"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
  <el-dialog
    v-model="showPrjDialog"
    :title="form.id ? '修改项目' : '添加项目'"
  >
    <el-form :model="form">
      <el-form-item
        label="项目名称"
        :label-width="120"
        :required="true"
      >
        <el-input
          v-model="form.name"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="接口基础路径"
        :label-width="120"
        :required="true"
      >
        <el-input
          v-model="form.path"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="项目描述"
        :label-width="120"
      >
        <el-input
          v-model="form.description"
          type="textarea"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showPrjDialog = false">取消</el-button>
        <el-button
          type="primary"
          @click="createOrEditPrj(form)"
        >
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog
    v-model="showDataDialog"
    :title="dataForm.id > -1 ? '修改接口' : '添加接口'"
    @opened="initJsonEditor"
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
      <div
        ref="jsonEditor"
        class="edit-data-json"
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
<script setup lang="tsx">
import type { Ref } from 'vue'
import axios from '@/plugins/Axios'
import dayjs from 'dayjs'
import { getParam, setParam } from '@/utils/hashHandler'
import CopyableText from '@/components/copyable-text.vue'
import { Column } from 'element-plus'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'

interface MockPrj {
  id: string
  name: string
  path: string
  description: string
}

type RequestType = 'post' | 'get' | 'delete' | 'put'

interface MockData {
  id: number
  name: string
  type: RequestType
  enabled: boolean
  path: string
  description?: string
  delay: number
  response: string | object
  projectId: string,
  createdAt?: string,
  url?: string
}

const prjs: Ref<MockPrj[]> = ref([])
const selectedPrj: Ref<MockPrj | null> = ref(null)
const datas: Ref<MockData[]> = ref([])

const showPrjDialog: Ref<boolean> = ref(false)
const showDataDialog: Ref<boolean> = ref(false)

const jsonEditor: Ref<HTMLDivElement> = ref() as Ref<HTMLDivElement>

const form: MockPrj = reactive({
  id: '',
  name: '',
  path: '',
  description: ''
})
const dataForm: MockData = reactive({
  id: -1,
  name: '',
  type: 'get',
  enabled: true,
  path: '',
  description: '',
  delay: 0,
  response: '',
  projectId: ''
})

let jsonEditorInstance: JSONEditor

const columns: Column<any>[] = [
  {
    title: '名称',
    key: 'name',
    dataKey: 'name',
    width: 300
  },
  {
    title: '请求类型',
    key: 'type',
    dataKey: 'type',
    width: 100,
    align: 'center',
    cellRenderer: ({ cellData: type }: {cellData: string}) => <el-tag>{type}</el-tag>
  },
  {
    title: '请求状态',
    key: 'enabled',
    dataKey: 'enabled',
    width: 100,
    align: 'center',
    cellRenderer: ({ cellData: enabled }: {cellData: boolean}) => <el-tag type="success">{enabled ? '开启' : '关闭'}</el-tag>
  },
  {
    title: '接口地址',
    key: 'path',
    dataKey: 'path',
    width: 300,
    cellRenderer: ({ cellData: path }: {cellData: string}) => <copyable-text val={path} />
  },
  {
    title: '接口描述',
    key: 'description',
    dataKey: 'description',
    width: 300
  },
  {
    title: '创建时间',
    key: 'createdAt',
    dataKey: 'createdAt',
    width: 200
  },
  {
    title: '操作',
    key: 'operations',
    cellRenderer: ({ rowData: data }: {rowData: MockData}) => (
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
            )
          }}
        >
        </el-popconfirm>
      </>
    ),
    width: 200,
    align: 'center'
  }
]

onMounted(async () => {
  await getMockPrjs()
  const prjId = getParam('prjId')
  if (prjId) {
    const prj = prjs.value.find(prj => prj.id === prjId)
    if (prj) {
      selectPrj(prj)
    }
  }
})

function openCreatePrjDialog () {
  Object.assign(form, {
    id: '',
    name: '',
    path: '',
    description: ''
  })
  showPrjDialog.value = true
}

function openEditPrjDialog (prj: MockPrj) {
  Object.assign(form, {
    id: prj.id ?? '',
    name: prj.name,
    path: prj.path,
    description: prj.description ?? ''
  })
  showPrjDialog.value = true
}

function createOrEditPrj (prj: MockPrj) {
  if (prj.id) {
    editPrj(prj)
  } else {
    createPrj(prj)
  }
}

function createPrj (prj: MockPrj) {
  axios.post(`${axios.$apiBase}/mock/api/prj`, { ...prj, id: undefined }).then(axios.getData).then((data: {
    success: boolean
  }) => {
    if (data.success) {
      ElMessage.success('创建项目成功')
      getMockPrjs()
      showPrjDialog.value = false
    } else {
      ElMessage.error('创建项目失败')
    }
  })
}

function editPrj (prj:MockPrj) {
  axios.put(`${axios.$apiBase}/mock/api/prj/${prj.id}`, prj).then(axios.getData).then((data: {
    success: boolean
  }) => {
    if (data.success) {
      ElMessage.success('修改项目成功')
      getMockPrjs()
      showPrjDialog.value = false
    } else {
      ElMessage.error('修改项目失败')
    }
  })
}

async function deletePrj (prj: MockPrj) {
  try {
    const res: {
      success: boolean
    } = await axios.delete(`${axios.$apiBase}/mock/api/prj/${prj.id}`).then(axios.getData)
    if (res.success) {
      ElMessage.success('删除项目成功')
      await getMockPrjs()
    } else {
      ElMessage.error('删除项目失败')
    }
    ElMessage.success('删除项目成功')
  } catch (e) {
    ElMessage.error('删除项目失败')
  }
}

async function getMockPrjs () {
  try {
    const data: {
      success: boolean
      data?: MockPrj[]
    } = await (axios.get(`${axios.$apiBase}/mock/api/prj/list`).then(axios.getData))
    if (data.success) {
      prjs.value = data.data || []
    } else {
      ElMessage.error('获取项目列表失败')
    }
  } catch (e) {
    ElMessage.error('获取项目列表失败')
  }
}

function getMockDatas (prj: MockPrj) {
  axios.get(`${axios.$apiBase}/mock/api/prj/${prj.id}/list`).then(axios.getData).then((data: {
    success: boolean
    data?: MockData[]
  }) => {
    if (data.success) {
      datas.value = (data.data || []).map(item => {
        item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss')
        item.url = `${axios.$apiBase}/mock/${prj.id}${prj.path}${item.path}`
        return item
      })
    } else {
      ElMessage.error('获取接口列表失败')
    }
  })
}

function selectPrj (prj: MockPrj) {
  selectedPrj.value = prj
  setParam('prjId', prj.id)
  getMockDatas(prj)
}

function openCreateDataDialog () {
  Object.assign(dataForm, {
    id: -1,
    name: '',
    type: 'get',
    enabled: true,
    path: '',
    description: '',
    delay: 0,
    response: '',
    projectId: ''
  })
  showDataDialog.value = true
}

function openEditDataDialog (data: MockData) {
  Object.assign(dataForm, {
    id: data.id,
    name: data.name,
    type: data.type,
    enabled: data.enabled,
    path: data.path,
    description: data.description,
    delay: data.delay,
    response: data.response,
    projectId: data.projectId
  })
  showDataDialog.value = true
}

function initJsonEditor () {
  if (!jsonEditorInstance) {
    jsonEditorInstance = new JSONEditor(jsonEditor.value, {
      mode: 'code',
      onChangeText: (text: string) => {
        dataForm.response = text
      }
    })
  }
  jsonEditorInstance.setText(typeof dataForm.response === 'string' ? dataForm.response : JSON.stringify(dataForm.response))
}

function createOrEditData (data: MockData) {
  if (data.id > -1) {
    editData(data)
  } else {
    createData(data)
  }
}

async function editData (data: MockData) {
  try {
    const res: {
      success: boolean
    } = await axios.put(`${axios.$apiBase}/mock/api/data/${data.id}`, {
      ...data,
      id: undefined,
      projectId: undefined
    }).then(axios.getData)
    if (res.success) {
      ElMessage.success('修改数据成功')
      getMockDatas(selectedPrj.value as MockPrj)
      showDataDialog.value = false
    } else {
      ElMessage.error('修改数据失败')
    }
  } catch (e) {
    ElMessage.error('修改数据失败')
  }
}

async function createData (data: MockData) {
  try {
    const res: {
      success: boolean
    } = await axios.post(`${axios.$apiBase}/mock/api/data`, { ...data, id: undefined, projectId: selectedPrj.value?.id }).then(axios.getData)
    if (res.success) {
      ElMessage.success('创建数据成功')
      getMockDatas(selectedPrj.value as MockPrj)
      showDataDialog.value = false
    } else {
      ElMessage.error('创建数据失败')
    }
  } catch (e) {
    ElMessage.error('创建数据失败')
  }
}

async function deleteData (data: MockData) {
  try {
    const res: {
      success: boolean
    } = await axios.delete(`${axios.$apiBase}/mock/api/data/${data.id}`).then(axios.getData)
    if (res.success) {
      ElMessage.success('删除数据成功')
      getMockDatas(selectedPrj.value as MockPrj)
    } else {
      ElMessage.error('删除数据失败')
    }
  } catch (e) {
    ElMessage.error('删除数据失败')
  }
}

function returnToList () {
  selectedPrj.value = null
  datas.value = []
}

async function copy (val: string) {
  try {
    await navigator.clipboard.writeText(val)
    ElMessage.success('复制成功')
  } catch (e) {
    ElMessage.error('复制失败')
  }
}
</script>

<style scoped lang="scss">
.prj-wrapper {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.prj-list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  .prj-item, .prj-add {
    background: var(--el-fill-color-blank);
    box-shadow: var(--el-box-shadow-light);
    border-radius: var(--el-border-radius-middle);
    width: 30rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .prj-item {

    .prj-title {
      font-size: 1.6rem;
      font-weight: bold;
      padding: 0 2rem;
      height: 4rem;
      line-height: 4rem;
      background-color: var(--el-fill-color);
    }

    .prj-path {
      padding: 0 2rem;
      font-weight: bold;
      height: 2rem;
      line-height: 2.2rem;
      font-size: 1.6rem;
    }

    .prj-desc {
      flex: 1;
      padding: 1rem 2rem;
      color: var(--el-text-color-secondary);
    }

    .prj-control {
      height: 3rem;
      display: flex;
      border-top: solid .1rem var(--el-border-color);

      .prj-control-btn {
        width: calc(100% / 3);
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        font-size: 1.8rem;
        transition: all .3s;

        &:hover {
          background-color: var(--el-fill-color-light);
        }
      }

      .prj-btn-open {
        color: var(--el-color-primary);
      }

      .prj-btn-delete {
        color: var(--el-color-danger);
      }
    }
  }

  .prj-add {
    justify-content: center;
    align-items: center;
    font-size: 8rem;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    transition: all .3s;

    &:hover {
      background-color: var(--el-fill-color-light);
    }
  }
}

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
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  .edit-data-form {
    width: 300px;

    @media screen and (max-width: 1440px) {
      width: 100%;
    }
  }

  .edit-data-json {
    flex: 1;
  }
}
</style>
