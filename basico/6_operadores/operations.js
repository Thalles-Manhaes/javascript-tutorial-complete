//operadores aritmeticos

let a = 22

let b = 67

let result = 0

result = a + b
console.log(result, `resultado da soma`)
result = a - b
console.log(result, `resultado da subtração`)
result = a * b
console.log(result, `resultado da multiplicação`)
result = a / b
console.log(result, 'resultado da divisão')
result = a ^ b
console.log(result, '')
result = a ** b
console.log(BigInt(result), 'resultado da exponenciação')




//operadores logicos - logical operators
result = a > b
console.log(result, `maior que`)
result = a < b
console.log(result, `menor que`)
result = a >= b
console.log(result, `maior igual`)
result = a <= b
console.log(result, 'menor igual')

//de atribuição - operators of assignment
result = a == b
console.log(result, 'igual - comparando valor')
result = a === b
console.log(result, 'igual - comparando tipo de dado e valor')
result = a = b
console.log(result, 'igual - atribuindo valor {a recebe o valor de b}')
