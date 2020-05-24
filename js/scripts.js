console.log('JS ready!')

const body = document.querySelector('body')
const header = document.querySelector('#header')
const main = document.querySelector('#intro')

let headerHeight = header.clientHeight

//body padding
body.style.paddingTop = `${headerHeight}px`
//intro height
main.style.height = `${window.innerHeight - headerHeight}px`