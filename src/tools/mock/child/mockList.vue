<script setup lang="ts">
import type { MockPrj } from './mock'
import {
  createProject,
  deleteProject,
  getNewMockProject,
  projects,
  selectProject,
  updateProject,
} from './mockProject.service'

const showPrjDialog = ref(false)
const form: MockPrj = reactive({
  id: '',
  name: '',
  path: '',
  description: '',
})

function openCreatePrjDialog() {
  Object.assign(form, getNewMockProject())
  showPrjDialog.value = true
}

function openEditPrjDialog(prj: MockPrj) {
  Object.assign(form, {
    id: prj.id ?? '',
    name: prj.name,
    path: prj.path,
    description: prj.description ?? '',
  })
  showPrjDialog.value = true
}

async function createOrEditPrj(prj: MockPrj) {
  let status: boolean
  if (prj.id) {
    status = await updateProject(prj)
  }
  else {
    status = await createProject(prj)
  }
  if (status) {
    showPrjDialog.value = false
  }
}
</script>

<template>
  <div
    class="prj-wrapper"
  >
    <div
      w-full
      class="prj-list"
    >
      <div
        v-for="(prj, index) of projects"
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
            @click="selectProject(prj)"
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
            @confirm="deleteProject(prj)"
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
</template>

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
</style>
