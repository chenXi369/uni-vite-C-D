// 时间格式处理

const handleTime = (time) => {
	return time >= 10 ? time : '0' + time
}

export function formatTime(time) {
	const d = new Date(time)
	const year = d.getFullYear()
	const month = handleTime(d.getMonth() + 1)
	const date = handleTime(d.getDate())
	const hours = handleTime(d.getHours())
	const min = handleTime(d.getMinutes())
	const sec = handleTime(d.getSeconds())
	return year + '/' + month + '/' + date + ' ' + hours + ':' + min + ':' + sec
}

export function dateToTimestamp(date) {
  return new Date(date).getTime()
}

// 获取日期
function getDay(d, num) {
  const date = new Date(new Date(d).setDate(new Date(d).getDate() + num))
  const year = date.getFullYear()
  const month = (date.getMonth() + 1 + "").padStart(2, "0")
  const day = (date.getDate() + "").padStart(2, "0")
  return `${year}/${month}/${day}`
}

// 是否是闰年
function isLeap(year){
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}

// 返回去年日期
export function lastYearDate(d) {
  const date = new Date(d)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const lastYear = year - 1
  const thisYearisLeap = isLeap(year)
  const lastYearIsLeap = isLeap(lastYear)
  // 特殊情况：去年是否是闰年 或 今年是闰年且为12月31日
  if (lastYearIsLeap || (thisYearisLeap && month == 12 && day == 31)) return getDay(d, -366)
  return getDay(d, -365)
}

// 设置年月日
export function setDateName(date) {
  const regex = /^(\d{4})-(\d{2})-(\d{2})$/
  const match = regex.exec(date)
  
  if (match) {
    const year = match[1]
    const month = match[2]
    const day = match[3]
    return `${year}年${month}月${day}日`
  } else {
    console.log("日期格式不正确");
  }
}
