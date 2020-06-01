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
    body.classList.remove('no-scroll')
    if (window.matchMedia("(max-width: 567px)").matches) {
        headerAside.style.right = `-${headerAside.clientWidth + 7}px`
    } else {
        headerAside.style.left = `-${headerAside.clientWidth + 7}px`
    }
}
let headerAsideOpen = () => {
    body.classList.add('no-scroll')
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


