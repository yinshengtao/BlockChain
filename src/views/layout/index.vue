<template>
  <div>
    <el-row class="navBar" type="flex">
      <el-col :span="3">
        <img src="../../assets/ChinaMobile.png" alt="" class="image" />
      </el-col>
      <el-col :span="19">
        <p>网间数据稽核区块链系统</p>
      </el-col>
      <el-col :span="2">
        <img src="../../assets/logo.webp" alt="" class="user" />
      </el-col>
    </el-row>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-row>
      <el-col :span="3.8">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="#2184ca"
          text-color="#ffffff"
          active-text-color="#a9a9a9"
          router
        >
          <el-menu-item v-model="isCollapse">
            <i class="el-icon-s-fold"></i>
          </el-menu-item>
          <!-- <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
                </template>
                    <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu> -->
          <el-menu-item index="accept">
            <i class="el-icon-menu"></i>
            <span slot="title">对账文件接受</span>
          </el-menu-item>
          <el-menu-item index="day">
            <i class="el-icon-menu"></i>
            <span slot="title">每日对账结果</span>
          </el-menu-item>
          <el-menu-item index="difference">
            <i class="el-icon-menu"></i>
            <span slot="title">对账差异分析</span>
          </el-menu-item>
          <el-menu-item index="statistics">
            <i class="el-icon-menu"></i>
            <span slot="title">数据统计</span>
          </el-menu-item>
          <!-- <el-menu-item index="user">
            <i class="el-icon-menu"></i>
            <span slot="title">系统管理</span>
          </el-menu-item> -->
          <el-submenu index="user">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">系统管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="userInfo">用户管理</el-menu-item>
                    <el-menu-item index="logs">日志管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
      </el-col>
      <router-view></router-view>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'SideBar',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {}
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 89vh;
}
.navBar {
  width: 100%;
  height: 60px;
  color: #fff;
  font-weight: 700;
  background-color: #2184ca;
}
.image {
  margin-top: 7px;
  margin-left: 20px;
}
.user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 10px;
}
i {
  color: #fff;
}
</style>
