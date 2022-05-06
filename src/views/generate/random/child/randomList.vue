<template>
  <Typography>
    <h4>随机列表</h4>
  </Typography>
  <template
    v-for="(tag, index) in tags"
    :key="index"
  >
    <Tooltip
      v-if="tag.length > 20"
      :title="tag"
    >
      <Tag
        :closable="!loading"
        @close="handleClose(tag)"
      >
        {{ `${tag.slice(0, 20)}...` }}
      </Tag>
    </Tooltip>
    <Tag
      v-else
      :closable="!loading"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </Tag>
  </template>
  <template v-if="!loading">
    <Input
      v-if="inputVisible"
      ref="inputRef"
      v-model:value="inputValue"
      type="text"
      size="small"
      :style="{ width: '78px' }"
      @blur="handleInputConfirm"
      @keyup.enter="handleInputConfirm"
    />
    <Tag
      v-else
      style="background: #fff; border-style: dashed"
      @click="showInput"
    >
      <Plus theme="outline" />
      新内容
    </Tag>
  </template>
  <template v-if="tags.length">
    <Divider />
    <LuckyWheel
      ref="myLucky"
      width="200px"
      height="200px"
      :blocks="blocks"
      :prizes="prizes"
      :buttons="buttons"
      @start="startCallBack"
      @end="endCallBack"
    />
  </template>
</template>

<script>
import { random } from 'lodash-es'
import { mapGetters, mapMutations } from 'vuex'
import { Tag, Tooltip, Input, Typography, Divider, Modal } from 'ant-design-vue'
import { Plus } from '@icon-park/vue-next'
import { LuckyWheel } from '@lucky-canvas/vue'

export default defineComponent({
  name: 'RandomList',
  components: { Tag, Tooltip, Input, Typography, Divider, Plus, LuckyWheel },
  data: () => ({
    tags: [],
    inputValue: '',
    inputVisible: false,

    loading: false,

    blocks: [{ padding: '10px', background: '#869cfa' }],
    buttons: [
      { radius: '40%', background: '#617df2' },
      { radius: '35%', background: '#afc8ff' },
      {
        radius: '30%',
        background: '#869cfa',
        pointer: true,
        fonts: [{ text: '开始', top: '-10px' }]
      }
    ]
  }),
  computed: {
    ...mapGetters(['getData']),
    prizes: function () {
      const colors = ['#e9e8fe', '#b8c5f2']
      return this.tags.map((item, index) => {
        return {
          background: colors[index % 2],
          fonts: [{ text: item }]
        }
      })
    }
  },
  watch: {
  },
  mounted () {
    this.tags = (this.getData('randomList') || {}).tags || []
  },
  beforeUnmount () {
  },
  methods: {
    ...mapMutations(['setData']),

    startCallBack () {
      this.loading = true
      // 开始游戏
      this.$refs.myLucky.play()
      // 假设接口的请求速度是5s
      setTimeout(() => {
        // 5s后拿到后端返回的中奖索引
        // 然后停止游戏 (缓慢停止)
        this.$refs.myLucky.stop(random(this.tags.length))
      }, 3000)
    },
    endCallBack (prize) {
      Modal.success({
        title: () => `抽中了 『${prize.fonts[0].text}』`,
        onOk: () => {
          // 当完全停止时, 触发回调函数
          this.$refs.myLucky.init()
          this.loading = false
        }
      })
    },

    updateCache () {
      this.setData({
        key: 'randomList',
        val: {
          tags: this.tags
        }
      })
    },
    handleClose  (removedTag) {
      this.tags = this.tags.filter(tag => tag !== removedTag)
      this.updateCache()
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.inputRef.focus()
      })
    },
    handleInputConfirm () {
      const inputValue = this.inputValue
      if (inputValue && this.tags.indexOf(inputValue) === -1) {
        this.tags = [...this.tags, inputValue]
      }
      this.inputVisible = false
      this.inputValue = ''
      this.updateCache()
    }
  }
})
</script>

<style scoped lang="scss">
.ant-space {
  display: flex;
  flex-wrap: wrap;
}

.ant-tag {
  font-size: 16px;
  line-height: 24px;

  ::v-deep(.ant-tag-close-icon) {
    font-size: 14px;
  }

  .i-icon {
    font-size: 14px;
  }
}
</style>
