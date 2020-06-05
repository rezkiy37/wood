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


let lastPosition = 0

addEventListener('scroll', () => {
    if (lastPosition > window.scrollY) {
        lastPosition = window.scrollY

        header.style.transform = 'translateY(0)'
    }
    else if (lastPosition < window.scrollY) {
        lastPosition = window.scrollY

        header.style.transform = 'translateY(-100%)'
    }
})