// exercicios 1 (1.1)

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Bem-vinda(o), ' + info.personagem)

// exercicios 1 (1.2)

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info['recorrente'] = 'sim';

//   console.log(info)

// exercicios 1 (1.3)

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info['recorrente'] = 'sim';

// for (let key in info){
//     console.log(key)
// }

// exercicios 1 (1.4)

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info['recorrente'] = 'sim';

//   for (let key in info){
//     console.log(info[key])
//   }

// exercicios 1 (1.5)

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info['recorrente'] = 'sim';

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's four collor Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'sim',
// }
// let forinfo1;

// for (let key in info,info2){
//     if (key === 'recorrente' && info[key] === 'sim' && info2[key] === 'sim'){
//         console.log('ambos recorrentes')
//     } else
//     console.log(info[key] + ' e ' + info2[key])
// }

// // exercicios 1 (1.6)

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' Se chama : ' + leitor.livrosFavoritos[0].titulo + '.')

// // exercicios 1 (1.7)

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   })

//   let quantidade = 0;
//   for (let key in leitor.livrosFavoritos){
//     quantidade++
//   }

//   console.log(leitor.nome + ' Tem ' + quantidade + ' Livros favoritos!')

// // exercicios 2 funcoes (2.1)

// function palindromeVerify (string){
    
//     let aoContrario = '';
//     for (let index = string.length -1; index >= 0; index -= 1){
//         aoContrario += string[index]
//     }
//     if (string === aoContrario){
//         console.log(true)
//     }else console.log(false)
// }
// palindromeVerify('desenvolvimento')

// // exercicios 2 (2.2)

// let arrayTeste = [2, 3, 6, 7, 10, 1];

// function highest(array){
//     let indice;
//     let maior = 0;
//     for (let index in array){
//         if (array[index] > maior){
//             maior = array[index]
//             indice = index
//         }
//     }
//     return indice
// }

// console.log(highest(arrayTeste))

// // exercicios 2 (2.3)

// let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

// function lowest(array){
//     let indice;
//     let menor = Infinity;
//     for (let index in array){
//         if (array[index] < menor){
//             menor = array[index]
//             indice = index
//         }
//     }
//     return indice
// }

// console.log(highest(arrayTeste))

// // exercicios 2 (2.3)

