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
      serializeObj({ x: 1, y: [1, 2, 3] }, (key, value) =>
        value instanceof Array ? `${key}=${value.join('|')}` : `${key}=${value}`
      )
    ).toEqual('x=1&y=1|2|3')
  })
})
