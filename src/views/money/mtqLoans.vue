<template>
  <container>
    <Row>
      <Row :span="24">
        <span class="tips">计算仅供参考，请以银行数据为准!</span>
      </Row>
    </Row>
    <Row>
      <Col :xs="24" :lg="6">
        <div class="panel">
          <Form layout="horizontal" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" labelAlign="left"
                  :colon="false">
            <Item label="贷款金额">
              <Input addon-after="元" v-model:value="loanAmount" type="number"/>
            </Item>
            <Item label="贷款期限">
              <Select v-model:value="repaymentPeriod" type="number">
                <Option :value="0">自定义贷款期限</Option>
                <Option v-for="(n,index) in 30" :key="'repaymentPeriod'+index" :value="n">
                  {{ n }}年({{ n * 12 }}月)
                </Option>
              </Select>
            </Item>
            <Item label="贷款月数">
              <Input addon-after="月" v-model:value="loanMonth" :disabled="repaymentPeriod!==0"/>
            </Item>
            <Item label="贷款利率">
              <Input addon-after="%" v-model:value="lendingRates"/>
            </Item>
            <Item label="还款方式">
              <Select v-model:value="repayment">
                <Option value="equalLoan">
                  等额本息
                </Option>
                <Option value="equalPrincipal">
                  等额本金
                </Option>
              </Select>
            </Item>
            <Item label="首次还款">
              <DatePicker v-model:value="firstRepaymentDate" :format="dateFormat" style="width: 100%"/>
            </Item>
            <Divider/>
            <Item>
              <Group>
                <Button type="primary" @click="addPrepayment" :disabled="!firstRepaymentDate">添加提前还款</Button>
                <Button @click="removePrepayment" v-if="prepayment.length > 0">移除</Button>
              </Group>
            </Item>
            <template v-for="(item, index) of prepayment" :key="index">
              <Divider orientation="left">第{{ index + 1 }}次提前还款</Divider>
              <Item label="还款日期">
                <DatePicker v-model:value="item.repaymentDate" :format="dateFormat" style="width: 100%"/>
              </Item>
              <Item label="提前还款金额">
                <Input addon-after="元" v-model:value="item.repaymentAmount" type="number"/>
              </Item>
              <Item label="调整期数">
                <Input addon-after="期" v-model:value="item.adjustLoanMonth" type="number"/>
              </Item>
              <Item label="调整利率">
                <Input addon-after="%" v-model:value="item.lendingRates"/>
              </Item>
            </template>
          </Form>
        </div>
      </Col>
      <Col :xs="24" :lg="18">
        <div class="panel">
          <Form :label-col="{span:6}" :wrapper-col="{ span: 18}" labelAlign="left" :colon="false">
            <Item label="累计提前还款">
              <Input addon-after="元" v-model:value="cumulativeRepayment" readonly/>
            </Item>
            <Item label="累计调整期数">
              <Input addon-after="元" v-model:value="cumulativeAdjustLoanMonth" readonly/>
            </Item>
            <Item label="原累计利息">
              <Input addon-after="元" v-model:value="originalCumulativeInterestPayment" readonly/>
            </Item>
            <Item label="累计缴息">
              <Input addon-after="元" v-model:value="cumulativeInterestPayment" readonly/>
            </Item>
            <Item label="累计节省利息">
              <Input addon-after="元" v-model:value="savedMoney" readonly/>
            </Item>
            <Item :wrapper-col="{span:24}">
              <Table :dataSource="dataSource" :columns="columns" bordered size="small" :pagination="false"/>
            </Item>
          </Form>
        </div>
      </Col>
    </Row>
  </container>
</template>

<script>
import moment from 'moment'
import { cloneDeep } from 'lodash'
import Container from '@/components/container.vue'
import { Row, Col, Form, Table, Input, Select, DatePicker, Divider, Button } from 'ant-design-vue'
const { Item } = Form
const { Option } = Select
const { Group } = Button

