/*
    - acessar elementos do DOM
        * por tag 
        * por class 
        * por id
 
    - acessar elementos pai do DOM
    - acessar elementos filhos do DOM
    - acessar elementos irmaos do DOM
    
    - Modificando conteudos de elementos do DOM - TEXTOS 
        * innerHTML
        * textContent
        * innerText


    - Criando e removendo elementos com o DOM
        *createElement
        *removeElement
     
    - Adicionando elemento dentro de outro

    - Alterando atributos de elementos no DOM

    - Manipulando estilos CSS com o DOM
            *classList
            - Alteração de estilos inline usando `style.property`.
  - Uso de `classList` para adicionar, remover ou alternar classes CSS:
    - `classList.add(className)`
    - `classList.remove(className)`
    - `classList.toggle(className)`
    - `classList.contains(className)`


    - Manipulação de eventos com o DOM


*/

// acessando por tag
let title = document.getElementsByTagName('h1')[0]
// console.log(title)//me retorna um HTMLCollection
console.log(title)

let lis = document.getElementsByTagName('li')[2]
console.log(lis)//me retorna um HTMLCollection

//acessando por Id
let paragraphId = document.getElementById('paragraph')
console.log(paragraphId)

// acessando por class

let itemsFromTheList = document.getElementsByClassName('item')
console.log(itemsFromTheList, 'HTMLCollection')

/* FORMAS ATUALIZADAS DE ACESSAR O DOM COM O ES6 */

/*

Com a evolução da linguagem foram criados dois seletores
que acabam com toda a complexidade desta ação;

querySelector e querySelectorAll;

Com estes podemos acessar os elementos baseados em regras de Css;

*/

title = document.querySelector('h1')
console.log(title)

//querySelectorAll - seleciona mais de um item na lista
let newItem = document.querySelectorAll('.item')
console.log(newItem, 'nodeList')

//querySelector - seleciona somente um elemento

const newTitle = document.querySelector('h1')
console.log(newTitle)


/* alterando o conteudo de um elemento - (alterando o texto de uma tag) */


//innerHTML
title.innerHTML = 'Flusao campeao da Liberta 2023'

//textContent > mais usado, recomendaddo e performatico
title.textContent = 'Flusao melhor do mundo'


/* Criando elementos com o DOM */

let newParagraph1 = document.createElement('p')//criado o elemento
let textNewParagraph1 = document.createTextNode('este é um novo paragráfo!')//criado o texto

newParagraph1.appendChild(textNewParagraph1)//inserido o texto na tag p

const body = document.querySelector('body')

body.appendChild(newParagraph1)



/* Removendo elementos com o DOM */

//removendo elemento filho
const container = document.querySelector('#container')// mapeia o container
const p = document.querySelector('#container p')// mapeia o p que está dentro de container
container.removeChild(p)// remove o p dentro de container

//removendo o proprio elemento 
// title.remove()// o titlo do documento é removido!


//adicionando um elemento - elemento filho

let div = document.createElement('div')

//classList - adiciona uma classe ao elemento

div.classList = 'div-criada'

// console.log(div)
container.appendChild(div)
div.appendChild(newParagraph1)

console.log(container)

const div2 = document.createElement('div')

div2.classList = 'div-2'
//insertBefore - inesere antes
container.insertBefore(div2, div)//div2 é inserida antes da div


//trocando elementos

const span = document.createElement('span')
span.classList = 'span-edit'

const textSpan = document.createTextNode('texto da span')

span.appendChild(textSpan)

const newFather = title.parentNode//parentNode pega o pai do elemento seja ele qual for

newFather.replaceChild(span, title)//passa a nova que vai entra, e logo depois a que vai sair

 //alterando atributos com o DOM - todos os atributos podem ser alterados via JS
 
 //src - alt - placeholder - 

 const titleH3 = document.querySelector('h3')
 //adiciona o atributo e nome desse atributo   
 titleH3.setAttribute('class', 'testando-atributo')// tipo de atributo e nome do atributo

titleH3.setAttribute('disabled', 'disabled')

titleH3.setAttribute('alt', 'texto h3 para pessoas com deficiencia visual')


//remover atributo

titleH3.removeAttribute('class')
titleH3.removeAttribute('disabled')