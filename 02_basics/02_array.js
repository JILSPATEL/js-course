const name=["john","mark","bob"]
const name1=["tomy","robert"]

// name.push(name1)
// console.log(name);

// const allName=name.concat(name1)
// console.log(allName);

const allName=[...name,...name1]
// console.log(allName);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realArr=another_array.flat(Infinity)
//console.log(realArr);

console.log(Array.isArray("Jils"))
console.log(Array.from("Jils"))
console.log(Array.from({name: "Jils"})) // interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