export default {
  name: '多次提前还贷计算器',
  components: { Container, Row, Col, Form, Table, Input, Item, Select, Option, DatePicker, Divider, Button, Group },
  data: () => ({
    loanAmount: 150000,
    repaymentPeriod: 2,
    loanMonth: 24,
    lendingRates: 4.5,
    repayment: 'equalLoan',
    firstRepaymentDate: moment(),

    prepayment: [],

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
    ],
    dateFormat: 'YYYY/MM/DD'
  }),
  watch: {
    repaymentPeriod (val) {
      if (val !== 0) {
        this.loanMonth = val * 12
      } else {
        this.loanMonth = 120
      }
    }
  },
  computed: {
    options: function () {
      const newOptions = {}
      if (!isNaN(parseFloat(this.loanAmount)) && parseFloat(this.loanAmount) > 0) {
        newOptions.loanAmount = parseFloat(this.loanAmount)
      }
      if (Number.isInteger(parseFloat(this.loanMonth)) && parseFloat(this.loanMonth) > 0) {
        newOptions.loanMonth = parseInt(this.loanMonth)
      }
      if (!isNaN(parseFloat(this.lendingRates)) && parseFloat(this.lendingRates) > 0) {
        newOptions.lendingRates = parseFloat(this.lendingRates)
      }
      if (moment.isMoment(this.firstRepaymentDate)) {
        newOptions.firstRepaymentDate = this.firstRepaymentDate
        if (this.prepayment.length === 0) {
          newOptions.prepayment = this.prepayment
        } else {
          let flag = true
          for (const i in this.prepayment) {
            if (i === '0') {
              if (!(moment.isMoment(this.prepayment[i].repaymentDate) && this.prepayment[i].repaymentDate.diff(this.firstRepaymentDate.clone().subtract(1, 'M'), 'days') >= 0)) {
                flag = false
                break
              }
            } else {
              if (!(moment.isMoment(this.prepayment[i].repaymentDate) && this.prepayment[i].repaymentDate.diff(this.prepayment[i - 1].repaymentDate, 'days') >= 0)) {
                flag = false
                break
              }
            }
          }
          if (flag) {
            newOptions.prepayment = this.prepayment
          }
        }
      }
      return newOptions
    },
    isValidOptions: function () {
      return Object.keys(this.options).length >= 5
    },

    originDataSource: function () {
      if (this.isValidOptions) {
        const result = []
        result.push({
          key: 0,
          times: 0,
          remainingPrincipal: this.options.loanAmount
        })
        if (this.repayment === 'equalLoan') {
          const remain = {
            loanAmount: this.options.loanAmount,
            loanMonth: this.options.loanMonth,
            lendingRates: this.options.lendingRates
          }
          for (let i = 1; i <= this.options.loanMonth; i++) {
            const amount = Number((-pmt(remain.lendingRates / 100.0 / 12, remain.loanMonth, remain.loanAmount)).toFixed(2))
            const interest = Number((remain.loanAmount * remain.lendingRates / 100.0 / 12).toFixed(2))
            const principal = Number((amount - interest).toFixed(2))
            remain.loanAmount -= principal
            remain.loanMonth--
            result.push({
              key: i,
              times: i,
              repaymentDate: this.options.firstRepaymentDate.clone().add((i - 1), 'M').format(this.dateFormat),
              monthlyAmount: amount,
              interestRepayment: interest,
              principalRepayment: principal,
              remainingPrincipal: Number(remain.loanAmount.toFixed(2))
            })
          }
        }
        if (this.repayment === 'equalPrincipal') {
          const remain = {
            loanAmount: this.options.loanAmount,
            loanMonth: this.options.loanMonth
          }
          for (let i = 1; i <= this.options.loanMonth; i++) {
            const principal = Number((remain.loanAmount / remain.loanMonth).toFixed(2))
            const interest = Number((remain.loanAmount * this.options.lendingRates / 100.0 / 12).toFixed(2))
            const amount = Number((principal + interest).toFixed(2))
            remain.loanAmount -= principal
            remain.loanMonth--
            result.push({
              key: i,
              times: i,
              repaymentDate: this.options.firstRepaymentDate.clone().add((i - 1), 'M').format(this.dateFormat),
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
    },
    dataSource: function () {
      try {
        if (this.isValidOptions) {
          const result = []
          result.push({
            key: 0,
            times: 0,
            remainingPrincipal: this.options.loanAmount
          })
          if (this.repayment === 'equalLoan') {
            const remain = {
              loanAmount: this.options.loanAmount,
              loanMonth: this.options.loanMonth,
              lendingRates: this.options.lendingRates
            }
            let adjustLoanMonth = 0
            let moreInterest = 0
            const prepayment = cloneDeep(this.options.prepayment)
            for (let i = 1; i <= this.options.loanMonth - adjustLoanMonth; i++) {
              if (i > 0) {
                while (prepayment.length > 0 && prepayment[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(i - 2, 'M').subtract(1, 'days'), this.options.firstRepaymentDate.clone().add(i - 1, 'M'), '[)')) {
                  const a = prepayment.shift()
                  if (Number(a.repaymentAmount || 0) > 0) {
                    remain.loanAmount -= Number(a.repaymentAmount)
                    remain.lendingRates = Number(a.lendingRates || 0)
                    remain.loanMonth -= Number(a.adjustLoanMonth || 0)
                    adjustLoanMonth += Number(a.adjustLoanMonth || 0)
                    result.push({
                      repaymentDate: a.repaymentDate.format(this.dateFormat),
                      principalRepayment: a.repaymentAmount,
                      remainingPrincipal: Number(remain.loanAmount.toFixed(2))
                    })
                  }
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
                repaymentDate: this.options.firstRepaymentDate.clone().add(i - 1, 'M').format(this.dateFormat),
                monthlyAmount: amount,
                interestRepayment: interest,
                principalRepayment: principal,
                remainingPrincipal: Number(remain.loanAmount.toFixed(2))
              })
            }
          }
          if (this.repayment === 'equalPrincipal') {
            const remain = {
              loanAmount: this.options.loanAmount,
              loanMonth: this.options.loanMonth,
              lendingRates: this.options.lendingRates
            }
            let adjustLoanMonth = 0
            let moreInterest = 0
            const prepayment = cloneDeep(this.options.prepayment)
            for (let i = 1; i <= this.options.loanMonth - adjustLoanMonth; i++) {
              if (prepayment.length > 0 && i > 1) {
                if (prepayment[0].repaymentDate.isBetween(this.options.firstRepaymentDate.clone().add(i - 2, 'M').subtract(1, 'days'), this.options.firstRepaymentDate.clone().add(i - 1, 'M'), '[)')) {
                  const a = prepayment.shift()
                  if (Number(a.repaymentAmount || 0) > 0) {
                    remain.loanAmount -= Number(a.repaymentAmount)
                    remain.lendingRates = Number(a.lendingRates || 0)
                    remain.loanMonth -= Number(a.adjustLoanMonth || 0)
                    adjustLoanMonth += Number(a.adjustLoanMonth || 0)
                    result.push({
                      repaymentDate: a.repaymentDate.format(this.dateFormat),
                      principalRepayment: a.repaymentAmount,
                      remainingPrincipal: Number(remain.loanAmount.toFixed(2))
                    })
                  }
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
                repaymentDate: this.options.firstRepaymentDate.clone().add((i - 1), 'M').format(this.dateFormat),
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
      } catch (e) {
        return []
      }
    },

    originalCumulativeInterestPayment: function () {
      let tmp = 0
      if (this.isValidOptions) {
        for (const item of this.originDataSource) {
          tmp += item.interestRepayment || 0
        }
      }
      return Number(tmp.toFixed(2))
    },
    cumulativeInterestPayment: function () {
      let tmp = 0
      if (this.isValidOptions) {
        for (const item of this.dataSource) {
          tmp += item.interestRepayment || 0
        }
      }
      return Number(tmp.toFixed(2))
    },
    cumulativeRepayment: function () {
      let tmp = 0
      if (this.isValidOptions) {
        for (const item of this.prepayment) {
          tmp += Number(item.repaymentAmount || 0)
        }
      }
      return tmp.toFixed(2)
    },
    cumulativeAdjustLoanMonth: function () {
      let tmp = 0
      if (this.isValidOptions) {
        for (const item of this.prepayment) {
          tmp += Number(item.adjustLoanMonth || 0)
        }
      }
      return tmp.toFixed(2)
    },
    savedMoney: function () {
      return (Number(this.originalCumulativeInterestPayment) - Number(this.cumulativeInterestPayment)).toFixed(2)
    }
  },
  methods: {
    addPrepayment () {
      let date, lendingRates
      if (this.prepayment.length === 0) {
        date = this.firstRepaymentDate || moment()
        lendingRates = this.lendingRates || 0
      } else {
        date = this.prepayment[this.prepayment.length - 1].repaymentDate || moment()
        lendingRates = this.prepayment[this.prepayment.length - 1].lendingRates || 0
      }
      this.prepayment.push({
        repaymentDate: date,
        repaymentAmount: 0,
        adjustLoanMonth: 0,
        lendingRates
      })
    },
    removePrepayment () {
      this.prepayment.pop()
    }
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
.tips {
  width: 100%;
  height: 100%;
  padding: .5rem .8rem;

  color: red;
}

.panel {
  width: 100%;
  height: 100%;
  padding: .5rem .8rem;

  .ant-calendar-picker {
    width: 100%;
  }
}
</style>
