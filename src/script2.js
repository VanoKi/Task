const person = {
    name: 'Kirill',
    age: 24,
    adress: {
        country: 'Poland',
        city: 'Warsaw',
    },
}
const { name, age, car = 'person doesn`t have the car' } = person // Эквивалентно const name = person.name; const age = person.age;
console.log(name, age, car)