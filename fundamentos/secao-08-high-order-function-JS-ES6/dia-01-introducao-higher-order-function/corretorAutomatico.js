const respostasCorretas = (solucoes, suasRespostas) => {
  let contador = 0;
  for (index = 0; index < solucoes.length; index += 1){
    if (solucoes[index] === suasRespostas[index]){
      contador += 1
    } else if (suasRespostas[index] !== 'N.A' && solucoes[index] !== suasRespostas[index]){
      contador = contador - (1/2)
    }
  } return contador
}
const corretorAutomatico = (arraySolucoes, suasRespostas, funcao) => funcao(arraySolucoes, suasRespostas);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(corretorAutomatico(RIGHT_ANSWERS, STUDENT_ANSWERS, respostasCorretas))


