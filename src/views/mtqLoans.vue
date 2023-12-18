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
              v-model="loanAmount"
              addon-after="元"
              controls-position="right"
            />
          </el-form-item>
          <el-form-item label="贷款期限">
            <el-select
              v-model="repaymentPeriod"
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
              v-model="loanMonth"
              addon-after="月"
              :disabled="repaymentPeriod!==0"
            />
          </el-form-item>
          <el-form-item label="贷款利率">
            <el-input
              v-model="lendingRates"
              addon-after="%"
            />
          </el-form-item>
          <el-form-item label="还款方式">
            <el-select v-model="repayment">
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
              v-model="firstRepaymentDate"
              type="date"
            />
          </el-form-item>
          <el-divider />
          <el-form-item>
            <el-space>
              <el-button
                type="primary"
                :disabled="!firstRepaymentDate"
                @click="addPrepayment"
              >
                添加提前还款
              </el-button>
              <el-button
                v-if="prepayment.length > 0"
                @click="removePrepayment"
              >
                移除
              </el-button>
            </el-space>
          </el-form-item>
          <template
            v-for="(item, index) of prepayment"
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

dayjs.extend(isBetween)

const loanAmount = ref(150000)
const repaymentPeriod = ref(2)
const loanMonth = ref(24)
const lendingRates = ref(4.5)
const repayment = ref<'equalLoan' | 'equalPrincipal'>('equalLoan')
const firstRepaymentDate = ref<Date>(new Date())

interface SinglePayment {
  repaymentDate: Date,
  repaymentAmount: number,
  adjustLoanMonth: number,
  lendingRates: number
}

interface Options {
  loanAmount: number,
  loanMonth: number,
  lendingRates: number,
  firstRepaymentDate: dayjs.Dayjs,
  prepayment: Array<SinglePayment>
}

const prepayment = ref<Array<SinglePayment>>([])

const dateFormat = 'YYYY/MM/DD'

const options = computed<Partial<Options>>(() => {
  const newOptions: Partial<Options> = {}
  if (!isNaN(loanAmount.value) && loanAmount.value > 0) {
    newOptions.loanAmount = loanAmount.value
  }
  if (Number.isInteger(loanMonth.value) && loanMonth.value > 0) {
    newOptions.loanMonth = loanMonth.value
  }
  if (!isNaN(lendingRates.value) && lendingRates.value > 0) {
    newOptions.lendingRates = lendingRates.value
  }
  if (firstRepaymentDate.value) {
    newOptions.firstRepaymentDate = dayjs(firstRepaymentDate.value)
    if (prepayment.value.length === 0) {
      newOptions.prepayment = prepayment.value
    } else {
      let flag = true
      for (const i in prepayment.value) {
        if (i === '0') {
          if (!(prepayment.value[i].repaymentDate && dayjs(prepayment.value[i].repaymentDate).diff(dayjs(firstRepaymentDate.value).subtract(1, 'M'), 'days') >= 0)) {
            flag = false
            break
          }
        } else {
          if (!(prepayment.value[i].repaymentDate && dayjs(prepayment.value[i].repaymentDate).diff(prepayment.value[parseInt(i) - 1].repaymentDate, 'days') >= 0)) {
            flag = false
            break
          }
        }
      }
      if (flag) {
        newOptions.prepayment = prepayment.value
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
    if (repayment.value === 'equalLoan') {
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
    if (repayment.value === 'equalLoan') {
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
    for (const item of prepayment.value) {
      tmp += Number(item.repaymentAmount || 0)
    }
  }
  return tmp.toFixed(2)
})
const cumulativeAdjustLoanMonth = computed(() => {
  let tmp = 0
  if (validOptions.value) {
    for (const item of prepayment.value) {
      tmp += Number(item.adjustLoanMonth || 0)
    }
  }
  return tmp.toFixed(2)
})
const savedMoney = computed(() => {
  return (originalCumulativeInterestPayment.value - cumulativeInterestPayment.value).toFixed(2)
})

watch(repaymentPeriod, (val: number) => {
  if (val !== 0) {
    loanMonth.value = val * 12
  } else {
    loanMonth.value = 120
  }
})

function addPrepayment () {
  let date: Date, _lendingRates: number
  if (prepayment.value.length === 0) {
    date = firstRepaymentDate.value ? firstRepaymentDate.value : new Date()
    _lendingRates = lendingRates.value || 0
  } else {
    date = prepayment.value[prepayment.value.length - 1].repaymentDate || new Date()
    _lendingRates = prepayment.value[prepayment.value.length - 1].lendingRates || 0
  }
  prepayment.value.push({
    repaymentDate: date,
    repaymentAmount: 0,
    adjustLoanMonth: 0,
    lendingRates: _lendingRates
  })
}
function removePrepayment () {
  prepayment.value.pop()
}

/**
 * Copy of Excel's PMT function.
 * Credit: http://stackoverflow.com/questions/2094967/excel-pmt-function-in-js
 *
 * @param ratePerPeriod       The interest rate for the loan.
 * @param numberOfPayments    The total number of payments for the loan in months.
 * @param presentValue         The present value, or the total amount that a series of future payments is worth now;
 *                              Also known as the principal.
 * @param [futureValue]          The future value, or a cash balance you want to attain after the last payment is made.
 *                              If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param [type]                  Optional, defaults to 0. The number 0 (zero) or 1 and indicates when payments are due.
 *                              0 = At the end of period
 *                              1 = At the beginning of the period
 * @returns {number}
 */
function pmt (ratePerPeriod: number, numberOfPayments: number, presentValue: number, futureValue?: number, type?: 0 | 1) {
  futureValue = typeof futureValue !== 'undefined' ? futureValue : 0
  type = typeof type !== 'undefined' ? type : 0

  if (ratePerPeriod !== 0.0) {
    // Interest rate exists
    const q = Math.pow(1 + ratePerPeriod, numberOfPayments)
    return -(ratePerPeriod * (futureValue + (q * presentValue))) / ((-1 + q) * (1 + ratePerPeriod * (type)))
  } else if (numberOfPayments !== 0.0) {
    // No interest rate, but number of payments exists
    return -(futureValue + presentValue) / numberOfPayments
  }

  return 0
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
