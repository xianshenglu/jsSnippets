import $ from '.'
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
    expect($('.app__father')).toEqual([])
  })
  test('$("a") should equal Array.from(document.querySelectorAll("a"))', () => {
    expect($('a')).toEqual(Array.from(document.querySelectorAll('a')))
  })
  test('$("a",document.querySelector(\'.app__nav\')) should equal Array.from(document.querySelector(\'.app__nav\').querySelectorAll("a"))', () => {
    expect($('a', document.querySelector('.app__nav'))).toEqual(
      Array.from(document.querySelector('.app__nav').querySelectorAll('a'))
    )
  })
})
