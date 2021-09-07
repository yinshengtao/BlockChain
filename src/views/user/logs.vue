<template>
  <div>
    <!-- 日志管理 -->
    <el-card>
      <el-form label-width="100px" :model="formData">
        <el-row>
          <el-col :span="5">
            <el-form-item label="登录名称">
              <el-input
                placeholder="登录名称"
                v-model="formData.username"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="登入状态" v-model="formData.status">
              <el-select placeholder="选择"></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
              <el-button type="warning" icon="el-icon-refresh">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!-- 列表区域 -->
    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="number" label="访问编号" width="180">
        </el-table-column>
        <el-table-column prop="LoginName" label="登录名" sortable width="180">
        </el-table-column>
        <el-table-column prop="address" label="登录地址"> </el-table-column>
        <el-table-column prop="browser" label="浏览器"> </el-table-column>
        <el-table-column prop="system" label="操作系统"> </el-table-column>
        <el-table-column prop="status" label="登录状态"> </el-table-column>
        <el-table-column prop="message" label="操作信息"> </el-table-column>
        <el-table-column prop="time" sortable label="登录时间">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Logs',
  data () {
    return {
      // 表单
      formData: {
        username: '',
        status: ''
      }
    }
  },
  methods: {},
  created () {}
}
</script>
<style scoped></style>
