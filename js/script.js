//Pega todas as img do carrosel.
const slider = document.querySelectorAll('[data-js="carousel_item"]')
const nextButton = document.querySelector('[data-js="carousel_button_next"]')
const prevButton = document.querySelector('[data-js="carousel_button_prev"]')

//guarda o index de cada imagem.
let Indexslider = 0

//função para remover e adicionar a classe que deixa visível a img
const manipularClasse = Indexslider => {
  //remove a classe que deixa visivel.
  slider.forEach(slider =>
    slider.classList.remove('carousel-carousel_item_visible')
  )
  //add a classe que deixa visível, de acorde com o index do contador
  slider[Indexslider].classList.add('carousel-carousel_item_visible')
}

//função da próxima img
nextButton.addEventListener('click', () => {
  //serve para conferir se existe a posição dentro do slider, caso não, irá zerar o contador.
  if (Indexslider === slider.length - 1) {
    Indexslider = 0
  } else {
    Indexslider++
  }

  manipularClasse(Indexslider)
})

//função para voltar uma img
prevButton.addEventListener('click', () => {
  if (Indexslider === 0) {
    Indexslider = slider.length - 1
  } else {
    Indexslider--
  }

  manipularClasse(Indexslider)
})

//funão para o menu
function mostrarDiv() {
  document.getElementById('menucarros').style.display = 'flex'
}
function esconderDiv() {
  document.getElementById('menucarros').style.display = 'none'
}

//função para o menu
// function openNav() {
//   var x = document.getElementById('header-menu')

//   if (x.className === 'header-menu') {
//     x.className += ' menujs'
//     document.getElementById('threeline-icon').innerHTML = '&Cross;'
//   } else {
//     x.className = 'header-menu'
//     document.getElementById('threeline-icon').innerHTML = '&#9776;'
//   }
// }
