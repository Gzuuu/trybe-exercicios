const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function formatedBookNames() {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
}

// console.log(formatedBookNames())

function nameAndAge() {
  const booksForSort = books.map((book) => {
    const bookAuthorAge = {}
    bookAuthorAge.age = book.releaseYear - book.author.birthYear
    bookAuthorAge.author = book.author.name
    return bookAuthorAge
  })
  booksForSort.sort((a, b) => a.age - b.age)
  return booksForSort
}

// console.log(nameAndAge())

function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
}

// console.log(fantasyOrScienceFiction())

function oldBooksOrdered() {
  const oldestBooks = books.filter((book) => (2022 - book.releaseYear) > 60)
  return oldestBooks.sort((a, b) => a.releaseYear - b.releaseYear)
}

// console.log(oldBooksOrdered())

function fantasyOrScienceFictionAuthors() {
 const fantasyAndFic = fantasyOrScienceFiction().map((book) => book.author.name)
 return fantasyAndFic.sort()
}

// console.log(fantasyOrScienceFictionAuthors())

function oldBooks() {
  const oldestBooks = books.filter((book) => (2022 - book.releaseYear) > 60)
  return oldestBooks.map((book) => book.name)
  
}

// console.log(oldBooks())

function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name
}

console.log(authorWith3DotsOnName())