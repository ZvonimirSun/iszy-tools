<script>
import Axios from 'axios'
import O from './assets/image/O.png'
import Ob from './assets/image/Ob.png'
import Oreo from './assets/image/oreo.png'
import R from './assets/image/R.png'
import random from './assets/image/random.png'

export default {
  name: 'GameOreooo',
  data: () => ({
    output: false,
    loading: true,
    oreoArr: [],
    imgUrl: '',

    assets: {
      O,
      R,
      Ob,
      Oreo,
      random,
    },
  }),
  computed: {
    oreoStr() {
      let str = ''
      for (let index = 0; index < this.oreoArr.length; index++) {
        const item = this.oreoArr[index]
        switch (item) {
          case 'O':
          case 'Ob':
            str += '奥'
            break
          case 'R':
            str += '利'
            break
          case '-':
            str += '与'
            break
          default:
            break
        }
      }
      return str
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    strAdd(str) {
      switch (str) {
        case 'o':
          if (this.oreoArr.length === 0) {
            this.oreoArr.push('O')
          }
          else {
            this.oreoArr.push('Ob')
          }
          break
        case 'r':
          this.oreoArr.push('R')
          break
        case '-':
          if (this.oreoArr.length > 0 && this.oreoArr[this.oreoArr.length - 1] !== '-') {
            this.oreoArr.push('-')
          }
          break
        case '-1':
          if (this.oreoArr.length > 0) {
            this.oreoArr.pop()
          }
          break
        default:
          break
      }
    },
    getRandom() {
      for (let i = 0; i < Math.floor(Math.random() * 8) + 1; i++) {
        const random = Math.random() * 5
        let str = ''
        if (random < 1) {
          str = '-'
        }
        else if (random < 3) {
          str = 'o'
        }
        else {
          str = 'r'
        }
        for (let j = 0; j < Math.floor(Math.random() * 4) + 1; j++) {
          console.log(i, str, j)
          this.strAdd(str)
        }
      }
      if (this.oreoArr[this.oreoArr.length - 1] === '-') {
        this.oreoArr.pop()
      }
      if (this.oreoArr.length === 0) {
        this.getRandom()
      }
    },
    generateImage() {
      if (this.oreoArr.length > 0) {
        this.loading = true
        this.output = true
        const oreoArr = this.oreoArr
        const drawArr = []

        // Delete '-' at the end
        if (oreoArr[oreoArr.length - 1] === '-') {
          oreoArr.pop()
        }

        // Canvas height calculation
        let height = 0
        for (let index = 0; index < oreoArr.length; index++) {
          const thisLayer = oreoArr[index]
          if (thisLayer !== '-') {
            const drawItem = {
              image: this.$refs[thisLayer],
              x: thisLayer === 'R' ? 10 : 0,
              y: height,
              width: thisLayer === 'R' ? 220 : 240,
              height: thisLayer === 'R' ? 155 : 160,
            }
            drawArr.splice(0, 0, drawItem)
            height += 24
          }
          else {
            height += 72
          }
        }
        height += 160 - 24 // Add the last image's height.

        const canvas = this.$refs.oreo_canvas
        canvas.height = height
        const ctx = canvas.getContext('2d')

        drawArr.forEach((item) => {
          ctx.drawImage(item.image, item.x, item.y, item.width, item.height)
        })
        Axios.get(canvas.toDataURL('image/png'), { responseType: 'blob' }).then((res) => {
          this.imgUrl = URL.createObjectURL(res.data)
        })
        setTimeout(() => {
          this.loading = false
        }, 1000)
      }
    },
    backToInput() {
      this.output = false
      this.oreoArr = []
      this.imgUrl = ''
    },
  },
}
</script>

<template>
  <div class="oreooo">
    <div
      v-show="loading"
      class="content-loading"
    >
      <img
        :src="assets.Oreo"
        alt=""
        class="loading-img"
      >
    </div>
    <div class="imgContainer">
      <img
        ref="O"
        :src="assets.O"
      >
      <img
        ref="R"
        :src="assets.R"
      >
      <img
        ref="Ob"
        :src="assets.Ob"
      >
    </div>
    <div
      v-show="!loading && !output"
      class="wrapper"
    >
      <div class="title">
        <div class="meta">
          我想要：
        </div>
        <div
          v-show="oreoStr"
          class="input str"
        >
          <span>{{ oreoStr }}</span>
        </div>
        <div
          v-show="!oreoStr"
          class="input str placeholder"
        >
          <span>奥利奥...</span>
          <img
            :src="assets.random"
            class="icon"
            @click="getRandom()"
          >
        </div>
      </div>
      <div class="control">
        <div
          class="btn"
          @click="strAdd('o')"
        >
          +奥
        </div>
        <div
          class="btn"
          @click="strAdd('r')"
        >
          +利
        </div>
        <div
          class="btn"
          @click="strAdd('-')"
        >
          +与
        </div>
        <div
          class="btn"
          @click="strAdd('-1')"
        >
          -1
        </div>
      </div>
      <div
        class="index-btn"
        @click="generateImage"
      >
        生成
      </div>
    </div>
    <div
      v-show="!loading && output"
      class="wrapper"
    >
      <div class="title">
        <div class="meta">
          这是你的
        </div>
        <div class="str output">
          {{ oreoStr }}
        </div>
      </div>
      <div class="output-image">
        <canvas
          ref="oreo_canvas"
          width="240"
          height="500"
        >您的浏览器不支持 HTML5 canvas 标签。</canvas>
      </div>
      <div class="btn">
        <a
          :href="imgUrl"
          target="_blank"
        >查看图片</a>
      </div>
      <!--      <div v-else @click="downloadImage" class="btn">保存图片</div> -->
      <div
        class="btn"
        @click="backToInput"
      >
        返回
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: "Seto";
  src: url("./assets/font/Seto.eot");
  src: url("./assets/font/Seto.eot") format("embedded-opentype"), url("./assets/font/Seto.woff") format("woff"), url("./assets/font/Seto.ttf") format("truetype"), url("./assets/font/Seto.svg") format("svg");
  font-style: normal;
  font-weight: normal;
}

