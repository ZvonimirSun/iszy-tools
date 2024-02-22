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
export default function pmt (ratePerPeriod: number, numberOfPayments: number, presentValue: number, futureValue?: number, type?: 0 | 1) {
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
