//header-burger
const headerBurger = document.querySelector('#headerBurger')

headerBurger.addEventListener('click', () => {
    setTimeout(() => {
        headerAsideOpen(true)
    }, 200);
})


//header-aside
const headerAside = document.querySelector('#headerAside')

headerAside.addEventListener('click', e => console.log(e))

let headerAsideClose = (noScroll = true) => {
    body.style.paddingRight = 0

    if (noScroll) {
        body.classList.remove('no-scroll')
    }

    setTimeout(() => {
        if (window.matchMedia("(max-width: 567px)").matches) {
            headerAside.style.left = 'auto'
            headerAside.style.right = `-${headerAside.offsetWidth}px`
        }
        else {
            headerAside.style.right = 'auto'
            headerAside.style.left = `-${headerAside.offsetWidth}px`
        }
    }, 100);
}

let headerAsideOpen = (noScroll = true) => {
    headerAside.style.visibility = 'visible'

    if (noScroll) {
        body.classList.add('no-scroll')
    }

    if (window.matchMedia("(max-width: 567px)").matches) {
        headerAside.style.left = 'auto'
        headerAside.style.right = 0
    }
    else {
        body.style.paddingRight = '8px'
        headerAside.style.right = 'auto'
        headerAside.style.left = 0
    }
}

headerAsideClose()

addEventListener('resize', () => {
    headerAsideClose(false)
})

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


