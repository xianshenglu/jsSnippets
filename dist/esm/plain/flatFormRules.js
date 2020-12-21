/**
 *
 * @param {{Array}} rules
 * @example
 * // [{"message":"field1 rule1!"},{"message":"field2 rule1!"},{"message":"field2 rule2!"}]
 * flatFormRules({ field1: [  {  message: 'field1 rule1!' } ], field2: [ {  message: 'field2 rule1!' }, {  message: 'field2 rule2!' }]})
 * @example
 * // [{"message":"field1 rule1!"},{"message":"field2 rule1!"}]
 * flatFormRules({ field1: [  {  message: 'field1 rule1!' } ], field2: [ {  message: 'field2 rule1!' }]})

 */
function flatFormRules(rules) {
  return [].concat(...Object.values(rules));
}

export default flatFormRules;
