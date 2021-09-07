<template>
  <div>
    <!-- 对账文件接受情况 -->
    <el-card>
      <el-form label-width="85px" label-position="left" :model="formData">
        <el-row type="flex">
          <!-- 文件上传方 -->
          <el-col>
            <el-form-item label="文件上传方">
              <el-select v-model="formData.file_send_address">
                <el-option v-for="item in posted" :key="item.value" :label='item.label' :value='item.label'></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 省公司 -->
          <el-col>
            <el-form-item label="省公司">
              <el-select v-model="formData.provincial_company">
                <el-option v-for="item in ProvincialCompany" :key="item.id" :label="item.province" :value="item.province"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 业务类型 -->
          <el-col>
            <el-form-item label="业务类型">
              <el-select v-model="formData.type">
                <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" >
          <!-- 文件状态 -->
          <el-col :span="8">
            <el-form-item label="文件状态">
              <el-select v-model="formData.state">
                <el-option v-for="item in formData.FileStatus" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 处理日期时间 -->
          <el-col :span="8">
            <el-form-item label="处理日期时间区间" label-width="125px">
              <el-date-picker
                v-model="formData.time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-button size="small">查询</el-button>
      <el-button size="small">导出</el-button>
      <el-button size="small">手工重传</el-button>
      <!-- 表格区域 -->
      <el-table border>
        <el-table-column label="文件上发方"> </el-table-column>
        <el-table-column label="省公司"> </el-table-column>
        <el-table-column label="业务类型"> </el-table-column>
        <el-table-column label="文件名"> </el-table-column>
        <el-table-column label="处理时间"> </el-table-column>
        <el-table-column label="文件状态"> </el-table-column>
        <el-table-column label="错误代码"> </el-table-column>
        <el-table-column label="错误信息"> </el-table-column>
      </el-table>
      <el-pagination
         :page-sizes="[10, 20, 50, 100]"
         :page-size="100"
         layout="total, sizes"
         :total="3">
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
import { ProvincialCompany, posted, typeList, FileStatus } from '../../untils/data'
export default {
  name: 'Accept',
  data () {
    return {
      posted: [],
      ProvincialCompany: [],
      typeList: [],
      FileStatus: [],
      formData: {
        // 文件上传方
        file_send_address: '全部',
        // 省公司
        provincial_company: '全部',
        // 文件类型
        type: '全部',
        // 文件状态
        state: '全部',
        // 时间
        time: ''
      }
    }
  },
  methods: {},
  created () {
    this.ProvincialCompany = ProvincialCompany
    this.posted = posted
    this.typeList = typeList
    this.FileStatus = FileStatus
  }
}
</script>
<style scoped>
.el-table {
  margin-top: 20px;
}
</style>
