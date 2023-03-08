let textWrapper = document.querySelector(".title");

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

anime.timeline().add({
    targets: ".title .letter",
    translateY: [200, 0],
    easing: "easeOutExpo",
    opacity: 1,
    duration: 1700,
    delay: (e, i) => 400 + 70 * i
})

TweenMax.from(".scrolldown", 1.5, {
    delay: 0.7,
    opacity: 0,
    y: 200,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu ul li", 1.5, {
    delay: 1,
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut
})