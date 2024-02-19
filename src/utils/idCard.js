import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import zodiac from '@/utils/12zodiac.js'
import chineseLunar from '@/utils/chinese-lunar.js'
import dataAddress from '@/utils/data.json'

dayjs.extend(duration)

// 字典
const dict = {
  week(year, month, date) {
    const i = new Date(year, month - 1, date).getUTCDay()
    const day = {
      0: '星期一',
      1: '星期二',
      2: '星期三',
      3: '星期四',
      4: '星期五',
      5: '星期六',
      6: '星期天',
    }
    return day[i]
  },
  zodiac_zh(year) {
    const arr = '鼠牛虎兔龙蛇马羊猴鸡狗猪'
    year = year % 12 - 4
    if (year < 0)
      year += 12
    return arr[year]
  },
  zodiac(month, date) {
    try {
      if (month != null && date != null)
        return zodiac(month, date, 'zh-cn')
      if (date == null && month != null) {
        if (month.length === 4)
          return zodiac(month.substr(0, 2), month.substr(2, 2), 'zh-cn')
        month = month.split(/\/|\\|-/)
        return zodiac(month[0], month[1], 'zh-cn')
      }
    }
    catch (err) {
      return `出错${month}${date}`
    }
  },
}

// 计算最后一位应该是多少
function idCardEndNum(idCard) {
  idCard = idCard.toString()
  const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
  let sum = 0
  let ai = 0
  let wi = 0
  for (let i = 0; i < 17; i++) {
    ai = idCard[i]
    wi = factor[i]
    sum += ai * wi
  }
  return parity[sum % 11]
}

// 农历转换
function Nong(birthday) {
  birthday = birthday.split(/\/|\\|-/)
  birthday = `${birthday.slice(0, 4)}/${birthday.slice(4, 6)}/${birthday.slice(6, 8)}`
  const nong = new Date(birthday)
  let lunar
  try {
    lunar = chineseLunar.solarToLunar(nong)
  }
  catch (err) {
    return '时间错误'
  }
  return `${lunar.year}/${lunar.month}/${lunar.day}`
}

// 解析生日信息
function birthDay(idCard) {
  idCard = idCard.toString()
  const year = idCard.substr(6, 4)
  const month = idCard.substr(10, 2)
  const day = idCard.substr(12, 2)
  const birthday = `${year}/${month}/${day}`
  const nong = Nong(birthday)
  const nongyear = nong.substr(0, 4)
  return {
    date: birthday,
    nong,
    year,
    month,
    day,
    week: dict.week(year, month, day), // 星期几
    zodiac: dict.zodiac(month, day), // 星座
    zodiac_zh: dict.zodiac_zh(nongyear), // 生肖
  }
}

// 验证身份证号是否正确
function checkIdCard(idCard) {
  idCard = idCard.toString()
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard) && idCardEndNum(idCard).toString() === idCard[17].toUpperCase()
}

// 补全身份证号
function repairIdCard(idCard) {
  idCard = idCard.toString()
  if (/(^\d{17}$)/.test(idCard))
    return idCard + idCardEndNum(idCard)
  if (/(^\d{18}$)/.test(idCard))
    return idCard.slice(0, 17) + idCardEndNum(idCard)
}

// 15位转换18位
function num15to18(idCard) {
  idCard = idCard.toString()
  if (/(^\d{15}$)/.test(idCard))
    return repairIdCard(`${idCard.slice(0, 6)}19${idCard.slice(6, 15)}`)
}

// 地址信息解析
function address(idCard) {
  idCard = idCard.toString()
  const addressId = idCard.slice(0, 6)
  const data = dataAddress[addressId]
  if (data === undefined) {
    console.log(idCard)
    return '未找到'
  }
  data.all = (`${data.provinces}-${data.citiy}-${data.areas}`).replace('无', '')
  return data
}

/* 地址信息返回格式
{
  "address": "地址",
  "provinces": "省/直辖市",
  "citiy": "市",
  "areas": "县/区",
  "all": "省-市-县"
}
*/

function age(idCard) {
  const date = birthDay(idCard).date.replace(/\//g, '-')
  const duration = dayjs.duration(dayjs().diff(dayjs(date)))
  return Math.floor(duration.asYears())
}

// 性别解析
function sex(idCard) {
  idCard = idCard.toString()
  if (idCard[16] % 2)
    return '男'
  return '女'
}

function all(idCard) {
  return {
    endNum: idCardEndNum(idCard),
    birthDay: birthDay(idCard),
    checkIdCard: checkIdCard(idCard),
    address: address(idCard),
    sex: sex(idCard),
    age: age(idCard),
  }
}

export default {
  endNum: idCardEndNum,
  birthDay,
  checkIdCard,
  repairIdCard,
  num15to18,
  sex,
  address,
  nong: Nong,
  age,
  all,
}

export {
  idCardEndNum as endNum,
  birthDay,
  checkIdCard,
  repairIdCard,
  num15to18,
  sex,
  address,
  Nong as nong,
  age,
  all,
}
