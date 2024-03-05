import { defineStore } from 'pinia'

export const useTinyEditorStore = defineStore('tinyEditor', {
  persist: true,
  state: () => ({
    html: '',
    css: '',
    js: '',
  }),
})
