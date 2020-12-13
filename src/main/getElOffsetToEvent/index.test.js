import getElOffsetToEvent from '.'

describe('getElOffsetToEvent', () => {
  test('({},document.body)', () => {
    const result = getElOffsetToEvent(
      { clientX: 50, clientY: 50 },
      document.body
    )
    expect(typeof result.left).toBe('number')
    expect(typeof result.top).toBe('number')
    expect(typeof result.right).toBe('number')
    expect(typeof result.bottom).toBe('number')
  })
})
