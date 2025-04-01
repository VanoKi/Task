const calcValues = (a, b) => [a + b, a- b, a/b, a*b]
const [sum, , , mult] = calcValues(5, 6)
console.log(sum, mult)