import htmlDecodeByDom from '.'

describe('htmlDecodeByDom', () => {
  test('(<script></script>) should return &lt;script&gt;&lt;/script&gt;', () => {
    const result = htmlDecodeByDom('&lt;script&gt;&lt;/script&gt;')
    expect(result).toBe('<script></script>')
  })
  test('(&lt;script&gt;) should return <script>', () => {
    const result = htmlDecodeByDom('&lt;script&gt;')
    expect(result).toBe('<script>')
  })
})
