import snippets from 'js-snippets'

document.body.innerHTML = `you import $, then you got${'body'}`
console.log(snippets.$('body')[0].innerHTML)
