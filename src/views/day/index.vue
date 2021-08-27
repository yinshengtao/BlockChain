<template>
  <div>
    <!-- 对账文件接受情况 -->
    <el-card>
      <el-form label-width="85px" label-position="left">
        <el-row type="flex">
          <!-- 省公司 -->
          <el-col :span='8'>
            <el-form-item label="省公司">
              <el-select> </el-select>
            </el-form-item>
          </el-col>
          <!-- 业务类型 -->
          <el-col :span='8'>
            <el-form-item label="业务类型">
               <el-select v-model="typeValue">
                <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="">
          <!-- 下发状态 -->
          <el-col :span="8">
            <el-form-item label="下发状态">
              <el-select v-model="lssueStatusValue">
              <el-option v-for="item in lssueStatus" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 生效日期区间 -->
          <el-col :span="8">
            <el-form-item label="生效日期区间" label-width="125px">
              <el-date-picker
                v-model="value1"
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
export default {
  data () {
    return {
      // 业务类型
      typeList: [
        { value: '0', label: '全部' },
        { value: '1', label: '语音' },
        { value: '2', label: '短信' },
        { value: '3', label: '彩信' }
      ],
      typeValue: '0',
      // 下发状态
      lssueStatus: [
        { value: '0', label: '全部' },
        { value: '1', label: '已下发' },
        { value: '2', label: '未下发' }
      ],
      lssueStatusValue: '0',
      value1: ''
    }
  },
  methods: {},
  created () {}
}
</script>
<style scoped>
.el-table {
  margin-top: 20px;
}
</style>