.oreooo {
  font-family: "Seto", serif;
  width: 100%;
  height: 100%;
  position: relative;

  * {
    user-select: none;
  }

  .imgContainer {
    display: none;
  }

  .content-loading {
    position: absolute;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    .loading-img {
      width: 20rem;
      height: 20rem;
      margin: 0 auto;
      animation: rotate 6s infinite linear;
    }
  }

  .wrapper {
    position: relative;
    text-align: center;
    background-color: var(--el-fill-color-lighter);
    padding: 2.5rem;

    .title {
      .meta {
        color: var(--el-text-color-primary);
        font-size: 2.4rem;
        line-height: 3.2rem;
        margin-bottom: 1.6rem;
      }

      .str {
        color: var(--el-text-color-primary);
        font-size: 4.6rem;
        line-height: 5.4rem;
        margin-bottom: 1.6rem;
        word-break: break-all;

        &.input {
          display: flex;
          align-items: center;
          border: .2rem solid #eee;
          background-color: var(--el-input-bg-color, var(--el-fill-color-blank));
          padding: .8rem;
          word-break: break-all;
          border-radius: 2.5rem;

          &.placeholder {
            color: #ccc;
          }

          span {
            flex: 1;
          }

          .icon {
            width: 2.5rem;
            height: 2.5rem;
            margin: 0 .5rem;
            opacity: .4;
            transition: opacity .2s;
          }
        }
      }
    }

    .btn {
      display: inline-block;
      border: .2rem solid var(--el-text-color-primary);
      font-size: 2rem;
      line-height: 2.8rem;
      padding: .5rem 1.6rem;
      margin: .5rem;
      border-radius: 2.5rem;

      a {
        color: var(--el-text-color-primary);
      }

      &:hover {
        cursor: pointer;
        background-color: #515151;
        color: var(--el-color-white);

        a {
          color: var(--el-color-white);
        }
      }
    }

    .index-btn {
      background-color: #515151;
      color: #fff;
      line-height: 3.8rem;
      font-size: 3rem;
      margin: 1.6rem -2.5rem -2.5rem;
      padding: 1.2rem;
      border-radius: 0 0 2.5rem 2.5rem;
      cursor: pointer;
    }

    .output-image {
      margin-bottom: 1.6rem;
    }
  }
}
</style>
