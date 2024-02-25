let tld = gsap.timeline();
tld.fromTo([".hero__title", ".hero__btn"], { visibility: "hidden", opacity: 0, y: "+=60px" },
  { visibility: "visible", opacity: 1, y: "-=60px", duration: 2 })

tld.fromTo([".hero__descr", ".img1", ".img2", ".img3", ".photos__author"],
  { visibility: "hidden", opacity: 0 },
  { visibility: "visible", opacity: 1, stagger: 0.5, duration: 2 }, 1)


  let tl = gsap.timeline({delay:3});
tl.fromTo(".closemove circle", { cx: -20, cy: 200, display: "block" },
  { cx: 55, cy: 72, duration: 1 })

tl.to(".closemove circle", { r: 22, duration: 0.5 }, 1)
tl.to(".closemove circle", { r: 35, duration: 0.5 }, 1.5)

tl.to(".header-black", { height: 138, backgroundColor: "#000000", opacity: 0.3, duration: 1 }, 2)
tl.to(".header-black", { height: 190, backgroundColor: "#000000", opacity: 0.3, duration: 0 }, 3)
tl.to(".header-black", { height: 138, backgroundColor: "#000000", opacity: 0.3, duration: 0.8 }, 3)

tl.fromTo(".close", { visibility: "hidden", opacity: 0 },
  { visibility: "visible", opacity: 1, duration: 0.8 }, 2.5)

tl.to([".burger, .closemove circle"], { opacity: 0, duration: 0.8 }, 2.5)

tl.fromTo(".menu__top", { visibility: "hidden", opacity: 0 },
  { visibility: "visible", opacity: 1, duration: 0.8 }, 3)

tl.fromTo(".menu__container", { visibility: "hidden", opacity: 0 },
  { visibility: "visible", opacity: 1, backgroundColor: "#373737", duration: 3 }, 3)

tl.to(".hero__container", { opacity: 0, duration: 3 }, 3)

tl.fromTo(".menu__nav", { opacity: 0, y: "+=100px" },
  { opacity: 1, y: "-=100px", duration: 2 }, 4)

tl.fromTo(".social", { opacity: 0, y: "+=100px" },
  { opacity: 1, y: "-=100px", duration: 1 }, 5)

tl.fromTo(".menu__right", { opacity: 0, y: "+=100px" },
  { opacity: 1, y: "-=100px", duration: 1 }, 5)
