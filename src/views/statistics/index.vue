<template>
  <div>
    <el-card>
      <!-- 查询区域 -->
      <el-form label-width="90px" label-position="left">
        <el-row type="flex">
          <!-- 结算方向 -->
          <el-col>
            <el-form-item label="结算方向">
              <el-select v-model="settlementDirectionValue" placeholder="请选择">
                <el-option
                  v-for="item in settlementDirect"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 对账日期 -->
          <el-col>
            <el-form-item label="对账日期区间" label-width="125px">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-button size="small">导出</el-button>
      <!-- 图表区域 -->
      <div class="chartArea">
        <el-row type="flex" class="compare-title">
          <el-col :span="8"></el-col>
          <el-col :span="16">按主叫和被叫的长途和网络类型下钻</el-col>
        </el-row>
        <!-- 联通 -->
        <el-row >
          <el-col :span="6">
            <div class="line-container" ref="unicomLine"></div>
          </el-col>
          <el-col :span="2">
            <div class="account-check">联通：</div>
          </el-col>
          <el-col :span="16">
            <div class="circle-container">
              <div class="circle-container-first" ref="unicomPie"></div>
              <div class="amount-check-difference">
                <div>
                  <div>本地移网</div>
                  <div>总差异金额：{{differentAmount}}</div>
                  <div>对账差异率：{{differentRation}}</div>
                </div>
                <div>
                  <div>本地移网</div>
                  <div>总差异金额：{{differentAmount}}</div>
                  <div>对账差异率：{{differentRation}}</div>
                </div>
                <div>
                    <div>本地移网</div>
                  <div>总差异金额：{{differentAmount}}</div>
                  <div>对账差异率：{{differentRation}}</div>
                </div>
                <div>
                  <div>本地移网</div>
                  <div>总差异金额：{{differentAmount}}</div>
                  <div>对账差异率：{{differentRation}}</div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- 电信 -->
        <el-row type="flex" class="telecom">
          <el-col :span="6">
            <div class="line-container" ref="telecomLine"></div>
          </el-col>
          <el-col :span="2">
            <span class="account-check">电信：</span>
          </el-col>
          <el-col :span="16">
            <div class="circle-container-first" ref="telecomPie"></div>
            <div class="amount-check-difference">
              <div>
                <div>本地移网</div>
                <div>总差异金额：{{differentAmount}}</div>
                <div>对账差异率：{{differentRation}}</div>
              </div>
              <div>
                <div>本地移网</div>
                <div>总差异金额：{{differentAmount}}</div>
                <div>对账差异率：{{differentRation}}</div>
              </div>
              <div>
                  <div>本地移网</div>
                <div>总差异金额：{{differentAmount}}</div>
                <div>对账差异率：{{differentRation}}</div>
              </div>
              <div>
                <div>本地移网</div>
                <div>总差异金额：{{differentAmount}}</div>
                <div>对账差异率：{{differentRation}}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
  </el-card>
  </div>
</template>
<script>
import * as echarts from 'echarts'

