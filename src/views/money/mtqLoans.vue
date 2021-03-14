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
              <a-select-option :value="1">
                等额本息
              </a-select-option>
              <a-select-option :value="2">
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
          <a-form-item label="累计缴息">
            <a-input addon-after="元" v-model:value="cumulativeInterestPayment" readonly/>
          </a-form-item>
          <a-form-item label="累计提前还款">
            <a-input addon-after="元" v-model:value="savedMoney" readonly/>
          </a-form-item>
          <a-form-item label="累计调整期数">
            <a-input addon-after="元" v-model:value="savedMoney" readonly/>
          </a-form-item>
          <a-form-item label="累计节省利息">
            <a-input addon-after="元" v-model:value="savedMoney" readonly/>
          </a-form-item>
          <a-form-item :wrapper-col="{span:24}">
            <a-table :dataSource="dataSource" :columns="columns" bordered size="small"/>
          </a-form-item>
        </a-form>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'mtqLoans',
  data: () => ({
    options: {
      loanAmount: 0,
      repaymentPeriod: 0,
      loanMonth: 120,
      lendingRates: 4.9,
      repayment: 1,
      firstRepaymentDate: undefined
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
      if (this.options.firstRepaymentDate && this.options.firstRepaymentDate._d instanceof Date) {
        newOptions.firstRepaymentDate = this.options.firstRepaymentDate._d
      }
      return newOptions
    },
    savedMoney: function () {
      return 0
    },
    dataSource: function () {
      return []
    },
    isValidOptions: function () {
      return Object.keys(this.computedOptions).length >= 4
    },
    cumulativeInterestPayment: function () {
      return ''
      // try {
      //   return ''
      // } catch (e) {
      //   return ''
      // }
    }
  },
  methods: {}
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
