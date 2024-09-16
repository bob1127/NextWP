// utils/hero.js

import gsap from 'gsap';

export const animateHero = () => {
  gsap.context(() => {
    gsap.from(".nav-container", {
      duration: 2,
      opacity: 0,
      y: -60,
      ease: "power3.inOut",
      delay: 0.5,
    });

    gsap.from(".hero > *", {
      duration: 1,
      opacity: 0,
      y: 60,
      ease: "power3.inOut",
      delay: 1,
      stagger: 0.5,
    });

    gsap.from(".blob", {
      duration: 2,
      scale: 0,
      ease: "power3.inOut",
      delay: 1.5,
      stagger: 0.5,
    });

    gsap.from(".bg-gradient", {
      duration: 2,
      scale: 0,
      ease: "power3.inOut",
      delay: 2,
    });

    const text = document.querySelector(".text p");
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
        )
        .join("");
    }
  });
};
