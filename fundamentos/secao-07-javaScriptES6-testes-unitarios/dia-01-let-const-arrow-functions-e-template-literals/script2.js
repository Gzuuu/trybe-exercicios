//  exercicio 1

const factorial = num => {
let result = num;
let multiplicador = num - 1
for (let index = num; index > 0; index -= 1){
  result = result * multiplicador
  multiplicador --
  if (multiplicador == 0) {
    return `O fatorial resultado da função é : ${result}!!`}
}
}

console.log(factorial(5))

//  exercicio 2

const longestWord = frase => {
  const arrayOfFrases = frase.split(' ')
  const lower = arrayOfFrases.map(element => element.toLowerCase())
  const longest = lower.sort()
  return longest[0]
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'))

// exercicios 3

const clickCount = () => {
const button = document.querySelector('#btn-increment')
button.addEventListener('click',() => {
   const label = document.querySelector('#labelForChange')
   let toNumber = parseInt(label.innerHTML)
   ++toNumber
   label.innerHTML = toNumber  
})
}
clickCount()

// exercicios 4 

const substituaX = nome => 'Tryber x aqui'.split('x').join(nome);

const minhasSkills = func1 => {
  const skills = ['GitHub','CSS', 'HTML'];
  let info = `${func1} 
  Minhas três principais habilidades são:
  
    º ${skills[0]}
    º ${skills[1]}
    º ${skills[2]}`
  return info
}
console.log(minhasSkills(substituaX('pedro')))