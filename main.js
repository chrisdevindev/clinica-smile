const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
    #home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
  { interval: 100 }
);



function changeHeaderWhenScroll() {
    const header = document.querySelector("#header");
    const navHeight = header.offsetHeight;
  
    if (window.scrollY >= navHeight) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }
 
function backToTop(){
    const backToTopButton = document.querySelector(".back-to-top");

    if (window.scrollY >= 560) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
}

window.addEventListener("scroll", () => {
    changeHeaderWhenScroll();
    backToTop();
  });
  
