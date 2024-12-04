const a = [1, 2, 3];
const b = [...a, 4, 5, 6];
const c = [...a, ...b, 7, 8, 9];

console.log(c);