import isLandscape from '.'
describe('isLandscape', () => {
  test('() should return true', () => {
    let result = isLandscape()
    expect(result).toBe(true)
  })
})
