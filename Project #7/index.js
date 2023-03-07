TweenMax.from(".navbar", 1.5, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".blocks", 1.5, {
    delay: 1.6,
    opacity: 0,
    x: -60,
    ease: Expo.easeInOut
})

TweenMax.from(".tag-line", 1.5, {
    delay: 2,
    opacity: 0,
    x: -80,
    ease: Expo.easeInOut
})

TweenMax.from(".hero", 2, {
    delay: 3,
    opacity: 0,
    x: 170,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".title", 3, {
    delay: 4.4,
    y: "500",
    ease: Elastic.easeOut.config(2, 0.4)
}, 0.2)

TweenMax.from(".year", 1.5, {
    delay: 5,
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
})

TweenMax.from(".content p", 2, {
    delay: 5.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".content button", 2, {
    delay: 5.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".media ul li", 1.5, {
    delay: 6,
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut
}, 0.08)