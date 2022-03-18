/* Controle do menu Hamburguer */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Controle de itens do menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Interagindo com o Scroll, alterando o Header */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header') // Recupera o ID Header
  const navHeight = header.offsetHeight // Pega a altura da navegação

  if (window.scrollY >= navHeight) {
    // Scroll maior que a altura do Header
    header.classList.add('scroll')
  } else {
    // Scroll menor que a altura do Header
    header.classList.remove('scroll')
  }
}

/* Testimonial carousel slider with SWIPER */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  //mousewheel: true,
  keyboard: true
})

/* Scroll Reveal - Show elements within the scroll on page */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  `,
  { interval: 100 }
)

/* Controle do item BACK-TO-TOP */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Adding listeners to window scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
