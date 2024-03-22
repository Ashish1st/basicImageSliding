const tl = gsap.timeline({
    repeat: -1
})

tl.to("#imageContainer", {
    width: "100%",
    ease: "sine.out",
    stagger: 2,
}, 'lineByLine')

tl.to(".text h1", {
    ease: "sine.out",
    stagger: 2,
    top: 0,
}, 'lineByLine')


tl.to(".text h1", {
    delay: 2,
    ease: "sine.out",
    stagger: 2,
    top: "-100%",
}, 'lineByLine')
