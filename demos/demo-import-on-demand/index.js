import { $ } from '@xianshenglu/js-snippets'

document.body.innerHTML = `you import $, then you got${'body'}`
console.log($('body')[0].innerHTML)
