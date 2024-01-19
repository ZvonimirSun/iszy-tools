<template>
  <div
    flex
    flex-col
    h-full
    overflow-auto
  >
    <span class="tips">计算仅供参考，请以银行数据为准!</span>
    <div
      flex
      flex-1
      overflow-auto
      class="panel-wrapper"
    >
      <div
        class="panel"
      >
        <el-form
          :label-width="120"
          label-align="left"
        >
          <el-form-item label="贷款金额">
            <el-input-number
              v-model="data.loanAmount"
              addon-after="元"
              controls-position="right"
            />
          </el-form-item>
          <el-form-item label="贷款期限">
            <el-select
              v-model="data.repaymentPeriod"
              type="number"
            >
              <el-option
                :value="0"
                label="自定义贷款期限"
              />
              <el-option
                v-for="(n,index) in 30"
                :key="'repaymentPeriod'+index"
                :value="n"
                :label="n + '年(' + n * 12 + '月)'"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="贷款月数">
            <el-input
              v-model.number="data.loanMonth"
              addon-after="月"
              :disabled="data.repaymentPeriod!==0"
            />
          </el-form-item>
          <el-form-item label="贷款利率">
            <el-input
              v-model="data.lendingRates"
              addon-after="%"
            />
          </el-form-item>
          <el-form-item label="还款方式">
            <el-select v-model="data.repayment">
              <el-option
                value="equalLoan"
                label="等额本息"
              />
              <el-option
                value="equalPrincipal"
                label="等额本金"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="首次还款">
            <el-date-picker
              v-model="data.firstRepaymentDate"
              type="date"
            />
          </el-form-item>
          <el-divider />
          <el-form-item>
            <el-space>
              <el-button
                type="primary"
                :disabled="!data.firstRepaymentDate"
                @click="addPrepayment"
              >
                添加提前还款
              </el-button>
              <el-button
                v-if="data.prepayment.length > 0"
                @click="removePrepayment"
              >
                移除
              </el-button>
            </el-space>
          </el-form-item>
          <template
            v-for="(item, index) of data.prepayment"
            :key="index"
          >
            <el-divider orientation="left">
              第{{ index + 1 }}次提前还款
            </el-divider>
            <el-form-item label="还款日期">
              <el-date-picker
                v-model="item.repaymentDate"
                style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="提前还款金额">
              <el-input-number
                v-model="item.repaymentAmount"
              />
            </el-form-item>
            <el-form-item label="调整期数">
              <el-input-number
                v-model="item.adjustLoanMonth"
              />
            </el-form-item>
            <el-form-item label="调整利率">
              <el-input
                v-model="item.lendingRates"
                addon-after="%"
              />
            </el-form-item>
          </template>
        </el-form>
      </div>
      <div
        class="panel"
        flex-1
        flex
        flex-col
      >
        <el-form
          :label-width="120"
          label-align="left"
        >
          <el-form-item label="累计提前还款">
            <el-input
              v-model="cumulativeRepayment"
              addon-after="元"
              readonly
            />
          </el-form-item>
          <el-form-item label="累计调整期数">
            <el-input
              v-model="cumulativeAdjustLoanMonth"
              addon-after="元"
              readonly
            />
          </el-form-item>
          <el-form-item label="原累计利息">
            <el-input
              v-model="originalCumulativeInterestPayment"
              addon-after="元"
              readonly
            />
          </el-form-item>
          <el-form-item label="累计缴息">
            <el-input
              v-model="cumulativeInterestPayment"
              addon-after="元"
              readonly
            />
          </el-form-item>
          <el-form-item label="累计节省利息">
            <el-input
              v-model="savedMoney"
              addon-after="元"
              readonly
            />
          </el-form-item>
        </el-form>
        <el-table
          flex-1
          :data="dataSource"
        >
          <el-table-column
            prop="times"
            label="期次"
          />
          <el-table-column
            prop="repaymentDate"
            label="还款日期"
          />
          <el-table-column
            prop="monthlyAmount"
            label="每月还款"
          />
          <el-table-column
            prop="interestRepayment"
            label="偿还利息"
          />
          <el-table-column
            prop="principalRepayment"
            label="偿还本金"
          />
          <el-table-column
            prop="remainingPrincipal"
            label="剩余本金"
          />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs, { OpUnitType } from 'dayjs'
