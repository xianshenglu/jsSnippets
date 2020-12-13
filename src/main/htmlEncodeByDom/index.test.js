import htmlEncodeByDom from '.'
describe('htmlEncodeByDom', () => {
  test('(<script></script>) should return &lt;script&gt;&lt;/script&gt;', () => {
    let result = htmlEncodeByDom('<script></script>')
    expect(result).toBe('&lt;script&gt;&lt;/script&gt;')
  })
  test('(<script>) should return &lt;script&gt;', () => {
    let result = htmlEncodeByDom('<script>')
    expect(result).toBe('&lt;script&gt;')
  })
})
