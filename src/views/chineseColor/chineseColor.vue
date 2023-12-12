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
            class="selectedColorNameWrapper"
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
            <el-space
              direction="vertical"
              :size="8"
            >
              <a-typography-title :level="4">
                CMYK
              </a-typography-title>
              <el-space :size="8">
                <el-progress
                  type="circle"
                  :percentage="selectedColor.CMYK[0]"
                  color="cyan"
                  :width="80"
                >
                  <template #default="{ percentage }">
                    <span style="color: cyan">{{ percentage }}</span>
                  </template>
                </el-progress>
                <el-progress
                  type="circle"
                  :percentage="selectedColor.CMYK[1]"
                  color="magenta"
                  :width="80"
                >
                  <template #default="{ percentage }">
                    <span style="color: magenta">{{ percentage }}</span>
                  </template>
                </el-progress>
                <el-progress
                  type="circle"
                  :percentage="selectedColor.CMYK[2]"
                  color="yellow"
                  :width="80"
                >
                  <template #default="{ percentage }">
                    <span style="color: yellow">{{ percentage }}</span>
                  </template>
                </el-progress>
                <el-progress
                  type="circle"
                  :percentage="selectedColor.CMYK[3]"
                  color="black"
                  :width="80"
                >
                  <template #default="{ percentage }">
                    <span style="color: black">{{ percentage }}</span>
                  </template>
                </el-progress>
              </el-space>
              <a-typography-title :level="4">
                RGB
              </a-typography-title>
              <el-space :size="8">
                <el-progress
                  type="circle"
                  :percentage="selectedColor.RGB[0]/2.55"
                  color="red"
                  :width="80"
                >
                  <template #default>
                    <span style="color: red">{{ selectedColor.RGB[0] }}</span>
                  </template>
                </el-progress>
                <el-progress
                  type="circle"
                  :percentage="selectedColor.RGB[1]/2.55"
                  color="green"
                  :width="80"
                >
                  <template #default>
                    <span style="color: green">{{ selectedColor.RGB[1] }}</span>
                  </template>
                </el-progress>
                <el-progress
                  type="circle"
                  :percentage="selectedColor.RGB[2]/2.55"
                  color="blue"
                  :width="80"
                >
                  <template #default>
                    <span style="color: blue">{{ selectedColor.RGB[2] }}</span>
                  </template>
                </el-progress>
              </el-space>
              <a-typography-title :level="4">
                HEX
              </a-typography-title>
              <a-typography-paragraph style="font-size:20px;line-height:28px;color:white">
                {{ selectedColor.hex }}
              </a-typography-paragraph>
            </el-space>
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
import colors from './colors.json'

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

  .selectedColorNameWrapper {
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
