
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.

const months = () => {
  const {spring, summer, autumn, winter } =  yearSeasons
  return [...spring, ...summer, ...autumn, ...winter]
}

console.log(months());