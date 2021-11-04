<template>
  <Modal v-model:visible="listModalVisible" title="列表名称" @ok="addList">
    <Input v-model:value="listName"/>
  </Modal>
  <Modal v-model:visible="contentModalVisible" title="内容" @ok="addContent">
    <TextArea v-model:value="content"/>
  </Modal>
  <Space direction="vertical">
    <Space>
      <Button @click="listModalVisible = true" type="primary">添加列表</Button>
      <Popconfirm title="确认删除" v-if="selected" @confirm="deleteList">
        <Button type="primary" danger>删除列表</Button>
      </Popconfirm>
    </Space>
    <RadioGroup v-model:value="selected" v-if="lists.length">
      <RadioButton v-for="(item) in lists" :value="item.value" :key="item.value">{{ item.name }}</RadioButton>
    </RadioGroup>

    <Button @click="contentModalVisible = true" type="primary" v-if="selectedList">添加内容</Button>
    <div ref="cloud" class="cloud" v-if="selectedList"></div>
  </Space>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { defineComponent } from 'vue'
import { Radio, Space, Button, Modal, Input, Popconfirm } from 'ant-design-vue'
import { v4 as uuid } from 'uuid'
import TagCloud from '@/utils/tagCloud.js'

let tagCloud
const {
  mapGetters,
  mapActions
} = createNamespacedHelpers('cache')
const {
  Group: RadioGroup,
  Button: RadioButton
} = Radio
const { TextArea } = Input

export default defineComponent({
  name: 'randomList',
  components: {
    RadioGroup,
    RadioButton,
    Space,
    Button,
    Modal,
    Input,
    Popconfirm,
    TextArea
  },
  data: () => ({
    lists: [],
    selected: '',
    listModalVisible: false,
    listName: '',
    contentModalVisible: false,
    content: ''
  }),
  computed: {
    ...mapGetters(['getData']),
    selectedList () {
      return this.lists.find(item => (item.value === this.selected))
    }
  },
  mounted () {
    this.lists = (this.getData('randomList') || {}).lists || []
    if (this.lists.length) {
      this.selected = this.lists[0].value
    }
  },
  watch: {
    selected: function (val) {
      if (val) {
        this.updateCloud()
      } else {
        if (tagCloud) {
          tagCloud.destroy()
          tagCloud = undefined
        }
      }
    }
  },
  beforeUnmount () {
    this.$refs.cloud.removeEventListener('click', this.cloudClick)
    if (tagCloud) {
      tagCloud.destroy()
      tagCloud = undefined
    }
  },
  methods: {
    ...mapActions(['setData']),
    addList () {
      const key = uuid()
      this.lists.push({
        name: this.listName,
        value: key,
        contents: []
      })
      this.updateCache()
      this.listModalVisible = false
      this.listName = ''
      if (this.lists.length === 1) {
        this.selected = key
      }
    },
    deleteList () {
      if (this.selectedList) {
        const index = this.lists.findIndex(item => (item.value === this.selected))
        this.lists.splice(index, 1)
        this.updateCache()
        if (this.lists.length) {
          this.selected = this.lists[0].value
        } else {
          this.selected = ''
        }
      }
    },
    updateCache () {
      this.setData({
        key: 'randomList',
        val: {
          lists: this.lists
        }
      })
    },

    addContent () {
      this.selectedList.contents.push(this.content)
      this.updateCache()
      this.updateCloud()
      this.contentModalVisible = false
      this.content = ''
    },
    updateCloud () {
      this.$nextTick(() => {
        if (!tagCloud) {
          tagCloud = TagCloud(this.$refs.cloud, this.selectedList.contents, {
            radius: 200
          })
          this.$refs.cloud.addEventListener('click', this.cloudClick)
        } else {
          tagCloud.update(this.selectedList.contents)
        }
      })
    },
    cloudClick (e) {
      if (e.target.className === 'tagcloud--item') {
        const index = this.selectedList.contents.findIndex((item) => (item === e.target.innerText))
        this.selectedList.contents.splice(index, 1)
        tagCloud.update(this.selectedList.contents)
      }
    }
  }
})
</script>

<style scoped lang="scss">
.ant-space {
  display: flex;
  flex-wrap: wrap;
}

::v-deep(.cloud) {
  width: 400px;
  height: 400px;
  //margin: 0 auto;
  user-select: none;
  border-radius: .5rem;
  border: solid #999;

  .tagcloud--item {
    padding: 2px 4px;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 1.6rem;
  }

  .tagcloud--item:hover {
    background-color: rgba(0, 0, 0, .1);
    border: 1px solid #333;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    opacity: 1 !important;
    z-index: 100 !important;
  }
}
</style>
