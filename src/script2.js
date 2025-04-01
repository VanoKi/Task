const calcValues = (a, b) => [a + b, a- b, a/b, a*b]
const [sum, sub, ...other] = calcValues(5, 6)
console.log(sum, sub, other)