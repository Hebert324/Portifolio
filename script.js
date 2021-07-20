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
    #about, .image, #about, .text,
    .services, .skill, .skills-data, .contact, input`,
    { delay: 100 }
)
