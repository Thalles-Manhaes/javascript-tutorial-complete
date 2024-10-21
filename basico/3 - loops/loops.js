let count = 100

for(i = 0; i <= count; i++){
    console.log(i)
}

let y = 0
while(y < 1000){
    console.log(y)
    y++
}

//for in é usado para percorrer objetos

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

const arr = ['a', 'b', 'c']

let currentKey = arr.keys()//retorna todos os index do array
for( const key of currentKey){
  console.log(key)
}

//DOM 

//integração com api

// divisao de responsabilidades - funçoes unicas - separação de lógicas

// git e github

// typescript - modo pensante de tipagem 