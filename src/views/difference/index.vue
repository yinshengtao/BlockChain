<template>
  <div>
    <!-- 对账文件接受情况 -->
    <el-card>
      <el-form label-width="90px" label-position="left">
        <el-row type="flex">
          <!-- 省公司 -->
          <el-col>
            <el-form-item label="省公司">
              <el-select> </el-select>
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
          <!-- 对端运营商 -->
          <el-col>
            <el-form-item label="对端运营商">
              <el-select v-model="operatorsValue">
                <el-option v-for="item in operators" :key="item.key" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 结算方向 -->
          <el-col>
            <el-form-item label="结算方向">
              <el-select v-model="SettlementDirectionValue">
                <el-option v-for="item in SettlementDirection" :key="item.value" :label="item.label" :value="item.value"></el-option>
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
        <el-row type="flex">
          <!-- 主叫长途类型 -->
          <el-col >
            <el-form-item label="主叫长途类型" label-width='100px'>
              <el-select v-model="MainLongTypeValue">
                <el-option v-for="item in MainLongType" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 被叫长途类型 -->
          <el-col >
            <el-form-item label="被叫长途类型" label-width='100px'>
              <el-select v-model="KnownLongTypeValue">
                <el-option v-for="item in KnownLongType" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 主叫网络类型 -->
          <el-col >
            <el-form-item label="主叫网络类型" label-width='100px'>
              <el-select v-model="KnownNetworkTypeValue">
                <el-option v-for="item in KnownNetworkType" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 被叫网络类型 -->
          <el-col >
            <el-form-item label="被叫网络类型" label-width='100px'>
               <el-select v-model="MainNetworkTypeValue">
                <el-option v-for="item in MainNetworkType" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-button size="small">查询</el-button>
      <el-button size="small">导出</el-button>
      <!-- 表格区域 -->
      <el-table border>
        <el-table-column label="对账日期"> </el-table-column>
        <el-table-column label="省公司"> </el-table-column>
        <el-table-column label="业务类型"> </el-table-column>
        <el-table-column label="对端运营商"> </el-table-column>
        <el-table-column label="结算方向"> </el-table-column>
        <el-table-column label="主叫长途类型"> </el-table-column>
        <el-table-column label="被叫长途类型"> </el-table-column>
        <el-table-column label="主叫网络类型"> </el-table-column>
        <el-table-column label="被叫网络类型"> </el-table-column>
        <el-table-column label="集中系统话单张数"> </el-table-column>
        <el-table-column label="省系统话单张数"> </el-table-column>
        <el-table-column label="话单张数累计差异"> </el-table-column>
        <el-table-column label="集中系统通话时长（分钟）"> </el-table-column>
        <el-table-column label="省系统通话时长（分钟）"> </el-table-column>
        <el-table-column label="通话时长累计差异（分钟）"> </el-table-column>
        <el-table-column label="集中系统结算全额（元）"> </el-table-column>
        <el-table-column label="省系统结算金额（元）"> </el-table-column>
        <el-table-column label="结算全额累计差异（元）"> </el-table-column>
        <el-table-column label="对账差异率（%）"> </el-table-column>
      </el-table>
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        :page-size="100"
        layout="sizes"
        :total="3"
      >
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
      // 对端运营商
      operators: [
        { value: '0', label: '全部' },
        { value: '1', label: '联通' },
        { value: '2', label: '电信' },
        { value: '3', label: '铁通' }
      ],
      operatorsValue: '0',
      // 结算方向
      SettlementDirection: [
        { value: '0', label: '全部' },
        { value: '1', label: '结入' },
        { value: '2', label: '结出' }
      ],
      SettlementDirectionValue: '0',
      // 主叫长途类型
      MainLongType: [
        { value: '0', label: '全部' },
        { value: '1', label: '本地' },
        { value: '2', label: '异地' }
      ],
      MainLongTypeValue: '0',
      // 被叫长途类型
      KnownLongType: [
        { value: '0', label: '全部' },
        { value: '1', label: '本地' },
        { value: '2', label: '异地' }
      ],
      KnownLongTypeValue: '0',
      // 主叫网络类型
      MainNetworkType: [
        { value: '0', label: '全部' },
        { value: '1', label: '移网' },
        { value: '2', label: '固网' }
      ],
      MainNetworkTypeValue: '0',
      // 被叫网络类型
      KnownNetworkType: [
        { value: '0', label: '全部' },
        { value: '1', label: '移网' },
        { value: '2', label: '固网' }
      ],
      KnownNetworkTypeValue: '0',
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
