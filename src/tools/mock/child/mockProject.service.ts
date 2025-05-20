import type { MockPrj, ResultDto } from './mock'
import { API } from '@/plugins/API'
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
    await API.post(`/mock/api/prj`, {
      ...prj,
      id: undefined,
    })
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
    await API.put(`/mock/api/prj/${prj.id}`, prj)
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
    await API.delete(`/mock/api/prj/${prj.id}`)
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
    const data: ResultDto<MockPrj[]> = await API.get('/mock/api/prj/list')
    projects.value = data.data || []
  }
  catch (e) {
    console.log(e)
    ElMessage.error((e as Error).message || '获取项目列表失败')
  }
}
