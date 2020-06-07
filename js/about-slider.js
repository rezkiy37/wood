console.log('about slider')

let sliderItems = document.querySelectorAll('.slider__item__inner')
let sliderItem = document.querySelector('.slider__item__inner')

size().then(function (size) {
    sliderHover(size)
})

addEventListener('resize', () => {
    size().then(function (size) {
        sliderHover(size)
    })
})

let sliderHover = (size) => {
    sliderItems.forEach(item => {
        item.style.width = `${size}px`
        item.style.height = `${size}px`

        item.addEventListener('mouseover', e => {
            item.classList.add('hover')
        })

        item.addEventListener('mouseleave', e => {
            item.classList.remove('hover')
        })
    })

    $('.gallery__slider').slick('setPosition')
}

function size() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            let size = sliderItem.offsetWidth
            resolve(size)
        }, 0)
    })
    return promise
}

$('#aboutSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 250,
    appendArrows: '#aboutSliderController',

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 568,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})







