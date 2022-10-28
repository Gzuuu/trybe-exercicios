const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
    // bornIn: nascido em
];

// escreva filterPeople abaixo

const filterPeople = (array) => {
  const indices = [];
  array.forEach((param, index) => {
    const { nationality , bornIn, name } = param
    if( param.nationality === 'Australian' && param.bornIn > 1901 && param.bornIn <= 2000){
      indices.push(index)
    }
  })
  return indices.map((indice) => array[indice])
}

// console.log(filterPeople(people))


const myList = [5, 2, 3];
// escreva swap abaixo

const swap = ([primeiro, segundo, terceiro]) => [terceiro, segundo, primeiro]

console.log(swap(myList))