import { cloneDeep } from 'lodash-es'
import isBetween from 'dayjs/plugin/isBetween'
import pmt from './mtqLoans.service'

dayjs.extend(isBetween)

interface SinglePayment {
  repaymentDate: Date,
  repaymentAmount: number,
  adjustLoanMonth: number,
  lendingRates: number
}

interface TotalData {
  loanAmount: number,
  repaymentPeriod: number,
  loanMonth: number,
  lendingRates: number,
  repayment: 'equalLoan' | 'equalPrincipal',
  firstRepaymentDate: Date,
  prepayment: Array<SinglePayment>
}

interface Options {
  loanAmount: number,
  loanMonth: number,
  lendingRates: number,
  firstRepaymentDate: dayjs.Dayjs,
  prepayment: Array<SinglePayment>
}

const data = reactive<TotalData>({
  loanAmount: 150000,
  repaymentPeriod: 2,
  loanMonth: 24,
  lendingRates: 4.5,
  repayment: 'equalLoan',
  firstRepaymentDate: new Date(),
  prepayment: []
})

const dateFormat = 'YYYY/MM/DD'

const options = computed<Partial<Options>>(() => {
  const newOptions: Partial<Options> = {}
  if (!isNaN(data.loanAmount) && data.loanAmount > 0) {
    newOptions.loanAmount = data.loanAmount
  }
  if (Number.isInteger(data.loanMonth) && data.loanMonth > 0) {
    newOptions.loanMonth = data.loanMonth
  }
  if (!isNaN(data.lendingRates) && data.lendingRates > 0) {
    newOptions.lendingRates = data.lendingRates
  }
  if (data.firstRepaymentDate) {
    newOptions.firstRepaymentDate = dayjs(data.firstRepaymentDate)
    if (data.prepayment.length === 0) {
      newOptions.prepayment = data.prepayment
    } else {
      let flag = true
      for (const i in data.prepayment) {
        if (i === '0') {
          if (!(data.prepayment[i].repaymentDate && dayjs(data.prepayment[i].repaymentDate).diff(dayjs(data.firstRepaymentDate).subtract(1, 'M'), 'days') >= 0)) {
            flag = false
            break
          }
        } else {
          if (!(data.prepayment[i].repaymentDate && dayjs(data.prepayment[i].repaymentDate).diff(data.prepayment[parseInt(i) - 1].repaymentDate, 'days') >= 0)) {
            flag = false
            break
          }
        }
      }
      if (flag) {
        newOptions.prepayment = data.prepayment
      }
    }
  }
  return newOptions
})

const validOptions = computed<Options | null>(() => {
  if (options.value.loanAmount != null && options.value.loanMonth != null && options.value.lendingRates != null && options.value.firstRepaymentDate && options.value.prepayment) {
    return options.value as Options
  } else {
    return null
  }
})

const originDataSource = computed(() => {
  if (validOptions.value) {
    const result = []
    result.push({
      key: 0,
      times: 0,
      remainingPrincipal: options.value.loanAmount
    })
    if (data.repayment === 'equalLoan') {
      const remain = {
        loanAmount: validOptions.value.loanAmount,
        loanMonth: validOptions.value.loanMonth,
        lendingRates: validOptions.value.lendingRates
      }
      for (let i = 1; i <= validOptions.value.loanMonth; i++) {
        const amount = Number((-pmt(remain.lendingRates / 100.0 / 12, remain.loanMonth, remain.loanAmount)).toFixed(2))
        const interest = Number((remain.loanAmount * remain.lendingRates / 100.0 / 12).toFixed(2))
        const principal = Number((amount - interest).toFixed(2))
        remain.loanAmount -= principal
        remain.loanMonth--
        result.push({
          key: i,
          times: i,
          repaymentDate: validOptions.value.firstRepaymentDate.clone().add((i - 1), 'M').format(dateFormat),
          monthlyAmount: amount,
          interestRepayment: interest,
          principalRepayment: principal,
          remainingPrincipal: Number(remain.loanAmount.toFixed(2))
        })
      }
    } else {
      const remain = {
        loanAmount: validOptions.value.loanAmount,
        loanMonth: validOptions.value.loanMonth
      }
      for (let i = 1; i <= validOptions.value.loanMonth; i++) {
        const principal = Number((remain.loanAmount / remain.loanMonth).toFixed(2))
        const interest = Number((remain.loanAmount * validOptions.value.lendingRates / 100.0 / 12).toFixed(2))
        const amount = Number((principal + interest).toFixed(2))
        remain.loanAmount -= principal
        remain.loanMonth--
        result.push({
          key: i,
          times: i,
          repaymentDate: validOptions.value.firstRepaymentDate.clone().add((i - 1), 'M').format(dateFormat),
          monthlyAmount: amount,
          interestRepayment: interest,
          principalRepayment: principal,
          remainingPrincipal: Number(remain.loanAmount.toFixed(2))
        })
      }
    }
    return result
  } else {
    return []
  }
})

