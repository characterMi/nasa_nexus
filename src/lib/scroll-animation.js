import gsap from "gsap";

export const aboutScrollAnimation = () => {
    gsap.to('.name', {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: ".name",
            start: "top bottom",
        }
    })
    gsap.to('.about', {
        opacity: 1,
        duration: 2,
        delay: 0.8,
        scrollTrigger: {
            trigger: ".about",
            start: "top bottom",
        }
    })
    gsap.to('.links', {
        opacity: 1,
        duration: 1,
        delay: 1,
        x: 80,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".links",
            start: "top bottom",
        }
    })
    gsap.to('.nexus', {
        opacity: 1,
        scrollTrigger: {
            trigger: ".nexus",
            start: "top bottom",
            end: "top center",
            scrub: 1
        }
    })
}