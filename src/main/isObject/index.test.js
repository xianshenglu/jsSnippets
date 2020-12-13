import isObject from '.'

describe('isObject', () => {
  test('(new Function()) should return true', () => {
    // eslint-disable-next-line no-new-func
    expect(isObject(new Function())).toBe(true)
  })
  test('(new RegExp()) should return true', () => {
    expect(isObject(new RegExp())).toBe(true)
  })
  test('({}) should return true', () => {
    expect(isObject({})).toBe(true)
  })
  test("('str') should return false", () => {
    expect(isObject('str')).toBe(false)
  })
})
