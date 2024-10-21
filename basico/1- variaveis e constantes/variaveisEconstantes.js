/*
tipos de dados em javascript

    strings - cadeia de caracteres / letras/textos

    numbers - numeros inteiros ou flutuantes

    boleans - verdadeiro ou falso / true or false


    undefined - atribuido a uma variavel que foi criada porem nao incializada...

    null - atribuido propositalmente a variavel quando incializada
    
    functions

    arrays

    objects - Um tipo de dado complexo que pode armazenar múltiplos valores como pares de chave-valor. Ele pode representar arrays, funções, datas, e mais.

    symbol - introduzido no ES6 - valor unico IMUTAVEL. Geralmente usado para criar identificadores unicos para propriedades de objetos
    bigInt - usado para numeros inteiros muito grandes. que exedem os limites do tipo number.


    Classficação:
        Primitivos: String. Number. Boolean. Undefined, Null, Symbol, BigInt

        Objeto: Object(incluindo Arrays, funçoes, Datas, etc)

*/

//let  - varia... sempre muda o valor

let name = 'thalles' //string

let age = 31 // number // int

let isMarryed = true //bolean

//const - nunca muda o valor. Não pode ser alterada

const people = {//obejct
    name: 'Thalles',
    age: 31,
    isMarryed: true,
    isHabilited: false
}

console.log(people.name, people.isHabilited)

const hasSons = undefined

console.log(hasSons)//

let teamsIsupport = ['Fluminense', 'Arsenal', 'Real Madrid']//array - lista
console.log(teamsIsupport, 'acessando a lista de times ')
function callMarcilene (msg){
    return`${msg}, Marcilene, meu amor!`
}

console.log(callMarcilene('Vem aqui por favor'))
console.log(callMarcilene('Voce está ai'))
console.log(callMarcilene('Oii'))