const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}



const links = document.querySelectorAll("nav ul li a")

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}




const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    }
    else{
        header.classList.remove('scroll')
    }
})


const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    keyboard: true,

})
