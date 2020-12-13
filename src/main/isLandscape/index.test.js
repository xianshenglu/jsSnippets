import isLandscape from '.'

describe('isLandscape', () => {
  test('() should return true', () => {
    const result = isLandscape()
    expect(result).toBe(true)
  })
})
