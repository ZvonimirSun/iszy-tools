<template>
  <div class="login-container">
    <div class="main">
      <Form :layout="form.layout" :model="form" v-bind="{wrapperCol: { span: 24 }}">
        <Item required>
          <Input v-model:value="form.username" placeholder="账户" size="large">
            <template #prefix><UserOutlined style="color:rgba(0,0,0,.25)"/></template>
          </Input>
        </Item>
        <Item required>
          <Password v-model:value="form.password" placeholder="密码" size="large">
            <template #prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
          </Password>
        </Item>
        <Item>
          <Button type="primary" block size="large" @click="login" :loading="loading">
            确定
          </Button>
        </Item>
      </Form>
    </div>
    <div class="footer">
      <div class="copyright"> Copyright © 2020 ISZY</div>
    </div>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { Form, Input, Button } from 'ant-design-vue'
const { Item } = Form
const { Password } = Input

export default {
  name: 'Login',
  components: {
    UserOutlined,
    LockOutlined,
    Form,
    Input,
    Button,
    Item,
    Password
  },
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
  data: () => ({
    form: {
      layout: 'horizontal',
      username: '',
      password: ''
    },
    redirect: undefined,
    otherQuery: {},
    loading: false
  }),
  methods: {
    login () {
      if (this.form.username !== '' && this.form.password !== '') {
        this.loading = true
        this.$store.dispatch('user/login', {
          username: this.form.username,
          password: this.form.password
        }).then(() => {
          this.$msg.success('登录成功！')
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          this.loading = false
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
  padding: 50px 0 144px;

  //.top {
  //  text-align: center;
  //  width: 100%;
  //
  //  .header {
  //    height: 44px;
  //    line-height: 44px;
  //    font-size: 33px;
  //    color: #333333;
  //    font-weight: 600;
  //  }
  //
  //  .desc {
  //    font-size: 14px;
  //    margin-top: 12px;
  //    margin-bottom: 40px;
  //    color: #999999;
  //  }
  //}

  .main {
    min-width: 260px;
    width: 368px;
    margin: 0 auto;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;
    color: #999999;
  }
}
</style>
