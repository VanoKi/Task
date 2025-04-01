const calcValues = (a, b) => [a + b, a- b]
console.log(calcValues(5, 3))
const result = calcValues(5, 3)
// const sum = result[0]
// const sub = result[1]
const [sum, sub] = result
console.log(sub)