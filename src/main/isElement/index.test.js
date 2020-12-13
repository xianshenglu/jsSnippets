import isElement from '.'
describe('isElement', () => {
  test('(document) should return true', () => {
    expect(isElement(document)).toBe(true)
  })
  test('(document.documentElement) should return true', () => {
    expect(isElement(document.documentElement)).toBe(true)
  })
  test("(document.createElement('svg')) should return true", () => {
    expect(isElement(document.createElement('svg'))).toBe(true)
  })
  test('(document.createDocumentFragment()) should return false', () => {
    expect(isElement(document.createDocumentFragment())).toBe(false)
  })
  test('([]) should return false', () => {
    expect(isElement([])).toBe(false)
  })
  test('("") should return false', () => {
    expect(isElement('')).toBe(false)
  })
  test('(null) should return false', () => {
    expect(isElement(null)).toBe(false)
  })
})
