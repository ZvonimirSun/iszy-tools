import type { MockPrj, ResultDto } from './mock'
import config from '@/config'
import axios from '@/plugins/Axios'
import { getParam } from '@/utils/hashHandler'
import { setProject } from './mockData.service'

const emptyMockPrj: MockPrj = {
  id: '',
  name: '',
  path: '',
  description: '',
}

export const projects = ref<MockPrj[]>([])

export async function init() {
  try {
    await refreshMockProject()
    const prjId = getParam('prjId')
    if (prjId) {
      selectProject(prjId)
    }
  }
  catch (e) {
    throw new Error((e as Error).message || '获取项目列表失败')
  }
}

export function getNewMockProject() {
  return { ...emptyMockPrj }
}

export function selectProject(prj: MockPrj | string) {
  if (typeof prj === 'string') {
    const tmp = projects.value.find(item => item.id === prj)
    if (!tmp) {
      ElMessage.error('未找到项目')
      return
    }
    else {
      prj = tmp
    }
  }
  setProject(prj).then()
}

export async function createProject(prj: MockPrj) {
  try {
    await axios.post(`${config.apiBaseUrl}/mock/api/prj`, {
      ...prj,
      id: undefined,
    }).then(axios.getData)
    ElMessage.success('创建项目成功')
    refreshMockProject().then()
    return true
  }
  catch (e) {
    ElMessage.error((e as Error).message || '创建项目失败')
  }
  return false
}

export async function updateProject(prj: MockPrj) {
  try {
    await axios.put(`${config.apiBaseUrl}/mock/api/prj/${prj.id}`, prj).then(axios.getData)
    ElMessage.success('更新项目成功')
    refreshMockProject().then()
    return true
  }
  catch (e) {
    ElMessage.error((e as Error).message || '更新项目失败')
  }
  return false
}

export async function deleteProject(prj: MockPrj) {
  try {
    await axios.delete(`${config.apiBaseUrl}/mock/api/prj/${prj.id}`).then(axios.getData)
    ElMessage.success('删除项目成功')
    refreshMockProject().then()
    return true
  }
  catch (e) {
    ElMessage.error((e as Error).message || '删除项目失败')
  }
  return false
}

async function refreshMockProject() {
  try {
    const data: ResultDto<MockPrj[]> = await (axios.get(`${config.apiBaseUrl}/mock/api/prj/list`).then(axios.getData))
    projects.value = data.data || []
  }
  catch (e) {
    console.log(e)
    ElMessage.error((e as Error).message || '获取项目列表失败')
  }
}
