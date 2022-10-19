const {encode, decode} = require('../encode_decode')

describe('testa a funcao encode e decode', () => {

  test('testa se encode é uma funcao', () => {
    expect(typeof encode).toBe('function');
  });

  test('testa se decode é uma funcao', () => {
    expect(typeof decode).toBe('function');
  });

  test('testa se as vogais A, E, I, O, U sao convertidas corretamente', () => {
    expect(encode('mentuaira')).toBe('m2nt513r1');
  });

  test('testa se os numeros 1, 2, 3, 4, 5 sao convertidos corretamente', () => {
    expect(decode('m2nt513r1')).toBe('mentuaira');
  });

  test('testa se as outras letras nao sao convertidas', () => {
    const alfabetoSemVogal = 'bcdfghjklmnpqrstbwxyz';
    expect(encode(alfabetoSemVogal)).toBe(alfabetoSemVogal);
  });

  test('testa se o tamanho retornado é o correto', () => {
    expect(encode('masqueicow')).toHaveLength(10);
  });

})