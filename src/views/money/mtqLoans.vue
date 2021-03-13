<template>
  <a-row>
    <a-col :xs="24" :lg="6">
      <div class="panel">
        <a-form layout="horizontal" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" v-model:value="options">
          <a-form-item label="贷款金额">
            <a-input addon-after="元" v-model:value="options.loanAmount" type="number"/>
          </a-form-item>
          <a-form-item label="贷款期限">
            <a-select v-model:value="options.repaymentPeriod" type="number">
              <a-select-option value="">自定义贷款期限</a-select-option>
              <a-select-option v-for="(n,index) in maxPeriod" :key="'repaymentPeriod'+index" :value="n">
                {{ n }}年({{ n * 12 }}月)
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="贷款月数">
            <a-input addon-after="月" v-model:value="options.loanMonth" :disabled="options.repaymentPeriod!==''"/>
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
        </a-form>
      </div>
    </a-col>
    <a-col :xs="24" :lg="18">
      <div class="panel">
        <a-form :wrapper-col="{ span: 24 }">
          <a-form-item>
            <a-input addon-before="多次提前还款后节省利息" addon-after="元" v-model:value="savedMoney" readonly/>
          </a-form-item>
          <a-form-item>
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
      loanAmount: '',
      repaymentPeriod: '',
      loanMonth: '',
      lendingRates: '4.9',
      repayment: '1'
    },
    maxPeriod: 30,

    dataSource: [],
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
      if (val !== '') {
        this.options.loanMonth = (parseInt(val) * 12).toString()
      } else {
        this.options.loanMonth = ''
      }
    }
  },
  computed: {
    savedMoney: () => {
      return 0
    }
  }
}
</script>

<style scoped lang="scss">
.panel {
  width: 100%;
  height: 100%;
  padding: 5px 8px;
}
</style>
