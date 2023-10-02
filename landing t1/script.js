gsap.from("#b2", {
    scale:1.5,
    duration:2,
    delay:1,

})

gsap.to("#para3", {
    scrollTrigger:{
        trigger: "#para3",
        scroller: "body",
        start:"top 80%",
        end : "bottom 10%",
scrub: 2,
    },
    scale:1.5,
    duration:2,
    delay:1
})