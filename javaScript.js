function toggleMode() {
const html = document.documentElement
html.classList.toggle("light")

    // pegar tag img
    const img = document.querySelector("#profile img")

 // substituir a imagem
if(html.classList.contains('light')){
       // se tiver light mode, adicionar a imagem light
       img.setAttribute("src", './assets/avatar-light.png')
       Text.setAttribute("alt",'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, com barba e fundo amarelo.')

} else {
      // se tiver sem light mode manter a imagem normal
        img.setAttribute("src", './assets/avatar.png')
        Text.setAttribute("alt",'Foto de Mayk Brito sorrindo, usando óculos escuro e uma jaqueta preta, sem barba e fundo azul e roxo.')
    }


   
}