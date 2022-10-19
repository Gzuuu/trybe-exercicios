window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}

//  função verifica se é numero

const verifyNumber = () => {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if (isNaN(value1) || isNaN(value2)){
    throw new Error ('Apenas números devem ser inserídos.')
  } else if (value1 === '' || value2 === ''){
    throw new Error ('Insira um número')
  } else return [value1, value2]
}

// função limpa valor

const cleanInner = () => {
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}

// função soma

const sum = () => {
  try {
    const value1 = verifyNumber()[0]
    const value2 = verifyNumber()[1]
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  }
  catch (error) {
    document.getElementById('result').innerHTML = error.message
  }
  finally {
    cleanInner()
  }
}

