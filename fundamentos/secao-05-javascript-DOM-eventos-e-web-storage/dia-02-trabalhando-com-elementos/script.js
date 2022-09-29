function createTest (tag, atributo, valor){
    let teste = document.createElement(tag)
teste.setAttribute(atributo, valor)
document.body.appendChild(teste)
}
createTest('h1', 'id', 'header');
document.querySelector('#header').innerHTML = 'Exercício - JavaScript DOM'
createTest('main', 'class', 'main-content')

function createTest2 (tag, atributo, valor){
    let teste = document.createElement(tag)
teste.setAttribute(atributo, valor)
document.querySelector('.main-content').appendChild(teste)
}

createTest2 ('section', 'class', 'center-content')

let paragrafo = document.createElement('p')
document.querySelector('.center-content').appendChild(paragrafo).innerHTML = 'inserindo texto para exemplo'

createTest2('section', 'class', 'left-content')
createTest2('section', 'class', 'right-content')

let imagem = document.createElement('img')
imagem.setAttribute('src', 'https://picsum.photos/200')
imagem.setAttribute('class', 'small-image')

document.querySelector('.left-content').appendChild(imagem)

let numeros = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

let ol = document.createElement('ol')
ol.setAttribute('id', 'ordened-list')
document.querySelector('.right-content').appendChild(ol)

for (index = 0; index < numeros.length; index +=1){
    let li = document.createElement('li')
    li.innerHTML = numeros[index]
    document.querySelector('#ordened-list').appendChild(li)
}

createTest2('h3','class', 'h3-content')
createTest2('h3','class', 'h3-content')
createTest2('h3','class', 'h3-content')