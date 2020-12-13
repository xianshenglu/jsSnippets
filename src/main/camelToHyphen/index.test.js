import camelToHyphen from '.'

describe('camelToHyphen', () => {
  test('(\'camel\') should equal "camel"', () => {
    expect(camelToHyphen('camel')).toBe('camel')
  })
  test('(\'camelToHyphen\') should equal "camel-to-hyphen"', () => {
    expect(camelToHyphen('camelToHyphen')).toBe('camel-to-hyphen')
  })
})
