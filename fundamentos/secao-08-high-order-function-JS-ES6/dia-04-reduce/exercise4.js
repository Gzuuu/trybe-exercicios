const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


const media = (array) => {
  return array.map((grade) => {
    return grade.reduce((acumulador, atual) => acumulador + atual) / grade.length
   })
}

function studentAverage(alunos, notas) {
  return alunos.map((student, index) => {
    return {name: student, average: media(notas)[index]}
  })
}

console.log(studentAverage(students, grades))
