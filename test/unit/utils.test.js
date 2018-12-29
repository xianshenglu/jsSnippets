const utils = require('../../src/utils')
describe('sortCharacters', () => {
  test('(sfdaffaadaafafsfed) should equal  ["e", "ss", "ddd", "aaaaaa", "ffffff"]', () => {
    expect(utils.sortCharacters('sfdaffaadaafafsfed')).toEqual([
      'e',
      'ss',
      'ddd',
      'aaaaaa',
      'ffffff'
    ])
  })
  test('(\'\') should equal  [\'\']', () => {
    expect(utils.sortCharacters('')).toEqual([''])
  })
  test('(non-String) should throw Error()', () => {
    expect(() => {
      utils.sortCharacters(4)
    }).toThrow()
  })
})

describe('getPseudorandom', () => {
  test('([1, 2, 3, 4,5,6]) shouldn\'t equal [1, 2, 3, 4, 5, 6]', () => {
    expect(utils.getPseudorandom([1, 2, 3, 4, 5, 6])).not.toEqual([
      1,
      2,
      3,
      4,
      5,
      6
    ])
  })
})

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
  test('(\'str\') should return false', () => {
    expect(utils.isObject('str')).toBe(false)
  })
})
describe('isPlainObject', () => {
  test('(false) should return false', () => {
    expect(utils.isPlainObject(false)).toBe(false)
  })
  test('(new Function()) should return false', () => {
    expect(utils.isPlainObject(new Function())).toBe(false)
  })
  test('({}) should return true', () => {
    expect(utils.isPlainObject({})).toBe(true)
  })
})
describe('isPlainObject', () => {
  test('(false) should return false', () => {
    expect(utils.isPlainObject(false)).toBe(false)
  })
  test('(new Function()) should return false', () => {
    expect(utils.isPlainObject(new Function())).toBe(false)
  })
  test('({}) should return true', () => {
    expect(utils.isPlainObject({})).toBe(true)
  })
})
describe('replaceProperty', () => {
  test('({a:{b:{c:1}}},{path:\'a.b.c\',data:2}) should change first param to {a:{b:{c:2}}}', () => {
    let state = { a: { b: { c: 1 } } }
    utils.replaceProperty(state, { path: 'a.b.c', data: 2 })
    expect(state).toEqual({ a: { b: { c: 2 } } })
  })
  test('({a:{b:{c:[1,2,3]}}},{path:\'a.b.c.1\',data:1}) should change first param to {a:{b:{c:[1,1,3]}}}', () => {
    let state = { a: { b: { c: [1, 2, 3] } } }
    utils.replaceProperty(state, { path: 'a.b.c.1', data: 1 })
    expect(state).toEqual({ a: { b: { c: [1, 1, 3] } } })
  })
  test('({a:{}},{path:\'a\',data:1}) should change first param to {a:1}', () => {
    let state = { a: {} }
    utils.replaceProperty(state, { path: 'a', data: 1 })
    expect(state).toEqual({ a: 1 })
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
  test('(null,null) should return {\'null\':null}', () => {
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
  test('({width:100,height:100},{width:50,height:200}),\'cover\') should return {width:100,height:400,offsetX:0,offsetY:-300}', () => {
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
  test('({width:100,height:100},{width:200,height:50}),\'cover\') should return {width:400,height:100,offsetX:-300,offsetY:0}', () => {
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
