// Guardar uma URL em uma variavel 
const url = 'https://www.google.com/'; // o link deve estar em aba simples ('')

// Selecionar o botão a ser clicado
const btn = document.querySelector("#text-botao")

//Criar a função para ao clicar no botão mande para a pagina do google
function openNewTab(url){
    const win = window.open(url, '_blank') // Abre uma nova aba para o google
    win.focus() // abre e vai pra essa nova aba 
}

btn.addEventListener('click',() => { // Essa aerofunction vai ouvir quando o botão for clicado 
    openNewTab(url) // esse comando quando o botão for clicado abre a nova aba para o google
})