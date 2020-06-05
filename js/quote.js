//quote anim
const quoteDesc = document.querySelector('#quoteDesc')
const quoteDescList = document.querySelector('#quoteDescList')
const quotePicture = document.querySelector('#quotePicture')
const quoteImg = document.querySelector('#quoteImg')
const quoteheader = document.querySelector('#quoteheader')

let quoteHeight = quoteheader.offsetHeight
quoteDesc.style.height = `${quoteHeight + 20}px`

quoteDesc.classList.add('passive')

if (quoteDesc.classList.contains('passive')) {
    setInterval(() => {
        quoteDesc.style.height = `${quoteHeight + 30}px`

        setTimeout(() => {
            quoteDesc.style.height = `${quoteHeight + 20}px`
        }, 1500);
    }, 2500);
}

addEventListener('resize', () => {
    let quoteHeight = quoteheader.offsetHeight
    quoteDesc.style.height = `${quoteHeight + 20}px`

    quoteDesc.style.overflowY = 'hidden'
})

quoteDesc.addEventListener('mouseover', e => {
    quotePicture.classList.add('active')

    quoteDesc.classList.remove('passive')
    quoteDesc.style.overflowY = 'auto'
    quoteDesc.style.height = '95%'
})

quoteDesc.addEventListener('mouseleave', e => {
    quotePicture.classList.remove('active')

    quoteDesc.classList.add('passive')
    quoteDesc.scrollTo(0, 0)
    quoteDesc.style.overflowY = 'hidden'
    quoteDesc.style.height = `${quoteHeight + 20}px`
})