export default {
  data () {
    return {
      settlementDirect: [{
        value: '选项1',
        label: '结入'
      }, {
        value: '选项2',
        label: '结出'
      }],
      settlementDirectionValue: '',
      value1: '',
      differentAmount: '12345.00', // 差异金额
      differentRation: '5.00%', // 差异率
      unicomLineData: [150, 230, 224, 218, 135, 600], // 联通折线图数据
      unicomPieData: [
        ['Product', 'DifferentPrice', 'Price', 'Year'],
        ['本地移网', 123, 32, 2011],
        ['本地固网', 231, 14, 2011],
        ['移动移网', 235, 5, 2011],
        ['异地固网', 122, 29, 2011],
        ['本地移网', 143, 30, 2012],
        ['本地固网', 201, 19, 2012],
        ['移动移网', 255, 7, 2012],
        ['异地固网', 102, 34, 2012],
        ['本地移网', 153, 28, 2013],
        ['本地固网', 181, 21, 2013],
        ['移动移网', 395, 4, 2013],
        ['异地固网', 92, 39, 2013],
        ['本地移网', 223, 29, 2014],
        ['本地固网', 211, 17, 2014],
        ['移动移网', 345, 3, 2014],
        ['异地固网', 72, 24, 2014]
      ], // 联通饼图数据
      telecomLineData: [550, 230, 224, 218, 135, 600], // 电信折线图数据
      telecomPieData: [
        ['Product', 'DifferentPrice', 'Price', 'Year'],
        ['本地移网', 123, 32, 2011],
        ['本地固网', 231, 14, 2011],
        ['移动移网', 235, 5, 2011],
        ['异地固网', 122, 29, 2011],
        ['本地移网', 143, 30, 2012],
        ['本地固网', 201, 19, 2012],
        ['移动移网', 255, 7, 2012],
        ['异地固网', 102, 34, 2012],
        ['本地移网', 153, 28, 2013],
        ['本地固网', 181, 21, 2013],
        ['移动移网', 395, 4, 2013],
        ['异地固网', 92, 39, 2013],
        ['本地移网', 223, 29, 2014],
        ['本地固网', 211, 17, 2014],
        ['移动移网', 345, 3, 2014],
        ['异地固网', 72, 24, 2014]
      ] // 电信饼图数据
    }
  },
  methods: {
    // 参数：接受一个元素容器，一个data, title标题
    initEacharts (dom, lineData) {
      // 初始化echarts实例
      const myChart = echarts.init(dom)
      const option = {
        xAxis: {
          type: 'category',
          data: [1, 2, 3, 4, 5, 6],
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'value',
            max: 600,
            min: 0,
            splitNumber: 3,
            splitLine: {
              show: false
            }
          },
          {
            type: 'value',
            position: 'right',
            min: 0,
            max: 6,
            splitNumber: 3,
            axisLabel: {
              formatter: '{value}%'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '差异金额',
            // data: [150, 230, 224, 218, 135, 600],
            data: lineData,
            type: 'line',
            yAxisIndex: 0,
            itemStyle: {
              normal: { color: 'orange' }
            }
          }
        ],
        title: {
          left: 'center',
          text: '联通对账差异金额及差异率',
          textStyle: {
            fontSize: '14px',
            fontWeight: 'normal'
          },
          top: 10
        },
        grid: {
          top: '22%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        }
      }
      option && myChart.setOption(option)
    },
    initEchartsCircle (dom, pieData) {
      // 初始化echarts实例
      const myChart = echarts.init(dom)

      const option = {
        legend: {
          top: '70%',
          x: 'center',
          data: ['本地移网', '本地固网', '移动移网', '异地固网'],
          itemWidth: 8,
          itemHeight: 8
        },
        dataset: [{
          source: pieData
          // source: [
          //   ['Product', 'DifferentPrice', 'Price', 'Year'],
          //   ['本地移网', 123, 32, 2011],
          //   ['本地固网', 231, 14, 2011],
          //   ['移动移网', 235, 5, 2011],
          //   ['异地固网', 122, 29, 2011],
          //   ['本地移网', 143, 30, 2012],
          //   ['本地固网', 201, 19, 2012],
          //   ['移动移网', 255, 7, 2012],
          //   ['异地固网', 102, 34, 2012],
          //   ['本地移网', 153, 28, 2013],
          //   ['本地固网', 181, 21, 2013],
          //   ['移动移网', 395, 4, 2013],
          //   ['异地固网', 92, 39, 2013],
          //   ['本地移网', 223, 29, 2014],
          //   ['本地固网', 211, 17, 2014],
          //   ['移动移网', 345, 3, 2014],
          //   ['异地固网', 72, 24, 2014]
          // ]
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'Year', value: 2011 }
          }
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'Year', value: 2012 }
          }
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'Year', value: 2013 }
          }
        },
        {
          transform: {
            type: 'filter',
            config: { dimension: 'Year', value: 2014 }
          }
        }],
        series: [{
          type: 'pie',
          radius: 40,
          center: ['30%', '25%'],
          datasetIndex: 1,
          label: {
            normal: {
              show: true,
              position: 'inside',
              formatter: '{@DifferentPrice}'
            }
          }
        }, {
          type: 'pie',
          radius: 40,
          center: ['30%', '50%'],
          datasetIndex: 2,
          label: {
            normal: {
              show: true,
              position: 'inside',
              formatter: '{@DifferentPrice}'
            }
          }
        }, {
          type: 'pie',
          radius: 40,
          center: ['30%', '75%'],
          datasetIndex: 3,
          label: {
            normal: {
              show: true,
              position: 'inside',
              formatter: '{@DifferentPrice}'
            }
          }
        }, {
          type: 'pie',
          radius: 40,
          center: ['30%', '75%'],
          datasetIndex: 4,
          label: {
            normal: {
              show: true,
              position: 'inside',
              formatter: '{@DifferentPrice}'
            }
          }
        }],
        // Optional. Only for responsive layout:
        media: [{
          query: { minAspectRatio: 1 },
          option: {
            series: [
              { center: ['12.5%', '30%'] },
              { center: ['37.5%', '30%'] },
              { center: ['62.5%', '30%'] },
              { center: ['87.5%', '30%'] }
            ]
          }
        },
        {
          option: {
            series: [
              { center: ['12.5%', '30%'] },
              { center: ['37.5%', '30%'] },
              { center: ['62.5%', '30%'] },
              { center: ['87.5%', '30%'] }
            ]
          }
        }]
      }
      option && myChart.setOption(option)
    }
  },
  created () {},
  mounted () {
    this.initEacharts(this.$refs.unicomLine, this.unicomLineData)
    this.initEchartsCircle(this.$refs.unicomPie, this.unicomPieData)
    this.initEacharts(this.$refs.telecomLine, this.telecomLineData)
    this.initEchartsCircle(this.$refs.telecomPie, this.telecomPieData)
  }
}
</script>
<style scoped>
.chartArea {
  margin-top: 20px;
}
.compare-title {
  margin-bottom: 10px;
}
.line-container {
  width: 100%;
  min-width: 250px;
  height: 220px;
  border: 1px solid #ccc;
  overflow: hidden;
}
.account-check {
  width: 100%;
  min-width: 30px;
  margin-top: 40px;
  margin-left: 20%;
}
.circle-container {
  width: 100%;
  min-width: 650px;
}
.circle-container-first {
width: 100%;
height: 180px;
border: 1px solid #ccc;
}
.amount-check-difference {
  width: 100%;
  display: flex;
  height: 60px;
  font-size: 14px;
}
.amount-check-difference>div {
  width: 25%;
}
.telecom {
  margin-top: 20px;
}
</style>
