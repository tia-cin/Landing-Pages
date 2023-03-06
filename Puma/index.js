// overlay
TweenMax.to('.first', 1.5, {
    delay: .2,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.second', 1.5, {
    delay: .4,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.third', 1.5, {
    delay: .6,
    left: '-100%',
    ease: Expo.easeInOut
})

// navbar
TweenMax.from('.logo', 1, {
    delay: 1,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.from('.menu', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from('.search', .8, {
    delay: 1.6,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from('.bag', 1, {
    delay: 1.6,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

// social media
TweenMax.staggerFrom('.media ul li', 1, {
    delay: 2,
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08)

// product
TweenMax.from('.size', 1, {
    delay: 1.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom('.size ul li', .3, {
    delay: 2,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.from('.product-title', 3, {
    delay: 2.2,
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut
})
TweenMax.from('.product-img', 1, {
    delay: 4.2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})
TweenMax.from('.product-desc p', 3, {
    delay: 4.5,
    opacity: 0,
    y: -50,
    ease: Expo.easeInOut
})
TweenMax.from('.product-desc button', 3, {
    delay: 6,
    opacity: 0,
    y: -50,
    ease: Expo.easeInOut
})

// second product
TweenMax.from('.bottom-right ul li:first-child', .5, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.from('.bottom-right ul li:last-child', .6, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.from('.bottom-img', 1, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})