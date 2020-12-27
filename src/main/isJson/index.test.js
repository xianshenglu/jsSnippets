import isJson from '.'

describe('isJson', () => {
  test('("str") should return false', () => {
    expect(isJson('str')).toEqual(false)
  })

  test('({"name":"test","value":1}) should return true', () => {
    expect(isJson('{"name":"test","value":1}')).toEqual(true)
  })
})
