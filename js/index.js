/* 
OBJETIVO 1 - mudar o personagem quando passar o mouse em cima:

 - colocar a classe "selecionado" no personagem que passar o mouse

 - tirar o selecionado de um e colocar no outro

OBJETIVO 2 - Trocar a imagem e o nome do personagem quando passar o mouse

  - alterar imagem do personagem ("j1select")

  - alterar o nome do personagem ("j1select")
*/

/*OBJETIVO 1*/
const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {
    const personagemSelect = document.querySelector('.j1select')
    personagemSelect.classList.remove('j1select')
    personagem.classList.add('j1select')

    /*OBJETIVO 2*/
    const idSelecionado = personagem.attributes.id.value
    const imgJ1 = document.getElementById('j1')
    imgJ1.src = `./src/personagens/${idSelecionado}.png`

    const nomej1 = document.getElementById('nome')
    const nomeSelect = personagem.getAttribute('data-name')
    nomej1.innerHTML = nomeSelect
  })
})
