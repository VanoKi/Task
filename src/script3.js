let a = [1, 2, 3, 4, 5]
// let b = a.reduce(function (prev, item, index) {
//     return prev + item
// }, 0)

let b = a.reduce((prev, item, index) => prev + item, 0)

console.log('b', b) //15

const fruits = [
    { name: 'apple', quantity: 2 },
    { name: 'banana', quantity: 3 },
    { name: 'orange', quantity: 1 },
]

// const totalQuantity = fruits.reduce((quantity, item) => {
//     return quantity + fruits.quantity},
//     0
// })

// console.log(totalQuantity) //6

const myFriends = [
    { id: 1, name: 'John', age: 25, address: { street: '123 Main St', city: 'New York' } },
    { id: 2, name: 'Alice', age: 30, address: { street: '456 Elm St', city: 'San Francisco' } },
    { id: 3, name: 'Bob', age: 35, address: { street: '789 Oak St', city: 'Seattle' } },
    { id: 4, name: 'John', age: 44, address: { street: '123 Maple Ave', city: 'Dallas' } },
    { id: 5, name: 'Mary', age: 13, address: { street: '456 Elm St', city: 'Los Angeles' } },
    { id: 6, name: 'James', age: 18, address: { street: '987 Pine Rd', city: 'Dallas' } },
    { id: 7, name: 'Jennifer', age: 21, address: { street: '654 Birch Ct', city: 'Seattle' } },
    { id: 8, name: 'Robert', age: 4, address: { street: '876 Spruce Way', city: 'San Francisco' } },
    { id: 9, name: 'Jessica', age: 12, address: { street: '543 Willow Dr', city: 'San Francisco' } },
    { id: 10, name: 'Emily', age: 55, address: { street: '765 Aspen Blvd', city: 'Los Angeles' } },
]

const filteredUsers = myFriends.filter(item => item.address.city === 'Los Angeles')
console.log(filteredUsers)