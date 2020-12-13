import toFixedNoLast0 from '.'

describe('toFixedNoLast0', () => {
  test('(12.20000, 4) should equal 12.2', () => {
    expect(toFixedNoLast0(Number('12.20000'), 4)).toBe('12.2')
  })
  test('(12, 4) should equal 12', () => {
    expect(toFixedNoLast0(Number('12'), 4)).toBe('12')
  })
  test('(12.2, 4) should equal 12.2', () => {
    expect(toFixedNoLast0(Number('12.2'), 4)).toBe('12.2')
  })
})
