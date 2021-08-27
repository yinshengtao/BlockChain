<template>
  <div>
    <!-- 对账文件接受情况 -->
    <el-card>
      <el-form label-width="85px" label-position="left">
        <el-row type="flex">
          <!-- 文件上传方 -->
          <el-col>
            <el-form-item label="文件上传方">
              <el-select v-model="postedValue">
                <el-option v-for="item in posted" :key="item.value" :label='item.label' :value='item.value'></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 省公司 -->
          <el-col>
            <el-form-item label="省公司">
              <el-select></el-select>
            </el-form-item>
          </el-col>
          <!-- 业务类型 -->
          <el-col>
            <el-form-item label="业务类型">
              <el-select v-model="typeValue">
                <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="">
          <!-- 文件状态 -->
          <el-col :span="8">
            <el-form-item label="文件状态">
              <el-select v-model="FileStatusvalue">
                <el-option v-for="item in FileStatus" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 处理日期时间 -->
          <el-col :span="8">
            <el-form-item label="处理日期时间区间" label-width="125px">
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
  name: 'Accept',
  data () {
    return {
      // 文件上发方
      posted: [
        { value: '0', label: '全部' },
        { value: '1', label: '全国中心' },
        { value: '2', label: '省公司' }
      ],
      postedValue: '0',
      // 业务类型
      typeList: [
        { value: '0', label: '全部' },
        { value: '1', label: '语音' },
        { value: '2', label: '短信' },
        { value: '3', label: '彩信' }
      ],
      typeValue: '0',
      FileStatus: [
        { value: '0', label: '全部' },
        { value: '1', label: '已处理' },
        { value: '2', label: '校验不通过' }
      ],
      FileStatusvalue: '0',
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
