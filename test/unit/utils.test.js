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
