<template>
  <el-form label-position="top">
    <el-form-item label="小写">
      <el-input
        v-model="num"
        @change="fromNum"
      />
    </el-form-item>
    <el-form-item label="中文小写">
      <el-input
        v-model="s"
        @change="fromS"
      />
    </el-form-item>
    <el-form-item label="中文大写">
      <el-input
        v-model="b"
        @change="fromB"
      />
    </el-form-item>
    <el-form-item label="中文金额">
      <el-input
        v-model="money"
        readonly
      />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import Nzh from 'nzh'

const money = ref('')
const s = ref('')
const b = ref('')
const num = ref('')

function fromNum (num: string) {
  if (!num) {
    return
  }
  try {
    s.value = Nzh.cn.encodeS(num)
    b.value = Nzh.cn.encodeB(num)
    money.value = Nzh.cn.toMoney(num)
  } catch (e) {}
}

function fromS (s: string) {
  if (!s) {
    return
  }
  try {
    num.value = Nzh.cn.decodeS(s)
    b.value = Nzh.cn.encodeB(num.value)
    money.value = Nzh.cn.toMoney(num.value)
  } catch (e) {}
}

function fromB (b: string) {
  if (!b) {
    return
  }
  try {
    num.value = Nzh.cn.decodeB(b)
    s.value = Nzh.cn.encodeS(num.value)
    money.value = Nzh.cn.toMoney(num.value)
  } catch (e) {}
}
</script>

<style scoped>

</style>
