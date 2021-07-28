// Mobile Menu -> Hamburger
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// AOS
AOS.init();

// Typing Animation
new TypeIt("#type1", {
  speed: 90,
  loop: true,
  waitUntilVisible: true,
})
  .type("a Computer Engineer.", { delay: 400 })
  .pause(1000)
  .delete()
  .type("a Web Developer.", { delay: 400 })
  .pause(1000)
  .delete()
  .type("an Athlete.", { delay: 400 })
  .pause(1000)
  .delete()
  .type("a Software Developer.", { delay: 400 })
  .pause(1000)
  .delete()
  .type("a Problem Solver.", { delay: 400 })
  .pause(1000)
  .delete()
  .type("an Analytical Thinker.", { delay: 400 })
  .pause(1000)
  .delete()
  .go();
