<template>
  <div>
    <!-- 每日对账结果 -->
    <el-card>
      <el-form label-width="85px" label-position="left" :model="formData">
        <el-row type="flex">
          <!-- 省公司 -->
          <el-col :span='8'>
            <el-form-item label="省公司" >
             <el-select v-model="formData.provincial_company">
                <el-option v-for="item in ProvincialCompany" :key="item.id" :label="item.province" :value="item.province"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 业务类型 -->
          <el-col :span='8'>
            <el-form-item label="业务类型">
              <el-select v-model="formData.type">
                <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="">
          <!-- 下发状态 -->
          <el-col :span="8">
            <el-form-item label="下发状态">
              <el-select v-model="formData.lssueStatusValue">
              <el-option v-for="item in lssueStatus" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 生效日期区间 -->
          <el-col :span="8">
            <el-form-item label="生效日期区间" label-width="125px">
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
      <el-button size="small">文件下载</el-button>
      <!-- 表格区域 -->
      <el-table border>
        <el-table-column label="省公司"> </el-table-column>
        <el-table-column label="业务类型"> </el-table-column>
        <el-table-column label="对账文件名"> </el-table-column>
        <el-table-column label="生成时间"> </el-table-column>
        <el-table-column label="下发状态"> </el-table-column>
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
import { ProvincialCompany, typeList, lssueStatus } from '../../untils/data'
export default {
  name: 'Day',
  data () {
    return {
      ProvincialCompany: [],
      typeList: [],
      lssueStatus: [],
      formData: {
        // 省公司
        provincial_company: '全部',
        // 业务类型
        type: '全部',
        // 下发状态
        lssueStatusValue: '全部',
        time: ''
      }
    }
  },
  methods: {},
  created () {
    this.ProvincialCompany = ProvincialCompany
    this.typeList = typeList
    this.lssueStatus = lssueStatus
  }
}
</script>
<style scoped>
.el-table {
  margin-top: 20px;
}
</style>
