const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const nightTurn = (obj, key, value) => obj[key] = value
nightTurn(lesson2, 'turno', 'noite')

const listOfKeys = obj => Object.keys(obj)
listOfKeys(lesson2)

const quantidade = obj => Object.keys(obj).length
quantidade(lesson3)

const values = obj => Object.values(obj)
values(lesson2)

const allLessons = Object.assign({} , { lesson1 , lesson2 , lesson3});

// console.log(allLessons)

const calcAlunos = obj => {
  let sum = 0;
  for (let key in obj){
    sum += obj[key].numeroEstudantes
  }
  return sum
}

// console.log(calcAlunos(allLessons))

const getValueByNumber = (lesson, number) => {
 const obj = Object.entries(lesson)
 return obj[number][1]
}

// console.log(getValueByNumber(lesson2, 0))

const verifyPair = (lesson, keys, value) => {
  const obj = Object.entries(lesson)
  let test;
  let number;
  let result = false
  for (let key in obj){
    if (obj[key].includes(keys)){
      test = true
      number = key
    }
  }
  if(test == true && obj[number].includes(value)){
    result = true
  }
 return result
}

verifyPair(lesson2, 'turno', 'noite');

const matView = (objct) => {
  const obj = Object.entries(objct)
  let sum = 0;
  for (let index in obj){
    if (obj[index][1].materia == 'Matemática'){
      sum += obj[index][1].numeroEstudantes
    }
  }
  return sum
}

matView(allLessons);

const createReport = (objct, prof) => {
  const obj = Object.entries(objct)
  const newObj = {
    professor : prof,
    aulas: [],
  }

  let sum = 0;
  for (let index in obj){
    if (obj[index][1].professor === prof){
      newObj.aulas.push(obj[index][1].materia)
      sum+= obj[index][1].numeroEstudantes
    }
  }
  newObj.estudantes = sum
  return newObj
}

console.log(createReport(allLessons, 'Carlos'));