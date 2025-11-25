gsap.to("#content", {
    opacity: 1,
    duration: 1.8,
    ease: "power2.out"
});

gsap.from(".page-title", {
    y: -40,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});
