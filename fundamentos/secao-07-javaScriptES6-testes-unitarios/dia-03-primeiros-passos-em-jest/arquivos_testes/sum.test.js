const sum = require('../sum');

describe('testes da funcao sum', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Teste se a função sum lança um erro', () => {
    expect(() => {sum()}).toThrow();
  });

  it('Teste se a mensagem de erro é “parameters must be numbers”', () => {
    expect(() => {sum()}).toThrowError(new Error('parameters must be numbers'));
  });

})

