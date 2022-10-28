const myRemove = require('../myRemove')

describe('Testes da funcao myRemove', () => {
  test('Verifique se o retoro de([1, 2, 3, 4], 3) é o esperado', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).toEqual([1, 2, 4])
  }) 

  test('Verifique se o retoro de([1, 2, 3, 4], 3) é o esperado', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).not.toEqual(arr)
  }) 

  test('Verifique se o retoro de([1, 2, 3, 4], 3) é o esperado', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 5)).toEqual(arr)
  }) 

});
