<template>
  <div>
    <!-- 用户管理 -->
    <el-card>
      <el-form label-width="80px" :model="formData">
        <el-row type="flex" justify="start">
          <el-col :span="3">
            <el-form-item label="用户名">
              <el-input v-model="formData.username" placeholder="用户名">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="结算省" v-model="formData.province">
              <el-select placeholder="结算省"></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="手机号">
              <el-input
                v-model="formData.mobile"
                placeholder="手机号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="用户状态" v-model="formData.status">
              <el-select placeholder="状态"></el-select>
            </el-form-item>
          </el-col>
             <el-form-item>
          <!-- 按钮 -->
          <el-button type="primary" icon="el-icon-search">查询</el-button>
          <el-button type="warning" icon="el-icon-refresh">重置</el-button>
        </el-form-item>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <!-- 表格区域 -->
      <el-row>
        <el-button icon="el-icon-circle-plus-outline">新增</el-button>
        <el-button type="primary" icon="el-icon-edit">修改</el-button>
        <el-button type="danger" icon="el-icon-delete">删除</el-button>
      </el-row>
      <el-table style="width: 100%">
        <el-table-column prop="username" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="roles" label="用户角色" width="180">
        </el-table-column>
        <el-table-column prop="status" label="用户状态"> </el-table-column>
        <el-table-column prop="mobile" label="手机号"> </el-table-column>
        <el-table-column prop="creator" label="创建者"> </el-table-column>
        <el-table-column prop="claimant" label="结算者"> </el-table-column>
        <el-table-column prop="time" label="创建时间"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      formData: {
        // 用户名
        username: '',
        // 结算省
        province: '',
        // 手机号
        mobile: '',
        // 用户状态
        status: ''
      }
    }
  },
  methods: {},
  created () {}
}
</script>
<style scoped></style>
