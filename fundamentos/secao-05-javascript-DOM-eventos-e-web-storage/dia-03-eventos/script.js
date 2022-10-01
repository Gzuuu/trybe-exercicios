function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // parte 1 //
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for(let index = 0; index < decemberDaysList.length; index += 1){
    let lis = document.createElement('li')
    lis.setAttribute('class', 'day')
    lis.innerHTML = decemberDaysList[index]
    document.querySelector('#days').appendChild(lis)
    if (decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31){
        lis.className += ' holiday'
    }
    if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18 || decemberDaysList[index] === 25){
        lis.className += ' friday'
    }
  }
  // parte 2 // 

  function buttonCreate (string){
    let button = document.createElement('button')
    button.setAttribute('id', 'btn-holiday')
    button.innerHTML = string
    document.querySelector('.buttons-container').appendChild(button)
  }
  buttonCreate('Feriados')
  // parte 3 //

  function changeColor (){
    let selecao = document.querySelectorAll('.holiday')
    for (let index = 0; index < selecao.length; index += 1){
        if (selecao[index].style.backgroundColor != 'brown'){
            selecao[index].style.backgroundColor = 'brown'
        } else selecao[index].style.backgroundColor = 'rgb(238,238,238)'
    }
  }

  document.querySelector('#btn-holiday').addEventListener('click', changeColor)

  // parte 4 // 

  buttonCreate('Sexta-feira')
  document.querySelectorAll('#btn-holiday')[1].setAttribute('id', 'btn-friday')

  // parte 5 //
  
  function changeColors (){
    let fridays = [4,11,18,25]
    let selecao = document.querySelectorAll('.friday')
    let sextou = 'Sextou!'
    for (let index = 0; index < selecao.length; index += 1){
        if (selecao[index].innerHTML !== sextou){ 
            selecao[index].innerHTML = sextou
        }else selecao[index].innerHTML = fridays[index]
          
  }
  }
  document.querySelector('#btn-friday').addEventListener('click', changeColors)

  // parte 6 // 
  let dias = document.querySelector('#days')
   dias.addEventListener('mouseover', function(evento){
    evento.target.style = 'font-size: 50px' 
  })
  dias.addEventListener('mouseout', function(evento){
    evento.target.style = 'font-size: 20px' 
  })

// parte 7 // 

let span = document.createElement('span')
function criaElemento (string){
    document.querySelector('.my-tasks').appendChild(span).innerHTML = string
}

criaElemento('Cozinhar')

// parte 8 //

function criaLegenda (cor){
    let elem = document.createElement('div')
    elem.setAttribute('class', 'task')
    elem.style.backgroundColor = cor
    document.querySelector('.my-tasks').appendChild(elem)
}

criaLegenda('rgb(131, 80, 232)')