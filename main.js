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
const header = document.querySelector('#header') // Recupera o ID Header
const navHeight = header.offsetHeight // Pega a altura da navegação

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // Scroll maior que a altura do Header
    header.classList.add('scroll')
  } else {
    // Scroll menor que a altura do Header
    header.classList.remove('scroll')
  }
})
