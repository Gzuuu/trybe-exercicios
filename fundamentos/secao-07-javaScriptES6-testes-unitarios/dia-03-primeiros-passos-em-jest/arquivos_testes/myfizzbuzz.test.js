const myFizzBuzz = require('../myfizzbuzz')

describe('testa a funcao myFizzBuzz', () => {
  test('Testa se a chamada myFizzBuzz(15) retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  }); 

  test('Testa se a chamada myFizzBuzz(5) retorna "buzz"', () => {
    expect(myFizzBuzz(5)).toBe('buzz')
  }); 

  test('Testa se a chamada myFizzBuzz(3) retorna "fizz"', () => {
    expect(myFizzBuzz(3)).toBe('fizz')
  }); 

  test('Testa se a chamada myFizzBuzz(7) retorna "7"', () => {
    expect(myFizzBuzz(7)).toBe(7)
  }); 

  test('Testa se a chamada myFizzBuzz("a") retorna "false"', () => {
    expect(myFizzBuzz('a')).toBe(false)
  }); 

});
