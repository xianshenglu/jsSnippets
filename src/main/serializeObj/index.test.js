import serializeObj from '.'
describe('serializeObj', () => {
  test('normal', () => {
    expect(serializeObj({ x: 1, y: 2 })).toEqual('x=1&y=2')
  })
  test('undefined', () => {
    expect(serializeObj({ x: 1, y: undefined })).toEqual('x=1')
  })
  test('null', () => {
    expect(serializeObj({ x: 1, y: null })).toEqual('x=1')
  })
  test('empty string', () => {
    expect(serializeObj({ x: 1, y: '' })).toEqual('x=1')
  })
  test('transformer', () => {
    expect(
      serializeObj({ x: 1, y: new Date(2019, 0, 1) }, (key, value) =>
        value instanceof Date ? key + '=' + value.getTime() : key + '=' + value
      )
    ).toEqual('x=1&y=1546272000000')
  })
})
