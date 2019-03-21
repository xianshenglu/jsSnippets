/**
 * @author luxiansheng
 * @param { Object } obj
 * @param { Function } [transformer]
 * @returns { String } serialized string
 * @example
 * // returns x=1&y=2
 * serializeObj({x:1,y:2})
 * @example
 * // returns x=1
 * serializeObj({x:1,y:undefined})
 * @example
 * // returns x=1
 * serializeObj({x:1,y:null})
 * @example
 * // returns x=1
 * serializeObj({x:1,y:''})
 * @example
 * // returns x=1&y=15030230023
 * serializeObj({ x: 1, y: new Date() }, (key, value) => value instanceof Date ? key+'='+value.getTime() : key+'='+value)
 */

export function serializeObj(obj, transformer) {
  let reducer = (re, [key, value]) => {
    if (typeof value === 'undefined' || value === null || re + value === re) {
      return re
    }
    re += key + '=' + value + '&'
    return re
  }
  if (typeof transformer === 'function') {
    reducer = (re, [key, value]) => {
      const result = transformer(key, value)
      if (result === false) {
        return re
      }
      re += result + '&'
      return re
    }
  }
  return Object.entries(obj)
    .reduce(reducer, '')
    .replace(/&$/, '')
}

/**
 * @description get common date info of a date
 * @author luxiansheng
 * @param { Date } [date = new Date()]
 * @param { Boolean } [fillZero = true] fillZero
 * @example
 * // {"year":2019,"month":4,"date":21,"hour":13,"minute":26,"second":1,"millisecond":1555824361000}
 * getDateInfo({someDate:new Date(2019,3,21,13,26,1)})
 * @example
 * //{"year":2019,"month":3,"date":21,"hour":13,"minute":26,"second":1,"millisecond":1555824361000}
 * getDateInfo({someDate:new Date(2019,3,21,13,26,1),correctMonth:false})
 * @example
 * // {"yyyy":"2019","MM":"04","dd":"21","hh":"13","mm":"26","ss":"01","millisecond":"1555824361000"}
 * getDateInfo({someDate:new Date(2019,3,21,13,26,1),padStart:true,type:'string',fieldsMap:"yyyy-MM-dd hh:mm:ss"})
 */
export function getDateInfo({
  someDate = new Date(),
  correctMonth = true,
  padStart = false,
  type = 'number',
  fieldsMap = 'year-month-date hour:minute:second'
} = {}) {
  var year = someDate.getFullYear()
  var month = someDate.getMonth()
  var date = someDate.getDate()
  var hour = someDate.getHours()
  var minute = someDate.getMinutes()
  var second = someDate.getSeconds()
  var millisecond = someDate.getTime()
  if (correctMonth) {
    month += 1
  }
  if (type === 'string') {
    year = String(year)
    month = String(month)
    date = String(date)
    hour = String(hour)
    minute = String(minute)
    second = String(second)
    millisecond = String(millisecond)
  }
  if (padStart) {
    month = month.padStart(2, 0)
    date = date.padStart(2, 0)
    hour = hour.padStart(2, 0)
    minute = minute.padStart(2, 0)
    second = second.padStart(2, 0)
  }
  fieldsMap = fieldsMap.split(/[^a-zA-Z]/)
  const result = [year, month, date, hour, minute, second].reduce(
    (re, value, index) => {
      re[fieldsMap[index]] = value
      return re
    },
    {}
  )
  result.millisecond = millisecond
  return result
}
/**
 *
 * @param {{Array}} rules
 * @param {String} separator
 * @example
 * // [{"message":"field1 rule1！"},{"message":"field2 rule1！"},{"message":"field2 rule2！"}]
 * flatFormRules({ field1: [  {  message: 'field1 rule1！' } ], field2: [ {  message: 'field2 rule1！' }, {  message: 'field2 rule2！' }]})
 * @example
 * // [{"message":"field1 rule1！"},{"message":"field2 rule1！"}]
 * flatFormRules({ field1: [  {  message: 'field1 rule1！' } ], field2: [ {  message: 'field2 rule1！' },]})

 */
export function flatFormRules(rules) {
  return [].concat(...Object.values(rules))
}
