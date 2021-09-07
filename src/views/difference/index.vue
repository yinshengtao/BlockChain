<template>
  <div>
    <!-- 对账文件接受情况 -->
    <el-card>
      <el-form label-width="90px" label-position="left" :model="formData">
        <el-row type="flex" :gutter="20">
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
          <!-- 对端运营商 -->
          <el-col>
            <el-form-item label="对端运营商">
              <el-select v-model="formData.operatorsValue">
                <el-option v-for="item in operators" :key="item.key" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 结算方向 -->
          <el-col>
            <el-form-item label="结算方向">
              <el-select v-model="formData.SettlementDirectionValue">
                <el-option v-for="item in SettlementDirection" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" :gutter="20">
          <!-- 主叫长途类型 -->
          <el-col >
            <el-form-item label="主叫长途类型" label-width='100px'>
              <el-select v-model="formData.MainLongTypeValue">
                <el-option v-for="item in LongType" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 被叫长途类型 -->
          <el-col >
            <el-form-item label="被叫长途类型" label-width='100px'>
              <el-select v-model="formData.KnownLongTypeValue">
                <el-option v-for="item in LongType" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 主叫网络类型 -->
          <el-col >
            <el-form-item label="主叫网络类型" label-width='100px'>
              <el-select v-model="formData.KnownNetworkTypeValue">
                <el-option v-for="item in NetworkType" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 被叫网络类型 -->
          <el-col >
            <el-form-item label="被叫网络类型" label-width='100px'>
               <el-select v-model="formData.MainNetworkTypeValue">
                <el-option v-for="item in NetworkType" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" :gutter="20"  >
          <!-- 主叫号码类型 -->
          <el-col>
            <el-form-item  label="主叫号码类型" label-width='100px'>
              <el-select v-model="formData.KnownTelTypeValue">
                  <el-option v-for="item in TelType" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 被叫号码类型 -->
          <el-col>
            <el-form-item  label="主叫号码类型" label-width='100px'>
              <el-select v-model="formData.MainTelTypeValue">
                  <el-option v-for="item in TelType" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
           <!-- 处理日期时间 -->
          <el-col>
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
import { ProvincialCompany, typeList, operators, SettlementDirection, LongType, NetworkType, TelType } from '../../untils/data'
export default {
  name: 'Difference',
  data () {
    return {
      ProvincialCompany: [],
      typeList: [],
      operators: [],
      SettlementDirection: [],
      LongType: [],
      NetworkType: [],
      TelType: [],
      formData: {
        // 省公司
        provincial_company: '全部',
        // 业务类型
        type: '全部',
        // 对端运营商
        operatorsValue: '全部',
        // 结算方向
        SettlementDirectionValue: '全部',
        // 主叫长途类型
        MainLongTypeValue: '全部',
        // 被叫长途类型
        KnownLongTypeValue: '全部',
        // 主叫网络类型
        MainNetworkTypeValue: '全部',
        // 被叫网络类型
        KnownNetworkTypeValue: '全部',
        // 主叫号码类型
        KnownTelTypeValue: '全部',
        // 主叫号码类型
        MainTelTypeValue: '全部',
        time: ''
      }
    }
  },
  methods: {},
  created () {
    this.ProvincialCompany = ProvincialCompany
    this.typeList = typeList
    this.operators = operators
    this.SettlementDirection = SettlementDirection
    this.LongType = LongType
    this.NetworkType = NetworkType
    this.TelType = TelType
  }
}
</script>
<style scoped>
.el-table {
  margin-top: 20px;
}
</style>
