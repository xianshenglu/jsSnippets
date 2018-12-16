const utils = require('../../src/utils')
test('sortCharacters sfdaffaadaafafsfed to equal  ["e", "ss", "ddd", "aaaaaa", "ffffff"]', () => {
  expect(utils.sortCharacters('sfdaffaadaafafsfed')).toEqual([
    'e',
    'ss',
    'ddd',
    'aaaaaa',
    'ffffff'
  ])
})
test('sortCharacters \'\' to equal  [\'\']', () => {
  expect(utils.sortCharacters('')).toEqual([''])
})
test('sortCharacters non-String will throw Error()', () => {
  expect(() => {
    utils.sortCharacters(4)
  }).toThrow()
})
test('getPseudorandom([1, 2, 3, 4,5,6]) won\'t equal [1, 2, 3, 4, 5, 6]', () => {
  expect(utils.getPseudorandom([1, 2, 3, 4, 5, 6])).not.toEqual([
    1,
    2,
    3,
    4,
    5,
    6
  ])
})
test('toFixedNoLast0(non-Number) should throw Error', () => {
  expect(() => {
    utils.toFixedNoLast0('123', 4)
  }).toThrow()
})
test('toFixedNoLast0(12.20000, 4) equal 12.2', () => {
  expect(utils.toFixedNoLast0(Number('12.20000'), 4)).toBe('12.2')
})
test('toFixedNoLast0(12, 4) equal 12', () => {
  expect(utils.toFixedNoLast0(Number('12'), 4)).toBe('12')
})
test('toFixedNoLast0(12.2, 4) equal 12.2', () => {
  expect(utils.toFixedNoLast0(Number('12.2'), 4)).toBe('12.2')
})
test('camelToHyphen(non-String) should throw Error', () => {
  expect(() => {
    utils.camelToHyphen(123)
  }).toThrow()
})
test('camelToHyphen(\'camel\') should equal "camel"', () => {
  expect(utils.camelToHyphen('camel')).toBe('camel')
})
test('camelToHyphen(\'camelToHyphen\') should equal "camel-to-hyphen"', () => {
  expect(utils.camelToHyphen('camelToHyphen')).toBe('camel-to-hyphen')
})
test('hyphenToCamel(non-String) should throw Error', () => {
  expect(() => {
    utils.hyphenToCamel(123)
  }).toThrow()
})
test('hyphenToCamel(\'camel\') should equal "camel"', () => {
  expect(utils.hyphenToCamel('camel')).toBe('camel')
})
test('hyphenToCamel(\'hyphenToCamel\') should equal "hyphen-to-camel"', () => {
  expect(utils.hyphenToCamel('hyphen-to-camel')).toBe('hyphenToCamel')
})
