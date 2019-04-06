import * as web from '../../src/web'
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
    expect(web.$('.app__father')).toEqual([])
  })
  test('$("a") should equal Array.from(document.querySelectorAll("a"))', () => {
    expect(web.$('a')).toEqual(Array.from(document.querySelectorAll('a')))
  })
  test('$("a",document.querySelector(\'.app__nav\')) should equal Array.from(document.querySelector(\'.app__nav\').querySelectorAll("a"))', () => {
    expect(web.$('a', document.querySelector('.app__nav'))).toEqual(
      Array.from(document.querySelector('.app__nav').querySelectorAll('a'))
    )
  })
})
describe('closest', () => {
  let lastAppLink = Array.from(document.querySelectorAll('.app__link')).pop()
  let appCont = document.querySelectorAll('.app__cont')[0]
  let app = document.querySelectorAll('.app')[0]
  test('(lastAppLink,\'.app\',appCont) should return null', () => {
    let result = web.closest(lastAppLink, '.app', appCont)
    expect(result).toBe(null)
  })
  test('(lastAppLink,\'.app\') should return app', () => {
    let result = web.closest(lastAppLink, '.app')
    expect(result).toBe(app)
  })
})
describe('getElOffsetToEvent', () => {
  test('({},document.body)', () => {
    let result = web.getElOffsetToEvent(
      { clientX: 50, clientY: 50 },
      document.body
    )
    expect(typeof result.left).toBe('number')
    expect(typeof result.top).toBe('number')
    expect(typeof result.right).toBe('number')
    expect(typeof result.bottom).toBe('number')
  })
})
describe('isElement', () => {
  test('(document) should return true', () => {
    expect(web.isElement(document)).toBe(true)
  })
  test('(document.documentElement) should return true', () => {
    expect(web.isElement(document.documentElement)).toBe(true)
  })
  test('(document.createElement(\'svg\')) should return true', () => {
    expect(web.isElement(document.createElement('svg'))).toBe(true)
  })
  test('(document.createDocumentFragment()) should return false', () => {
    expect(web.isElement(document.createDocumentFragment())).toBe(false)
  })
  test('([]) should return false', () => {
    expect(web.isElement([])).toBe(false)
  })
  test('("") should return false', () => {
    expect(web.isElement('')).toBe(false)
  })
  test('(null) should return false', () => {
    expect(web.isElement(null)).toBe(false)
  })
})
describe('htmlEncodeByDom', () => {
  test('(<script></script>) should return &lt;script&gt;&lt;/script&gt;', () => {
    let result = web.htmlEncodeByDom('<script></script>')
    expect(result).toBe('&lt;script&gt;&lt;/script&gt;')
  })
  test('(<script>) should return &lt;script&gt;', () => {
    let result = web.htmlEncodeByDom('<script>')
    expect(result).toBe('&lt;script&gt;')
  })
})
describe('htmlDecodeByDom', () => {
  test('(<script></script>) should return &lt;script&gt;&lt;/script&gt;', () => {
    let result = web.htmlDecodeByDom('&lt;script&gt;&lt;/script&gt;')
    expect(result).toBe('<script></script>')
  })
  test('(&lt;script&gt;) should return <script>', () => {
    let result = web.htmlDecodeByDom('&lt;script&gt;')
    expect(result).toBe('<script>')
  })
})
describe('isLandscape', () => {
  test('() should return true', () => {
    let result = web.isLandscape()
    expect(result).toBe(true)
  })
})
