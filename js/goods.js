//create slider



// if (window.matchMedia("(min-width: 1024px)").matches) {
//     $('#goodsSlider').slick({
//         infinite: false,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         rows: 2,
//         arrows: true,
//         dots: true,
//         speed: 250,
//         appendArrows: '#goodsSliderController',
//         appendDots: '#goodsSliderController'
//     })
// }

addEventListener('DOMContentLoaded', createGoodsSlider())



addEventListener('resize', () => {
    const sliderBox = document.querySelector('#goodsSlider')
    sliderBox.innerHTML = ''
    $('#goodsSlider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        arrows: true,
        dots: true,
        speed: 250,
        appendArrows: '#goodsSliderController',
        appendDots: '#goodsSliderController'
    })
    $('#goodsSlider').slick('setPosition')
})

function createGoodsSlider() {
    if (window.matchMedia("(max-width: 567px)").matches) {
        console.log('567')
        $('#goodsSlider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            arrows: true,
            dots: true,
            speed: 250,
            appendArrows: '#goodsSliderController',
            appendDots: '#goodsSliderController'
        })
        $('#goodsSlider').slick('setPosition')
    } else {
        $('#goodsSlider').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 2,
            arrows: true,
            dots: true,
            speed: 250,
            appendArrows: '#goodsSliderController',
            appendDots: '#goodsSliderController',

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        })
        $('#goodsSlider').slick('setPosition')
    }
}

//goodsDots
btnsHasLoaded()

function loadingDOM() {
    const promise = new Promise(resolve => {
        addEventListener('DOMContentLoaded', () => resolve())
    })
    return promise
}

function lookingForBtns() {
    let goodsDots = document.querySelectorAll('#goodsSliderController button')
    return goodsDots
}

function modifyBtns(response) {
    let i = 1
    let goodsDots = Array
        .from(response)
        .filter(dot => !dot.classList.contains('slick-arrow'))
        .forEach(btn => {
            btn.classList.add(`dot${i}`)
            i++
        })
}

async function btnsHasLoaded() {
    try {
        await loadingDOM()
        const response = await lookingForBtns()
        await modifyBtns(response)

    } catch (e) {
        console.error(e)
    }
}


//filter
const goodsFilterLink = document.querySelectorAll('.goods__link')

goodsFilterLink.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('hover')
    })
    link.addEventListener('mouseleave', () => {
        link.classList.remove('hover')
    })
    link.addEventListener('click', e => {
        e.preventDefault()
        goodsFilterLink.forEach(link => link.classList.remove('active'))
        link.classList.add('active')

        let target = e.target.dataset.goodsLink
        switch (target) {
            case 'all':

                break;

            case 'raw':

                break;

            case 'processed':

                break;

            case 'furniture':

                break;

            default:
                console.error('Goods nav is broken')
        }
    })
})
