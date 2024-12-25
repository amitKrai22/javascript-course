const mcuHeroes = ['Thor', 'IronMan', 'Hulk', 'CaptainAmerica']
const dcHeroes = ['Flash','superman','Batman']

// mcuHeroes.push(dcHeroes)
// console.log(mcuHeroes);
// console.log(mcuHeroes[4][1]);

// const allHeroes = mcuHeroes.concat(dcHeroes)
// console.log(allHeroes);

const allNewHeroes = [...mcuHeroes, ...dcHeroes] // ... is spread oprators
// console.log(allNewHeroes);

const anotherArr = [1,2,3,4,[5,6],7,[4,8,[2,56]]]

const realArray = anotherArr.flat(Infinity)
// console.log(realArray);

console.log(Array.isArray("Atoms"));
console.log(Array.from("Atoms"));
console.log(Array.from({names:"Atoms"})); //interesting

let score1 = 100
let score2 = 101
let score3 = 102

console.log(Array.of(score1, score2, score3));

