const pessoasEmails = (nome) => `${nome}@trybe.com`;



const newEmployees = (func, name) => {
  const employees = {
    nomeCompleto : name,
    email: func(name.replace(/\s+/g, ''))
  }
  return employees;
};

console.log(newEmployees(pessoasEmails, 'Pedro Guerra'));