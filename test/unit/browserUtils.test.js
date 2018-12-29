const domUtils = require('../../src/browserUtils')
document.body.innerHTML = `
    <div class="app">
      <nav class="app__nav">
        <a href="" class="app__link"></a>
        <a href="" class="app__link"></a>
      </nav>
      <main class="app__cont">
        <a href="" class="app__link"></a>
        <a href="" class="app__link"></a>
      </main>
    </div>
`
describe('$', () => {
  test('$(".app__father") should equal  []', () => {
    expect(domUtils.$('.app__father')).toEqual([])
  })
  test('$("a") should equal  Array.from(document.querySelectorAll("a"))', () => {
    expect(domUtils.$('a')).toEqual(Array.from(document.querySelectorAll('a')))
  })
  test('$("a",document.querySelector(\'.app__nav\')) should equal  Array.from(document.querySelector(\'.app__nav\').querySelectorAll("a"))', () => {
    expect(domUtils.$('a', document.querySelector('.app__nav'))).toEqual(
      Array.from(document.querySelector('.app__nav').querySelectorAll('a'))
    )
  })
})
describe('getElOffsetToEvent', () => {
  test('({},document.body)', () => {
    let result = domUtils.getElOffsetToEvent(
      { clientX: 50, clientY: 50 },
      document.body
    )
    expect(typeof result.left).toBe('number')
    expect(typeof result.top).toBe('number')
    expect(typeof result.right).toBe('number')
    expect(typeof result.bottom).toBe('number')
  })
})
