const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA(array, letter) {
  const letras = new RegExp(letter, 'g')
  return array.map((name) => name.toLocaleLowerCase())
  .reduce((acumulador, atual) => {
    if (atual.includes(letter)){
     return acumulador.concat(atual.match(letras))
    }return acumulador
  },'').replace(/,/g, '').length
}

console.log(containsA(names, 'a'))