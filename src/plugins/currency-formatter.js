import numeral from 'numeral'

/**
 * 格式化货币
 * @param amount 要格式化的金额
 * @param currencyDisplay 是否显示货币符号
 * @author Yang.子慕
 */
export function formatCurrency(amount, currencyDisplay = false, returnOrigi = true) {
	if (returnOrigi && (amount === null || isNaN(amount))) {
	  return amount;
	}
	const decimalPlaces = 2
	const display = currencyDisplay ? '￥' : ''
	return display + numeral(convertToYuan(amount)).format(`0,0.${'0'.repeat(decimalPlaces)}`)
	// return new Intl.NumberFormat('zh-CN', {
	// 	style: currencyDisplay ? 'currency' : 'decimal',
	// 	minimumFractionDigits: 2,
	// 	maximumFractionDigits: 2,
	//     currency: 'CNY',
	// 	currencyDisplay: 'symbol'
	// }).format(convertToYuan(value));
}

export function convertToYuan(amount) {
  if (amount === null || isNaN(amount)) {
    return 0;
  }
  const amountInYuan = parseFloat(amount) / 100;
  const fixedAmount = amountInYuan.toFixed(2);
  return fixedAmount;
}

export default {
	install: (app) => {
		app.config.globalProperties.$formatCurrency = formatCurrency;
	},
};