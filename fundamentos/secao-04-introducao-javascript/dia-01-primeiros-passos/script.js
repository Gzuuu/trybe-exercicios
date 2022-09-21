// primeira parte aritmética básica

const a = 15;
const b = 10;

// const soma = a + b;
// const sub = a - b;
// const mult = a * b;
// const div = a / b;
// const module = a % b;

// segunda parte if/else (2.1)


// if (a > b){
//     console.log('Primeiro numero é maior')
// }else {
//     console.log('segundo numero é maior')
// }

// segunda parte if/else (2.2)


const c = 5;

// if (a > b && a > c){
//     console.log('Primeiro numero é maior')
//  }else if (b > a && b > c) {
//     console.log('segundo numero é maior')
// }else {
//     console.log('terceiro numero é maior!')
// }

// segunda parte if/else (2.3)


// if (a > 0){
//     console.log('o numero é positivo')
// }else if (a < 0){
//     console.log('o numero é negativo')
// }else {
//     console.log('zero')
// }

// segunda parte if/else (2.4)


// if (a + b + c === 180){
//     console.log(true)
// }else{
//     console.log(false)
// }

// segunda parte switch/case (2.5)

let pecas = 'REI';

// switch(pecas.toLowerCase()){
//     case 'bispo': console.log('diagonais')
//     break
//     case 'cavalo': console.log('anda em formato de L')
//     break
//     case 'peão': console.log('anda 1 para frente e é possivel andar 2 no primeiro movimento')
//     break
//     case 'torre': console.log('só anda na horizontal ou na vertical')
//     break
//     case 'rainha': console.log('tem todos os movimentos das outras peças')
//     break
//     case 'rei': console.log('se move para qualquer casa ao seu lado')
//     break
// }

// segunda parte if/else (2.6)

// const porcentagem = 120;
// let nota;
// if (porcentagem > 100 || porcentagem < 0){
//     nota = 'error'
// }else if (porcentagem >= 90){
//     nota = 'A'
// }else if (porcentagem >= 80){
//     nota = 'B'
// }else if (porcentagem >= 70){
//     nota = 'C'
// }else if (porcentagem >= 60){
//     nota = 'D'
// }else if (porcentagem >= 50){
//     nota = 'E'
// }else {
//     nota = 'F'
// }
// console.log(nota)

// terceira parte if/else (3.1)

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//     console.log(true)
// }else{
//     console.log(false)
// }

// terceira parte if/else (3.2)

// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
//     console.log(true)
// }else{
//     console.log(false)
// }

// terceira parte if/else (3.3)

// const imposto = ((20/100)*20);
// let custoBruto = 20;
// let custoTotalDoProduto = custoBruto + imposto;
// const valorDeVenda = 95;
// const lucro = valorDeVenda - custoTotalDoProduto
// console.log(lucro)

// terceira parte if/else (3.4)

const salarioBruto = 3000;
let salarioBase;

if (salarioBruto < 1556 && salarioBruto > 0){
    salarioBase = salarioBruto - (8/100 * salarioBruto)
}else if (salarioBruto > 1556 && salarioBruto < 2594){
    salarioBase = salarioBruto - (9/100 * salarioBruto)
}else if (salarioBruto > 2594 && salarioBruto < 5189){
    salarioBase = salarioBruto - (11/100 * salarioBruto)
}else if (salarioBruto > 5189){
    salarioBase = salarioBruto - 570
}else{
    console.log('salario inválido')
}
let valorIR;

if (salarioBase > 0 && salarioBase < 1903){
    console.log('isento de imposto de renda')
}else if (salarioBase > 1903 && salarioBase < 2826){
    valorIR = 7.5/100 * salarioBase - 142.8
}else if (salarioBase > 2826 && salarioBase < 3751){
    valorIR = 15/100 * salarioBase - 354.8
}else if (salarioBase > 3751 && salarioBase < 4664){
    valorIR = 22.5/100 * salarioBase - 636
}else if(salarioBase > 4664){
    valorIR = 27.5/100 * salarioBase - 869
}else (console.log('salario inválido'))

const salarioLimpo = salarioBase - valorIR

console.log(salarioLimpo)
