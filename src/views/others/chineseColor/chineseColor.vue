<template>
  <div
    class="wrapper"
    :style="{background: selectedColor?.hex || '#fff'}"
  >
    <div class="wrapper">
      <transition>
        <div
          v-show="selectedColor"
          class="selectedColor"
        >
          <div
            ref="selectedColorNameWrapper"
            class="seletedColorNameWrapper"
          >
            <div
              v-if="selectedColor"
              :style="{fontSize:selectedColorNameSize-8+'px',lineHeight:selectedColorNameSize+'px'}"
            >
              {{ selectedColor.name }}
            </div>
            <div
              v-if="selectedColor"
              :style="{fontSize:(selectedColorNameSize/2-16)+'px',lineHeight:(selectedColorNameSize/2-8)+'px'}"
            >
              {{ selectedColor.pinyin.toUpperCase() }}
            </div>
          </div>
          <div
            v-if="selectedColor"
            class="selectedColorDataWrapper"
          >
            <Space
              direction="vertical"
              :size="8"
            >
              <Title :level="4">
                CMYK
              </Title>
              <Space :size="8">
                <Progress
                  type="circle"
                  :percent="selectedColor.CMYK[0]"
                  stroke-color="cyan"
                  :width="80"
                >
                  <template #format>
                    <span style="color: cyan">{{ selectedColor.CMYK[0] }}</span>
                  </template>
                </Progress>
                <Progress
                  type="circle"
                  :percent="selectedColor.CMYK[1]"
                  stroke-color="magenta"
                  :width="80"
                >
                  <template #format>
                    <span style="color: magenta">{{ selectedColor.CMYK[1] }}</span>
                  </template>
                </Progress>
                <Progress
                  type="circle"
                  :percent="selectedColor.CMYK[2]"
                  stroke-color="yellow"
                  :width="80"
                >
                  <template #format>
                    <span style="color: yellow">{{ selectedColor.CMYK[2] }}</span>
                  </template>
                </Progress>
                <Progress
                  type="circle"
                  :percent="selectedColor.CMYK[3]"
                  stroke-color="black"
                  :width="80"
                >
                  <template #format>
                    <span style="color: black">{{ selectedColor.CMYK[3] }}</span>
                  </template>
                </Progress>
              </Space>
              <Title :level="4">
                RGB
              </Title>
              <Space :size="8">
                <Progress
                  type="circle"
                  :percent="selectedColor.RGB[0]/2.55"
                  stroke-color="red"
                  :width="80"
                >
                  <template #format>
                    <span style="color: red">{{ selectedColor.RGB[0] }}</span>
                  </template>
                </Progress>
                <Progress
                  type="circle"
                  :percent="selectedColor.RGB[1]/2.55"
                  stroke-color="green"
                  :width="80"
                >
                  <template #format>
                    <span style="color: green">{{ selectedColor.RGB[1] }}</span>
                  </template>
                </Progress>
                <Progress
                  type="circle"
                  :percent="selectedColor.RGB[2]/2.55"
                  stroke-color="blue"
                  :width="80"
                >
                  <template #format>
                    <span style="color: blue">{{ selectedColor.RGB[2] }}</span>
                  </template>
                </Progress>
              </Space>
              <Title :level="4">
                HEX
              </Title>
              <Paragraph style="font-size:20px;line-height:28px;color:white">
                {{ selectedColor.hex }}
              </Paragraph>
            </Space>
          </div>
        </div>
      </transition>
      <div
        class="colorList"
        :style="{height: selectedColor?'50%':'100%'}"
      >
        <div
          v-for="(color, index) in colors"
          :key="index"
          :style="{background: color.hex}"
          class="colorListItem"
          @click="selectedColor=color"
        >
          <div class="colorName">
            {{ color.name }}
          </div>
          <div class="colorPinyin">
            {{ color.pinyin.toUpperCase() }}
          </div>
          <div class="colorHEX">
            {{ color.hex.slice(1).toUpperCase() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick } from '@vue/runtime-dom'
import { ref, watch } from 'vue'
import colors from './colors.json'
import { Progress, Space, Typography } from 'ant-design-vue'

const { Title, Paragraph } = Typography

const selectedColor = ref()
const selectedColorNameWrapper = ref()

const selectedColorNameSize = ref(0)

watch(selectedColor, function () {
  resize()
})

function resize () {
  nextTick(() => {
    let minSize = parseFloat(getComputedStyle(selectedColorNameWrapper.value).height) / 3 * 2 - 50
    const width = parseFloat(getComputedStyle(selectedColorNameWrapper.value).width) - 50
    const nameSize = width / selectedColor.value.name.length
    if (nameSize < minSize) {
      minSize = nameSize
    }
    const pinyinSize = (width / selectedColor.value.pinyin.length) * 2
    if (pinyinSize < minSize) {
      minSize = pinyinSize
    }
    selectedColorNameSize.value = minSize
  })
}

</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;

  .wrapper {
    width: 100%;
    height: 100%;
    background-image: url("./texture.png");
  }
}

.selectedColor {
  height: 50%;
  display: flex;
  align-items: center;
  padding: .8rem;

  .seletedColorNameWrapper {
    height: 100%;
    width: 50%;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
  }

  .selectedColorDataWrapper {
    width: 50%;
    height: 100%;
    overflow: auto;
  }
}

.colorList {
  display: grid;
  grid-template-columns: repeat(auto-fill, 30rem);
  justify-content: space-between;
  gap: .8rem;
  color: white;
  overflow: auto;
  padding: .8rem;

  &Item {
    cursor: pointer;
    padding: .8rem;
    text-align: center;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: repeat(2, 50%);
    align-items: center;
    border-radius: .8rem;
    border: 1px #666666 solid;

    .colorName {
      grid-column: 1;
      grid-row: 1 / 3;
      border-right: 1px #dedede dashed;
      height: 100%;
    }

    .colorPinyin {
      border-bottom: 1px #dedede dashed;
    }
  }
}
</style>
