<template>
  <a-row>
    <a-col :xs="24" :lg="6">
      <div class="panel">
        <a-form layout="horizontal" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" labelAlign="left"
                :colon="false" v-model:value="options">
          <a-form-item label="贷款金额">
            <a-input addon-after="元" v-model:value="options.loanAmount" type="number"/>
          </a-form-item>
          <a-form-item label="贷款期限">
            <a-select v-model:value="options.repaymentPeriod" type="number">
              <a-select-option :value="0">自定义贷款期限</a-select-option>
              <a-select-option v-for="(n,index) in 30" :key="'repaymentPeriod'+index" :value="n">
                {{ n }}年({{ n * 12 }}月)
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="贷款月数">
            <a-input addon-after="月" v-model:value="options.loanMonth" :disabled="options.repaymentPeriod!==0"/>
          </a-form-item>
          <a-form-item label="贷款利率">
            <a-input addon-after="%" v-model:value="options.lendingRates"/>
          </a-form-item>
          <a-form-item label="还款方式">
            <a-select v-model:value="options.repayment">
              <a-select-option value="1">
                等额本息
              </a-select-option>
              <a-select-option value="2">
                等额本金
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="首次还款">
            <a-date-picker v-model:value="options.firstRepaymentDate" style="width: 100%"/>
          </a-form-item>
          <a-divider/>
        </a-form>
      </div>
    </a-col>
    <a-col :xs="24" :lg="18">
      <div class="panel">
        <a-form :label-col="{span:6}" :wrapper-col="{ span: 18}" labelAlign="left" :colon="false">
          <a-form-item label="累计提前还款">
            <a-input addon-after="元" v-model:value="savedMoney" readonly/>
          </a-form-item>
          <a-form-item label="累计调整期数">
            <a-input addon-after="元" v-model:value="savedMoney" readonly/>
          </a-form-item>
          <a-form-item label="原累计利息">
            <a-input addon-after="元" v-model:value="originalCumulativeInterestPayment" readonly/>
          </a-form-item>
          <a-form-item label="累计缴息">
            <a-input addon-after="元" v-model:value="originalCumulativeInterestPayment" readonly/>
          </a-form-item>
          <a-form-item label="累计节省利息">
            <a-input addon-after="元" v-model:value="savedMoney" readonly/>
          </a-form-item>
          <a-form-item :wrapper-col="{span:24}">
            <a-table :dataSource="dataSource" :columns="columns" bordered size="small" :pagination="false"/>
          </a-form-item>
        </a-form>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import moment from 'moment'

export default {
  name: 'mtqLoans',
  data: () => ({
    options: {
      loanAmount: 1100000,
      repaymentPeriod: 0,
      loanMonth: 120,
      lendingRates: 5.9,
      repayment: '2',
      firstRepaymentDate: moment()
    },

    columns: [
      {
        title: '期次',
        dataIndex: 'times',
        key: 'times'
      },
      {
        title: '还款日期',
        dataIndex: 'repaymentDate',
        key: 'repaymentDate'
      },
      {
        title: '每月还款',
        dataIndex: 'monthlyAmount',
        key: 'monthlyAmount'
      },
      {
        title: '偿还利息',
        dataIndex: 'interestRepayment',
        key: 'interestRepayment'
      },
      {
        title: '偿还本金',
        dataIndex: 'principalRepayment',
        key: 'principalRepayment'
      },
      {
        title: '剩余本金',
        dataIndex: 'remainingPrincipal',
        key: 'remainingPrincipal'
      }
    ]
  }),
  watch: {
    'options.repaymentPeriod' (val) {
      if (val !== 0) {
        this.options.loanMonth = val * 12
      } else {
        this.options.loanMonth = 120
      }
    }
  },
  computed: {
    computedOptions: function () {
      const newOptions = {}
      if (!isNaN(parseFloat(this.options.loanAmount)) && parseFloat(this.options.loanAmount) > 0) {
        newOptions.loanAmount = parseFloat(this.options.loanAmount)
      }
      if (Number.isInteger(parseFloat(this.options.loanMonth)) && parseFloat(this.options.loanMonth) > 0) {
        newOptions.loanMonth = parseInt(this.options.loanMonth)
      }
      if (!isNaN(parseFloat(this.options.lendingRates)) && parseFloat(this.options.lendingRates) > 0) {
        newOptions.lendingRates = parseFloat(this.options.lendingRates)
      }
      if (moment.isMoment(this.options.firstRepaymentDate)) {
        newOptions.firstRepaymentDate = this.options.firstRepaymentDate
      }
      return newOptions
    },
    savedMoney: function () {
      return 0
    },
    dataSource: function () {
      if (this.isValidOptions) {
        const result = []
        result.push({ key: 0, times: 0, remainingPrincipal: this.computedOptions.loanAmount })
        if (this.options.repayment === '2') {
          const remain = {
            loanAmount: this.computedOptions.loanAmount,
            loanMonth: this.computedOptions.loanMonth
          }
          for (let i = 1; i <= this.computedOptions.loanMonth; i++) {
            const principal = Number((remain.loanAmount / remain.loanMonth).toFixed(2))
            const interest = Number((remain.loanAmount * this.computedOptions.lendingRates / 100.0 / 12).toFixed(2))
            const amount = Number((principal + interest).toFixed(2))
            remain.loanAmount -= principal
            remain.loanMonth--
            result.push({
              key: i,
              times: i,
              repaymentDate: this.computedOptions.firstRepaymentDate.clone().add((i - 1), 'M').format('YYYY年M月D日'),
              monthlyAmount: amount,
              interestRepayment: interest,
              principalRepayment: principal,
              remainingPrincipal: Number(remain.loanAmount.toFixed(2))
            })
          }
        }
        return result
      } else { return [] }
    },
    isValidOptions: function () {
      return Object.keys(this.computedOptions).length >= 4
    },
    originalCumulativeInterestPayment: function () {
      if (this.isValidOptions) {
        const options = this.computedOptions
        if (this.options.repayment === '1') {
          return options.loanAmount * options.lendingRates / 100.0 / 12 * (1 + options.lendingRates / 100.0 / 12)
        } else {
          return (options.loanAmount * options.lendingRates / 100.0 / 12 * (options.loanMonth + 1) / 2).toFixed(2)
        }
      } else { return 0 }
    }
  },
  methods: {
  }
}

/**
 * Copy of Excel's PMT function.
 * Credit: http://stackoverflow.com/questions/2094967/excel-pmt-function-in-js
 *
 * @param ratePerPeriod       The interest rate for the loan.
 * @param numberOfPayments    The total number of payments for the loan in months.
 * @param presentValue         The present value, or the total amount that a series of future payments is worth now;
 *                              Also known as the principal.
 * @param futureValue          The future value, or a cash balance you want to attain after the last payment is made.
 *                              If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param type                  Optional, defaults to 0. The number 0 (zero) or 1 and indicates when payments are due.
 *                              0 = At the end of period
 *                              1 = At the beginning of the period
 * @returns {number}
 */
// eslint-disable-next-line no-unused-vars
function pmt (ratePerPeriod, numberOfPayments, presentValue, futureValue, type) {
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
.panel {
  width: 100%;
  height: 100%;
  padding: 5px 8px;

  .ant-calendar-picker {
    width: 100%;
  }
}
</style>
