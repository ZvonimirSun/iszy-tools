<template>
  <div class="oreooo">
    <div class="content-loading" v-show="loading">
      <img :src="assets.Oreo" alt="" class="loading-img">
    </div>
    <div class="imgContainer">
      <img :src="assets.O" ref="O">
      <img :src="assets.R" ref="R">
      <img :src="assets.Ob" ref="Ob">
    </div>
    <div class="container" v-show="!loading && !output">
      <div class="title">
        <div class="meta">我想要：</div>
        <div class="input str" v-show="oreoStr"><span>{{ oreoStr }}</span></div>
        <div class="input str placeholder" v-show="!oreoStr">
          <span>奥利奥...</span>
          <img :src="assets.random" class="icon" @click="getRandom()">
        </div>
      </div>
      <div class="control">
        <div class="btn" @click="strAdd('o')">
          +奥
        </div>
        <div class="btn" @click="strAdd('r')">
          +利
        </div>
        <div class="btn" @click="strAdd('-')">
          +与
        </div>
        <div class="btn" @click="strAdd('-1')">
          -1
        </div>
      </div>
      <div class="index-btn" @click="generateImage">
        生成
      </div>
    </div>
    <div class="container" v-show="!loading && output">
      <div class="title">
        <div class="meta">这是你的</div>
        <div class="output str">{{ oreoStr }}</div>
      </div>
      <div class="output-image">
        <canvas ref="oreo_canvas" width="240" height="500">您的浏览器不支持 HTML5 canvas 标签。</canvas>
      </div>
      <div @click="showImage" class="btn">查看图片</div>
<!--      <div v-else @click="downloadImage" class="btn">保存图片</div>-->
      <div @click="backToInput" class="btn">返回</div>
    </div>
  </div>
</template>

<script>
import O from './assets/image/O.png'
import R from './assets/image/R.png'
import Ob from './assets/image/Ob.png'
import Oreo from './assets/image/oreo.png'
import random from './assets/image/random.png'
import Axios from 'axios'

export default {
  name: 'index.vue',
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
      random
    }
  }),
  computed: {
    oreoStr: function () {
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
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    strAdd (str) {
      switch (str) {
        case 'o':
          if (this.oreoArr.length === 0) {
            this.oreoArr.push('O')
          } else {
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
    getRandom () {
      for (let i = 0; i < Math.floor(Math.random() * 8) + 1; i++) {
        const random = Math.random() * 5
        let str = ''
        if (random < 1) {
          str = '-'
        } else if (random < 3) {
          str = 'o'
        } else {
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
    generateImage () {
      if (this.oreoArr.length > 0) {
        const that = this
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
              height: thisLayer === 'R' ? 155 : 160
            }
            drawArr.splice(0, 0, drawItem)
            height += 24
          } else {
            height += 72
          }
        }
        height += 160 - 24 // Add the last image's height.

        const canvas = this.$refs.oreo_canvas
        canvas.height = height
        const ctx = canvas.getContext('2d')

        drawArr.forEach(item => {
          ctx.drawImage(item.image, item.x, item.y, item.width, item.height)
        })

        this.imgUrl = canvas.toDataURL('image/png')
        setTimeout(() => {
          that.loading = false
        }, 1000)
      }
    },
    downloadImage () {
      const a = document.createElement('a')
      a.href = this.imgUrl
      a.download = 'oreo.png'
      a.dispatchEvent(new MouseEvent('click', {}))
    },
    showImage () {
      const winRef = window.open('', '_blank')
      Axios.get(this.imgUrl, { responseType: 'blob' }).then(res => {
        winRef.location = URL.createObjectURL(res.data)
      })
    },
    backToInput () {
      this.output = false
      this.oreoArr = []
      this.imgUrl = ''
    }
    // isIOS () {
    //   const u = navigator.userAgent
    //   const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    //   return isiOS
    // }
  }
}
</script>

<style scoped lang="scss">
@font-face {
  font-family: "Seto";
  src: url("./assets/font/Seto.eot");
  src: url("./assets/font/Seto.eot?#iefix") format("embedded-opentype"), url("./assets/font/Seto.woff") format("woff"), url("./assets/font/Seto.ttf") format("truetype"), url("./assets/font/Seto.svg#Seto") format("svg");
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
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
      }
    }

    .loading-img {
      width: 200px;
      height: 200px;
      margin: 0 auto;
      animation: rotate 6s infinite linear;
    }
  }

  .container {
    position: relative;
    text-align: center;
    background-color: #fff;
    padding: 25px;
    border-radius: 25px;
    box-shadow: 0 8px 8px rgb(0 0 0 / 13%);

    .title {
      .meta {
        color: #515151;
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 16px;
      }

      .str {
        color: #515151;
        font-size: 46px;
        line-height: 54px;
        margin-bottom: 16px;
        word-break: break-all;

        &.input {
          display: flex;
          align-items: center;
          border: 2px solid #eee;
          background: #f6f6f6;
          padding: 8px;
          word-break: break-all;
          border-radius: 25px;

          &.placeholder {
            color: #ccc;
          }

          span {
            flex: 1;
          }

          .icon {
            width: 25px;
            height: 25px;
            margin: 0 5px;
            opacity: .4;
            transition: opacity .2s;
          }
        }
      }
    }

    .btn {
      display: inline-block;
      border: 2px solid #515151;
      font-size: 20px;
      line-height: 28px;
      padding: 5px 16px;
      margin: 5px;
      border-radius: 25px;

      &:hover {
        cursor: pointer;
        background-color: #515151;
        color: #ffffff;
      }
    }

    .index-btn {
      background-color: #515151;
      color: #fff;
      line-height: 38px;
      font-size: 30px;
      margin: 16px -25px -25px;
      padding: 12px;
      border-radius: 0 0 25px 25px;
    }

    .output-image {
      margin-bottom: 16px;
    }
  }
}
</style>