const dataSource = computed<Array<Partial<{
  key: number,
  times: number,
  repaymentDate: string,
  monthlyAmount: number,
  interestRepayment: number,
  principalRepayment: number,
  remainingPrincipal: number
}>>>(() => {
  if (validOptions.value) {
    const result = []
    result.push({
      key: 0,
      times: 0,
      remainingPrincipal: validOptions.value.loanAmount
    })
    if (data.repayment === 'equalLoan') {
      const remain = {
        loanAmount: validOptions.value.loanAmount,
        loanMonth: validOptions.value.loanMonth,
        lendingRates: validOptions.value.lendingRates
      }
      let adjustLoanMonth = 0
      let moreInterest = 0
      const prepayment = cloneDeep(validOptions.value.prepayment)
      for (let i = 1; i <= validOptions.value.loanMonth - adjustLoanMonth; i++) {
        if (i > 0) {
          while (prepayment.length > 0 && dayjs(prepayment[0].repaymentDate).isBetween(validOptions.value.firstRepaymentDate.clone().add(i - 2, 'M').subtract(1, 'days'), validOptions.value.firstRepaymentDate.clone().add(i - 1, 'M'), '[)' as OpUnitType)) {
            const a: SinglePayment = prepayment.shift() as SinglePayment
            remain.loanAmount -= Number(a.repaymentAmount)
            remain.lendingRates = Number(a.lendingRates || 0)
            remain.loanMonth -= Number(a.adjustLoanMonth || 0)
            adjustLoanMonth += Number(a.adjustLoanMonth || 0)
            result.push({
              repaymentDate: dayjs(a.repaymentDate).format(dateFormat),
              principalRepayment: a.repaymentAmount,
              remainingPrincipal: Number(remain.loanAmount.toFixed(2))
            })
          }
        }
        const amount = Number((-pmt(remain.lendingRates / 100.0 / 12, remain.loanMonth, remain.loanAmount)).toFixed(2))
        let interest = Number((remain.loanAmount * remain.lendingRates / 100.0 / 12).toFixed(2))
        moreInterest += remain.loanAmount * remain.lendingRates / 100.0 / 12 - interest
        const principal = Number((amount - interest).toFixed(2))
        remain.loanAmount -= principal
        remain.loanMonth--
        if (remain.loanMonth === 0) {
          interest = Number((interest + moreInterest).toFixed(2))
        }
        result.push({
          key: i,
          times: i,
          repaymentDate: validOptions.value.firstRepaymentDate.clone().add(i - 1, 'M').format(dateFormat),
          monthlyAmount: amount,
          interestRepayment: interest,
          principalRepayment: principal,
          remainingPrincipal: Number(remain.loanAmount.toFixed(2))
        })
      }
    } else {
      const remain = {
        loanAmount: validOptions.value.loanAmount,
        loanMonth: validOptions.value.loanMonth,
        lendingRates: validOptions.value.lendingRates
      }
      let adjustLoanMonth = 0
      let moreInterest = 0
      const prepayment = cloneDeep(validOptions.value.prepayment)
      for (let i = 1; i <= validOptions.value.loanMonth - adjustLoanMonth; i++) {
        if (prepayment.length > 0 && i > 1) {
          if (dayjs(prepayment[0].repaymentDate).isBetween(validOptions.value.firstRepaymentDate.clone().add(i - 2, 'M').subtract(1, 'days'), validOptions.value.firstRepaymentDate.clone().add(i - 1, 'M'), '[)' as OpUnitType)) {
            const a = prepayment.shift() as SinglePayment
            remain.loanAmount -= Number(a.repaymentAmount)
            remain.lendingRates = Number(a.lendingRates || 0)
            remain.loanMonth -= Number(a.adjustLoanMonth || 0)
            adjustLoanMonth += Number(a.adjustLoanMonth || 0)
            result.push({
              repaymentDate: dayjs(a.repaymentDate).format(dateFormat),
              principalRepayment: a.repaymentAmount,
              remainingPrincipal: Number(remain.loanAmount.toFixed(2))
            })
          }
        }
        const principal = Number((remain.loanAmount / remain.loanMonth).toFixed(2))
        let interest = Number((remain.loanAmount * remain.lendingRates / 100.0 / 12).toFixed(2))
        moreInterest += remain.loanAmount * remain.lendingRates / 100.0 / 12 - interest
        const amount = Number((principal + interest).toFixed(2))
        remain.loanAmount -= principal
        remain.loanMonth--
        if (remain.loanMonth === 0) {
          interest = Number((interest + moreInterest).toFixed(2))
        }
        result.push({
          key: i,
          times: i,
          repaymentDate: validOptions.value.firstRepaymentDate.clone().add((i - 1), 'M').format(dateFormat),
          monthlyAmount: amount,
          interestRepayment: interest,
          principalRepayment: principal,
          remainingPrincipal: Number(remain.loanAmount.toFixed(2))
        })
      }
    }
    return result
  } else {
    return []
  }
})

