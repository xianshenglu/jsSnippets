import htmlDecodeByDom from '.'
describe('htmlDecodeByDom', () => {
  test('(<script></script>) should return &lt;script&gt;&lt;/script&gt;', () => {
    let result = htmlDecodeByDom('&lt;script&gt;&lt;/script&gt;')
    expect(result).toBe('<script></script>')
  })
  test('(&lt;script&gt;) should return <script>', () => {
    let result = htmlDecodeByDom('&lt;script&gt;')
    expect(result).toBe('<script>')
  })
})
