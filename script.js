const text = document.querySelector(".effect-text2")

function typeWriter(elemento) {
    const textArray1 = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textArray1.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 75 * i)
    })
}

typeWriter(text)

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })

sr.reveal(
    `.wrapper, .divider, .cards, .card,
    #about, .image, #about, .text, .title,
    .services, .skill, .skills-data, .contact, input`,
    { delay: 100 }
)

// menu mobile

const nav = document.querySelector('#header')
const toggle = document.querySelectorAll('.menu-mobile, .menu-mobile-x')

for (const element of toggle) {
    element.addEventListener('click',() => {
        //Ele esta pegando o nav e vendo a lista de classes dele e adicionando ou tirando a classe show nele.
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('.menu ul li a')

for(const link of links) {
    link.addEventListener('click',() => {
        nav.classList.remove('show')
    })
}