const originalCumulativeInterestPayment = computed(() => {
  let tmp = 0
  if (validOptions.value) {
    for (const item of originDataSource.value) {
      tmp += item.interestRepayment || 0
    }
  }
  return Number(tmp.toFixed(2))
})

const cumulativeInterestPayment = computed(() => {
  let tmp = 0
  if (validOptions.value) {
    for (const item of dataSource.value) {
      tmp += item.interestRepayment || 0
    }
  }
  return Number(tmp.toFixed(2))
})
const cumulativeRepayment = computed(() => {
  let tmp = 0
  if (validOptions.value) {
    for (const item of data.prepayment) {
      tmp += Number(item.repaymentAmount || 0)
    }
  }
  return tmp.toFixed(2)
})
const cumulativeAdjustLoanMonth = computed(() => {
  let tmp = 0
  if (validOptions.value) {
    for (const item of data.prepayment) {
      tmp += Number(item.adjustLoanMonth || 0)
    }
  }
  return tmp.toFixed(2)
})
const savedMoney = computed(() => {
  return (originalCumulativeInterestPayment.value - cumulativeInterestPayment.value).toFixed(2)
})

watch(() => data.repaymentPeriod, (val: number) => {
  if (val !== 0) {
    data.loanMonth = val * 12
  } else {
    data.loanMonth = 120
  }
})

function addPrepayment () {
  let date: Date, _lendingRates: number
  if (data.prepayment.length === 0) {
    date = data.firstRepaymentDate ? data.firstRepaymentDate : new Date()
    _lendingRates = data.lendingRates || 0
  } else {
    date = data.prepayment[data.prepayment.length - 1].repaymentDate || new Date()
    _lendingRates = data.prepayment[data.prepayment.length - 1].lendingRates || 0
  }
  data.prepayment.push({
    repaymentDate: date,
    repaymentAmount: 0,
    adjustLoanMonth: 0,
    lendingRates: _lendingRates
  })
}
function removePrepayment () {
  data.prepayment.pop()
}
</script>

<style scoped lang="scss">
.tips {
  padding: .5rem .8rem;
  color: red;
}

.panel {
  padding: .5rem .8rem;
  overflow: auto;
  box-sizing: border-box;
  display: block;
}

@media screen and (max-width: 712px) {
  .panel-wrapper {
    flex-wrap: wrap;

    .panel {
      width: 100%;
    }
  }
}
</style>
