const arr = [1, 2, 3]
// console.log(arr)
arr[2] = 5
// console.log(arr)
arr['string'] = 10
// console.log(arr)

const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]

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

for (const [key, value] of Object.entries(laptop)) {
    console.log(key, value)
}

