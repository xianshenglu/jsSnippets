import * as utils from '../../src/utils'

describe('toFixedNoLast0', () => {
  test('(12.20000, 4) should equal 12.2', () => {
    expect(utils.toFixedNoLast0(Number('12.20000'), 4)).toBe('12.2')
  })
  test('(12, 4) should equal 12', () => {
    expect(utils.toFixedNoLast0(Number('12'), 4)).toBe('12')
  })
  test('(12.2, 4) should equal 12.2', () => {
    expect(utils.toFixedNoLast0(Number('12.2'), 4)).toBe('12.2')
  })
})

describe('camelToHyphen', () => {
  test('(\'camel\') should equal "camel"', () => {
    expect(utils.camelToHyphen('camel')).toBe('camel')
  })
  test('(\'camelToHyphen\') should equal "camel-to-hyphen"', () => {
    expect(utils.camelToHyphen('camelToHyphen')).toBe('camel-to-hyphen')
  })
})

describe('hyphenToCamel', () => {
  test('(\'camel\') should equal "camel"', () => {
    expect(utils.hyphenToCamel('camel')).toBe('camel')
  })
  test('(\'hyphenToCamel\') should equal "hyphenToCamel"', () => {
    expect(utils.hyphenToCamel('hyphen-to-camel')).toBe('hyphenToCamel')
  })
})

describe('isObject', () => {
  test('(new Function()) should return true', () => {
    expect(utils.isObject(new Function())).toBe(true)
  })
  test('(new RegExp()) should return true', () => {
    expect(utils.isObject(new RegExp())).toBe(true)
  })
  test('({}) should return true', () => {
    expect(utils.isObject({})).toBe(true)
  })
  test("('str') should return false", () => {
    expect(utils.isObject('str')).toBe(false)
  })
})

describe('flattenArr', () => {
  let data1 = [
    {
      value: '1',
      children: [
        { value: '1.1', children: [{ value: '1.1.1' }] },
        { value: '1.2', children: [{ value: '1.2.1', children: [] }] }
      ]
    }
  ]
  let result1 = [
    {
      value: '1',
      children: [
        { value: '1.1', children: [{ value: '1.1.1' }] },
        { value: '1.2', children: [{ value: '1.2.1', children: [] }] }
      ]
    },
    { value: '1.1', children: [{ value: '1.1.1' }] },
    { value: '1.1.1' },
    { value: '1.2', children: [{ value: '1.2.1', children: [] }] },
    { value: '1.2.1', children: [] }
  ]
  test(`(${JSON.stringify(data1)}) should return ${JSON.stringify(
    result1
  )}`, () => {
    expect(utils.flattenArr(data1)).toEqual(result1)
  })
  let data2 = [
    {
      value: '1',
      child: [
        { value: '1.1', child: [{ value: '1.1.1' }] },
        { value: '1.2', child: [{ value: '1.2.1', child: [] }] }
      ]
    }
  ]
  let result2 = [
    {
      value: '1',
      child: [
        { value: '1.1', child: [{ value: '1.1.1' }] },
        { value: '1.2', child: [{ value: '1.2.1', child: [] }] }
      ]
    },
    { value: '1.1', child: [{ value: '1.1.1' }] },
    { value: '1.1.1' },
    { value: '1.2', child: [{ value: '1.2.1', child: [] }] },
    { value: '1.2.1', child: [] }
  ]
  test(`(${JSON.stringify(data2)}) should return ${JSON.stringify(
    result2
  )}`, () => {
    expect(utils.flattenArr(data2, 'child')).toEqual(result2)
  })
})
describe('tryJsonParse', () => {
  test('("str") should return {error:\'str\'}', () => {
    expect(utils.tryJsonParse('str')).toEqual({ error: 'str' })
  })
  test("(null,null) should return {'null':null}", () => {
    expect(utils.tryJsonParse(null, null)).toEqual({ null: null })
  })
  test('(null,null,null) should return null', () => {
    expect(utils.tryJsonParse(null, null, null)).toEqual(null)
  })
  test('({"name":"test","value":1}) should return {"name":"test","value":1}', () => {
    expect(utils.tryJsonParse('{"name":"test","value":1}')).toEqual({
      name: 'test',
      value: 1
    })
  })
})
describe('calcSizeWithRespectRatio', () => {
  test('({width:100,height:100},{width:50,height:200}) should return { width: 25, height: 100, offsetX: 75, offsetY: 0 }', () => {
    let result = utils.calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 50, height: 200 }
    )
    let expectedResult = { width: 25, height: 100, offsetX: 75, offsetY: 0 }
    expect(result).toEqual(expectedResult)
  })
  test('({width:100,height:100},{width:200,height:50}) should return { width: 100, height: 25, offsetX: 0, offsetY: 75 }', () => {
    let result = utils.calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 200, height: 50 }
    )
    let expectedResult = { width: 100, height: 25, offsetX: 0, offsetY: 75 }
    expect(result).toEqual(expectedResult)
  })
  test("({width:100,height:100},{width:50,height:200}),'cover') should return {width:100,height:400,offsetX:0,offsetY:-300}", () => {
    let result = utils.calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 50, height: 200 },
      'cover'
    )
    let expectedResult = {
      width: 100,
      height: 400,
      offsetX: 0,
      offsetY: -300
    }
    expect(result).toEqual(expectedResult)
  })
  test("({width:100,height:100},{width:200,height:50}),'cover') should return {width:400,height:100,offsetX:-300,offsetY:0}", () => {
    let result = utils.calcSizeWithRespectRatio(
      { width: 100, height: 100 },
      { width: 200, height: 50 },
      'cover'
    )
    let expectedResult = {
      width: 400,
      height: 100,
      offsetX: -300,
      offsetY: 0
    }
    expect(result).toEqual(expectedResult)
  })
})

describe('serializeObj', () => {
  test('normal', () => {
    expect(utils.serializeObj({ x: 1, y: 2 })).toEqual('x=1&y=2')
  })
  test('undefined', () => {
    expect(utils.serializeObj({ x: 1, y: undefined })).toEqual('x=1')
  })
  test('null', () => {
    expect(utils.serializeObj({ x: 1, y: null })).toEqual('x=1')
  })
  test('empty string', () => {
    expect(utils.serializeObj({ x: 1, y: '' })).toEqual('x=1')
  })
  test('transformer', () => {
    expect(
      utils.serializeObj({ x: 1, y: new Date(2019, 0, 1) }, (key, value) =>
        value instanceof Date ? key + '=' + value.getTime() : key + '=' + value
      )
    ).toEqual('x=1&y=1546272000000')
  })
})

describe('flatFormRules', () => {
  test('no rule', () => {
    expect(utils.flatFormRules({})).toEqual([])
  })
  test('single rule', () => {
    expect(
      utils.flatFormRules({
        field1: [{ message: 'field1 rule1!' }],
        field2: [{ message: 'field2 rule1!' }]
      })
    ).toEqual([{ message: 'field1 rule1!' }, { message: 'field2 rule1!' }])
  })
  test('multiple rules', () => {
    expect(
      utils.flatFormRules({
        field1: [{ message: 'field1 rule1!' }],
        field2: [{ message: 'field2 rule1!' }, { message: 'field2 rule2!' }]
      })
    ).toEqual([
      { message: 'field1 rule1!' },
      { message: 'field2 rule1!' },
      { message: 'field2 rule2!' }
    ])
  })
})
