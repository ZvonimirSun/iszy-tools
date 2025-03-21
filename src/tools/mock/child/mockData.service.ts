import type { MockData, MockPrj, ResultDto } from './mock'
import config from '@/config'
import axios from '@/plugins/Axios'
import { deleteParam, setParam } from '@/utils/hashHandler'
import dayjs from 'dayjs'
import ElMessage from 'element-plus/es/components/message/index'

const emptyMockData: MockData = {
  id: -1,
  name: '',
  type: 'get',
  enabled: true,
  path: '',
  description: '',
  delay: 0,
  response: '',
  projectId: '',
}

export const selectedProject = ref<MockPrj>()
export const mockData = ref<MockData[]>([])

export function getNewMockData() {
  if (!selectedProject.value) {
    throw new Error('未选择项目')
  }
  return {
    ...emptyMockData,
    projectId: selectedProject.value.id,
  }
}

export async function setProject(prj?: MockPrj) {
  selectedProject.value = prj
  mockData.value = []
  if (selectedProject.value) {
    setParam('prjId', selectedProject.value.id)
    await refreshMockData()
  }
  else {
    deleteParam('prjId')
  }
}

export async function editData(data: MockData) {
  try {
    const res: ResultDto<never> = await axios.put(`${config.apiBaseUrl}/mock/api/data/${data.id}`, {
      ...data,
      id: undefined,
      projectId: undefined,
    }).then(axios.getData)
    if (res.success) {
      ElMessage.success('修改数据成功')
      refreshMockData().then()
      return true
    }
    else {
      ElMessage.error('修改数据失败')
    }
  }
  catch (e) {
    ElMessage.error('修改数据失败')
  }
  return false
}

export async function createData(data: MockData) {
  try {
    const res: ResultDto<never> = await axios.post(`${config.apiBaseUrl}/mock/api/data`, { ...data, id: undefined, projectId: selectedProject.value?.id }).then(axios.getData)
    if (res.success) {
      ElMessage.success('创建数据成功')
      refreshMockData().then()
      return true
    }
    else {
      ElMessage.error('创建数据失败')
    }
  }
  catch (e) {
    ElMessage.error('创建数据失败')
  }
  return false
}

export async function deleteData(data: MockData) {
  try {
    const res: ResultDto<never> = await axios.delete(`${config.apiBaseUrl}/mock/api/data/${data.id}`).then(axios.getData)
    if (res.success) {
      ElMessage.success('删除数据成功')
      refreshMockData().then()
      return true
    }
    else {
      ElMessage.error('删除数据失败')
    }
  }
  catch (e) {
    ElMessage.error('删除数据失败')
  }
  return false
}

async function refreshMockData() {
  if (!selectedProject.value) {
    ElMessage.error('未选择项目')
    return
  }
  try {
    mockData.value = await getMockData(selectedProject.value)
  }
  catch (e) {
    console.log(e)
    ElMessage.error('获取数据列表失败')
  }
}

// 获取接口列表
async function getMockData(prj: MockPrj) {
  const data: ResultDto<MockData[]> = await (axios.get(`${config.apiBaseUrl}/mock/api/prj/${prj.id}/list`).then(axios.getData))
  if (data.success) {
    return (data.data || []).map((item) => {
      item.createdAt = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss')
      item.url = `${config.apiBaseUrl}/mock/${prj.id}${prj.path}${item.path}`
      return item
    })
  }
  else {
    throw new Error(data.message)
  }
}
