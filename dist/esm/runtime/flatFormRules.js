import _Object$values from '@babel/runtime-corejs3/core-js-stable/object/values';
import _concatInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/concat';

/**
 * @module flatFormRules
 * @param {{Array}} rules
 * @example
 * // [{"message":"field1 rule1!"},{"message":"field2 rule1!"},{"message":"field2 rule2!"}]
 * flatFormRules({ field1: [  {  message: 'field1 rule1!' } ], field2: [ {  message: 'field2 rule1!' }, {  message: 'field2 rule2!' }]})
 * @example
 * // [{"message":"field1 rule1!"},{"message":"field2 rule1!"}]
 * flatFormRules({ field1: [  {  message: 'field1 rule1!' } ], field2: [ {  message: 'field2 rule1!' }]})

 */
function flatFormRules(rules) {
  var _context;

  return _concatInstanceProperty(_context = []).call(_context, ..._Object$values(rules));
}

export default flatFormRules;
