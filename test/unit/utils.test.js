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
