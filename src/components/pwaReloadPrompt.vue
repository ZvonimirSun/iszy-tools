<template>
  <div
    v-if="offlineReady || needRefresh"
    class="pwa-toast"
  >
    <div class="message">
      <span v-if="offlineReady">
        已经准备好离线运行~
      </span>
      <span v-else>
        存在新内容，点击按钮重载来更新
      </span>
    </div>
    <Button v-if="needRefresh" @click="updateServiceWorker()">
      重载
    </Button>
    <Button @click="close">
      关闭
    </Button>
  </div>
</template>
<script>
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker
} = useRegisterSW()

export default defineComponent({
  name: 'pwaReloadPrompt',
  components: { Button },
  data: () => ({
    offlineReady,
    needRefresh
  }),
  methods: {
    updateServiceWorker,
    async close () {
      this.offlineReady = false
      this.needRefresh = false
    }
  }
})
</script>
<style lang="scss" scoped>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}

.pwa-toast .message {
  margin-bottom: 8px;
}

.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>
