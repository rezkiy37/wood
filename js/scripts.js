console.log('JS ready!')

const body = document.querySelector('body')
const header = document.querySelector('#header')
const main = document.querySelector('#intro')

//headerHeight
let headerHeight = header.clientHeight

//body padding
body.style.paddingTop = `${headerHeight}px`

//intro height
main.style.height = `${window.innerHeight - headerHeight}px`

addEventListener('resize', () => {
    //headerHeight
    let headerHeight = header.clientHeight

    //body padding
    body.style.paddingTop = `${headerHeight}px`

    //intro height
    main.style.height = `${window.innerHeight - headerHeight}px`
})


//quote anim
const quoteDesc = document.querySelector('#quoteDesc')
const quoteDescList = document.querySelector('#quoteDescList')
const quotePicture = document.querySelector('#quotePicture')
const quoteImg = document.querySelector('#quoteImg')
const quoteheader = document.querySelector('#quoteheader')

let quoteHeight = quoteheader.offsetHeight
quoteDesc.style.height = `${quoteHeight + 20}px`

addEventListener('resize', () => {
    let quoteHeight = quoteheader.offsetHeight
    quoteDesc.style.height = `${quoteHeight + 20}px`
})

quoteDesc.addEventListener('mouseover', e => {
    quotePicture.classList.add('active')
    quoteDesc.style.overflowY = 'auto'
    quoteDesc.style.height = '95%'
})

quoteDesc.addEventListener('mouseleave', e => {
    quoteDesc.scrollTo(0, 0)
    quoteDesc.style.overflowY = 'hidden'
    quotePicture.classList.remove('active')
    quoteDesc.style.height = `${quoteHeight + 30}px`
})