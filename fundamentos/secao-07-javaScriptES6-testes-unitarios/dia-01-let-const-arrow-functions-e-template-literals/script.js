//  exercicios 1

function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

//  exercicios 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = array => {
  const emOrdem = array.sort(function(a, b){return a - b})
  return `Os números ${emOrdem} se encontram ordenados em forma crescente!`
}

console.log(sortOddsAndEvens(oddsAndEvens));

