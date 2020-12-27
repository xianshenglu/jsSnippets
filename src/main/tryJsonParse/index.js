/**
 * @module tryJsonParse
 * @description add error handler when using JSON.parse()
 * @param {*} jsonText
 * @param {string} [errorPropertyName='error']
 * @param {*} [valueForNull={ [errorPropertyName]: null }]
 * @returns {Object} new Object, with the original text saved in errorPropertyName
 * @example
 * tryJsonParse('str') //{error:'str'}
 * tryJsonParse(null,null) //{'null':null}
 * tryJsonParse(null,null,null) //null
 * tryJsonParse('{"name":"test","value":1}') //{name: "test", value: 1}
 */
export default function tryJsonParse(
  jsonText,
  errorPropertyName = 'error',
  valueForNull = { [errorPropertyName]: null }
) {
  try {
    return JSON.parse(jsonText) || valueForNull
  } catch (e) {
    return { [errorPropertyName]: jsonText }
  }
}
