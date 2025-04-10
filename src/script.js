const arr = [1, 2, 3]
// console.log(arr)
arr[2] = 5
// console.log(arr)
arr['string'] = 10
// console.log(arr)

const laptop = {}
Object.defineProperty(laptop, 'os', {
    value: 'MacOS',
    writable: false,
    enumerable: true,
    configurable: true
})

laptop.os = 'Linux'
laptop.model = 'MackBook'
laptop.model = 'Hp'

Object.defineProperty(laptop, 'displaySize', {
    value: '15',
    enumerable: true
})

const descriptor = Object.getOwnPropertyDescriptor(laptop, 'displaySize')
// console.log(descriptor)

// for (const [key, value] of Object.entries(laptop)) {
//     console.log(key, value)
// }

// const animal = {
//     _hiddenName: 'Cat'
// }
// Object.defineProperty(animal, 'name', {
//     get: function () {
//         return this._hiddenName
//     },
//     set: function (value) {
//         this._hiddenName = value
//     }
// })
//
// const animal12 = {
//     name: 'here cat'
// }
// animal.name = 'Dog'
// console.log(animal.name)
// console.log(animal12.name)

const animal = {
    get name() {
        return this._name
    },
    set name(value) {
        this._name = value
    }
}

console.log(animal.name)
animal.name = 'Cat'
console.log(animal.name)


