import hyphenToCamel from '.'

describe('hyphenToCamel', () => {
  test('(\'camel\') should equal "camel"', () => {
    expect(hyphenToCamel('camel')).toBe('camel')
  })
  test('(\'hyphenToCamel\') should equal "hyphenToCamel"', () => {
    expect(hyphenToCamel('hyphen-to-camel')).toBe('hyphenToCamel')
  })
})
