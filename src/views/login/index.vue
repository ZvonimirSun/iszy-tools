<template>
  <div class="login-container">
    <div class="main">
      <a-form
        :layout="form.layout"
        :model="form"
        v-bind="{wrapperCol: { span: 24 }}"
      >
        <a-form-item required>
          <a-input
            v-model:value="form.userName"
            placeholder="账户"
            size="large"
            @keypress.enter="login"
          >
            <template #prefix>
              <User
                theme="outline"
                style="color:rgba(0,0,0,.25)"
              />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item required>
          <a-input-password
            v-model:value="form.password"
            placeholder="密码"
            size="large"
            @keypress.enter="login"
          >
            <template #prefix>
              <Lock
                theme="outline"
                style="color:rgba(0,0,0,.25)"
              />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            block
            size="large"
            :loading="loading"
            @click="login"
          >
            确定
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { User, Lock } from '@icon-park/vue-next'

export default {
  name: 'PageLogin',
  components: {
    User,
    Lock
  },
  data: () => ({
    form: {
      layout: 'horizontal',
      userName: '',
      password: ''
    },
    redirect: undefined,
    otherQuery: {},
    loading: false
  }),
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    login () {
      if (this.form.userName != null && this.form.password != null) {
        this.loading = true
        this.$store.dispatch('user/login', {
          userName: this.form.userName,
          password: this.form.password
        }).then((result) => {
          if (result) {
            this.$msg.success('登录成功！')
            this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          } else {
            this.$msg.error('用户名或密码错误！')
          }
        }).catch(() => {
          this.$msg.error('用户名或密码错误！')
        }).finally(() => {
          this.loading = false
        })
      }
    },
    getOtherQuery (query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  min-height: 100%;
  position: relative;
  //background: #F6F6F6;
  padding: 5rem 0 14.4rem;

  //.top {
  //  text-align: center;
  //  width: 100%;
  //
  //  .header {
  //    height: 4.4rem;
  //    line-height: 4.4rem;
  //    font-size: 3.3rem;
  //    color: #333333;
  //    font-weight: 600;
  //  }
  //
  //  .desc {
  //    font-size: 1.4rem;
  //    margin-top: 1.2rem;
  //    margin-bottom: 4rem;
  //    color: #999999;
  //  }
  //}

  .main {
    min-width: 26rem;
    width: 36.8rem;
    margin: 0 auto;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 1.6rem;
    margin: 4.8rem 0 2.4rem;
    text-align: center;
    color: #999999;
  }
}
</style>
