function createTest(tag, atributo, valor) {
    let teste = document.createElement(tag)
    teste.setAttribute(atributo, valor)
    document.body.appendChild(teste)
}
function createTest2(tag, atributo, valor) {
    let teste = document.createElement(tag)
    teste.setAttribute(atributo, valor)
    document.querySelector('.main-content').appendChild(teste)
}

///~///~///~///~///~///~///~///~///~///~///~///~///~///~///~///~///~///~

// primeira exercicio //

createTest('h1', 'id', 'header');
document.querySelector('#header').innerHTML = 'Exercício - JavaScript DOM'

// segundo exercicio //

createTest('main', 'class', 'main-content')

// terceiro exercicio // 

createTest2('section', 'class', 'center-content')

// quarto exercicio // 

let paragrafo = document.createElement('p')
document.querySelector('.center-content').appendChild(paragrafo).innerHTML = 'inserindo texto para exemplo'

// quinto exercicio // 

createTest2('section', 'class', 'left-content')

// sexto exercicio // 

createTest2('section', 'class', 'right-content')

// sétimo exercicio // 

let imagem = document.createElement('img')
imagem.setAttribute('src', 'https://picsum.photos/200')
imagem.setAttribute('class', 'small-image')
document.querySelector('.left-content').appendChild(imagem)

let ol = document.createElement('ol')
ol.setAttribute('id', 'ordened-list')

document.querySelector('.right-content').appendChild(ol)

let numeros = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

for (index = 0; index < numeros.length; index += 1) {
    let li = document.createElement('li')
    li.innerHTML = numeros[index]
    document.querySelector('#ordened-list').appendChild(li)
}

// nono exercicio && décimo-primeiro // 

createTest2('h3', 'class', 'description')
createTest2('h3', 'class', 'description')
createTest2('h3', 'class', 'description')

// décimo exercicio // 

document.querySelector('#header').className = 'title'

// décimo segundo exercicio // 

let main = document.querySelector('.main-content')
let left = document.querySelector('.left-content')
main.removeChild(left)

// décimo terceiro exercicio // 

document.querySelector('.right-content').style.margin = 'auto';

// décimo quarto exercicio //
main.style.backgroundColor = 'green'

// décimo quinto exercicio //
ol.removeChild(ol.lastChild)
ol.removeChild(ol.lastChild)
