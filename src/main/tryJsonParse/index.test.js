import tryJsonParse from '.'

describe('tryJsonParse', () => {
  test('("str") should return {error:\'str\'}', () => {
    expect(tryJsonParse('str')).toEqual({ error: 'str' })
  })
  test("(null,null) should return {'null':null}", () => {
    expect(tryJsonParse(null, null)).toEqual({ null: null })
  })
  test('(null,null,null) should return null', () => {
    expect(tryJsonParse(null, null, null)).toEqual(null)
  })
  test('({"name":"test","value":1}) should return {"name":"test","value":1}', () => {
    expect(tryJsonParse('{"name":"test","value":1}')).toEqual({
      name: 'test',
      value: 1,
    })
  })
})
