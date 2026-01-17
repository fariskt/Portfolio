import gsap from "gsap";

export function splitReveal(el: HTMLElement) {
  const words = el.innerText.split(" ");
  el.innerHTML = words
    .map((w) => `<span class="inline-block overflow-hidden"><span class="block translate-y-full">${w}&nbsp;</span></span>`)
    .join("");

  gsap.to(el.querySelectorAll("span > span"), {
    y: "0%",
    duration: 1.2,
    ease: "power4.out",
    stagger: 0.05,
  });
}
