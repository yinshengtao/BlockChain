<template>
  <div class="container">
    <el-row type="flex" justify="center">
      <el-col :span="4">
        <img src="../../assets/logo.webp" alt="" class="image" />
      </el-col>
      <el-col :span="8">
        <p style="margin-top:20px">网间结算数据稽核系统</p>
      </el-col>
    </el-row>
    <el-form label-width="70px" label-position="left" :model="userInfo" :rules="rules"  ref="userInfo">
      <el-form-item label="用户名" prop='username'>
        <el-input v-model="userInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop='password'>
        <el-input v-model="userInfo.password" type='password'></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop='code'>
       <el-row type='flex' justify="center">
         <el-col>
           <el-input v-model="userInfo.code"></el-input>
           </el-col>
         <el-col>
           <img src="../../assets/logo.webp" alt="" class="code">
           </el-col>
       </el-row>
      </el-form-item>
      <el-form-item class="end">
        <el-button size='mini' @click="btnOK">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userInfo: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
          // 自定义校验规则
          // {validator: checkAge, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // {validator: checkAge, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
          // {validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录按钮
    btnOK () {
      // 重置表单
      this.$refs.userInfo.resetFields()
      // do something ......
      this.$router.push('/sideBar')
    }
  }
}
</script>

<style scoped>
.container {
  width: 600px;
  height: 350px;
  border: 1px solid #eee;
  /* background-color: pink; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.image {
  width: 80px;
  height: 50px;
  margin-top: 8px;
}
>>> .el-input__inner {
  width: 250px;
}
>>> .el-form {
  padding: 10px 100px;
}
.code {
  width: 70px;
  height: 40px;
}
.end {
  margin-left: 100px;
}
</style>
