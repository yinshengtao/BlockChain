const ProvincialCompany = [
  { id: 0, province: '全部' },
  { id: 100, province: '北京' },
  { id: 200, province: '广东' },
  { id: 210, province: '上海' },
  { id: 220, province: '天津' },
  { id: 230, province: '重庆' },
  { id: 240, province: '辽宁' },
  { id: 250, province: '江苏' },
  { id: 270, province: '湖北' },
  { id: 280, province: '四川' },
  { id: 290, province: '陕西' },
  { id: 311, province: '河北' },
  { id: 351, province: '山西' },
  { id: 371, province: '河南' },
  { id: 431, province: '吉林' },
  { id: 451, province: '黑龙江' },
  { id: 471, province: '内蒙' },
  { id: 531, province: '山东' },
  { id: 551, province: '安徽' },
  { id: 571, province: '浙江' },
  { id: 591, province: '福建' },
  { id: 731, province: '湖南' },
  { id: 771, province: '广西' },
  { id: 791, province: '江西' },
  { id: 851, province: '贵州' },
  { id: 871, province: '云南' },
  { id: 891, province: '西藏' },
  { id: 898, province: '海南' },
  { id: 931, province: '甘肃' },
  { id: 951, province: '宁夏' },
  { id: 971, province: '青海' },
  { id: 991, province: '新疆' }
]
// 文件上发方
const posted = [
  { value: 0, label: '全部' },
  { value: 1, label: '全国中心' },
  { value: 2, label: '省公司' }
]
// 业务类型
const typeList = [
  { value: 0, label: '全部' },
  { value: 1, label: '语音' },
  { value: 2, label: '短信' },
  { value: 3, label: '彩信' }
]
// 文件状态
const FileStatus = [
  { value: 0, label: '全部' },
  { value: 1, label: '已处理' },
  { value: 2, label: '校验不通过' }
]
// 文件下发状态
const lssueStatus = [
  { value: 0, label: '全部' },
  { value: 1, label: '已下发' },
  { value: 2, label: '未下发' }
]
// 对端运营商
const operators = [
  { value: 0, label: '全部' },
  { value: 1, label: '联通' },
  { value: 2, label: '电信' },
  { value: 3, label: '铁通' }
]
// 结算方向
const SettlementDirection = [
  { value: 0, label: '全部' },
  { value: 1, label: '结入' },
  { value: 2, label: '结出' }
]
// 长途类型
const LongType = [
  { value: 0, label: '全部' },
  { value: 1, label: '本地' },
  { value: 2, label: '异地' }
]
// 网络类型
const NetworkType = [
  { value: 0, label: '全部' },
  { value: 1, label: '移网' },
  { value: 2, label: '固网' }
]
// 主叫号码类型
const TelType = [
  { value: 0, label: '全部' },
  { value: 1, label: '手机号码' },
  { value: 2, label: '固定号码' }
]
export { ProvincialCompany, posted, typeList, FileStatus, lssueStatus, operators, SettlementDirection, LongType, NetworkType, TelType }
