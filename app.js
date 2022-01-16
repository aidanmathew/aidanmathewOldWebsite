// window.addEventListener("resize", function () {
//   this.setTimeout(function(){
//     "use strict";
//     window.location.reload();
//   }, 3000);
// });

// Mobile Menu -> Hamburger
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");
const subtitle = document.querySelector("#type1");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  subtitle.classList.toggle("hide")
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
