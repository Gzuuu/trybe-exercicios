const verificaNumero = (numeroSorteado, numeroComparado) => {
if (numeroSorteado === numeroComparado){
  return 'Parabéns você ganhou!'
}return 'Tente novamente.'
}


const SorteioLoteria = (numero, funcao) => {
const num = Math.round(Math.random() * 5);
return `Você apostou no numero ${numero}, e o numero sorteado foi ${num}.
${funcao(num, numero)}`
}

console.log(SorteioLoteria(5, verificaNumero))