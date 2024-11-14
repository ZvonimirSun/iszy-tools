import type { MockPrj, ResultDto } from './mock'
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
    throw new Error('获取项目列表失败')
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
    const res: ResultDto<never> = await axios.post(`${axios.$apiBase}/mock/api/prj`, {
      ...prj,
      id: undefined,
    }).then(axios.getData)
    if (res.success) {
      ElMessage.success('创建项目成功')
      refreshMockProject().then()
      return true
    }
    else {
      ElMessage.error('创建项目失败')
    }
  }
  catch (e) {
    ElMessage.error('创建项目失败')
  }
  return false
}

export async function updateProject(prj: MockPrj) {
  try {
    const res: ResultDto<never> = await axios.put(`${axios.$apiBase}/mock/api/prj/${prj.id}`, prj).then(axios.getData)
    if (res.success) {
      ElMessage.success('更新项目成功')
      refreshMockProject().then()
      return true
    }
    else {
      ElMessage.error('更新项目失败')
    }
  }
  catch (e) {
    ElMessage.error('更新项目失败')
  }
  return false
}

export async function deleteProject(prj: MockPrj) {
  try {
    const res: ResultDto<never> = await axios.delete(`${axios.$apiBase}/mock/api/prj/${prj.id}`).then(axios.getData)
    if (res.success) {
      ElMessage.success('删除项目成功')
      refreshMockProject().then()
      return true
    }
    else {
      ElMessage.error('删除项目失败')
    }
  }
  catch (e) {
    ElMessage.error('删除项目失败')
  }
  return false
}

async function refreshMockProject() {
  try {
    const data: ResultDto<MockPrj[]> = await (axios.get(`${axios.$apiBase}/mock/api/prj/list`).then(axios.getData))
    if (data.success) {
      projects.value = data.data || []
    }
    else {
      ElMessage.error('获取项目列表失败')
    }
  }
  catch (e) {
    console.log(e)
    ElMessage.error('获取项目列表失败')
  }
}
