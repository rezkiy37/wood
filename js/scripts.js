console.log('JS ready!')

const body = document.querySelector('body')
const header = document.querySelector('#header')
const main = document.querySelector('#intro')


let headerHeight = header.clientHeight

//body padding
body.style.paddingTop = `${headerHeight}px`

//header-burger
const headerBurger = document.querySelector('#headerBurger')

headerBurger.addEventListener('click', () => {
    setTimeout(() => {
        headerAsideOpen()
    }, 201);
})

//header-aside
const headerAside = document.querySelector('#headerAside')

let headerAsideClose = () => {
    if (window.matchMedia("(max-width: 567px)").matches) {
        headerAside.style.right = `-${headerAside.clientWidth + 7}px`
    } else {
        headerAside.style.left = `-${headerAside.clientWidth + 7}px`
    }
}
let headerAsideOpen = () => {
    if (window.matchMedia("(max-width: 567px)").matches) {
        headerAside.style.right = 0
    } else {
        headerAside.style.left = 0
    }
}

headerAsideClose()

let headerAsideLinks = document.querySelectorAll('.header-aside__link')

headerAsideLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        headerAsideClose()
    })
})

body.addEventListener('click', e => {
    let target = e.target;
    if (target.id != 'headerBurger') {
        headerAsideClose()
    }
})

//intro height
main.style.height = `${window.innerHeight - headerHeight}px`

