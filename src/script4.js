const todolists = [
    {
        id: 1,
        title: "What to learn",
        filter: "all",
        tasks: [
            {id: 11, title: "HTML", isDone: true},
            {id: 12, title: "CSS", isDone: true},
            {id: 13, title: "JS/TS", isDone: false}
        ]
    },
    {
        id: 2,
        title: "What to buy",
        filter: "all",
        tasks: [
            {id: 21, title: "Beer", isDone: true},
            {id: 22, title: "Meat", isDone: true},
            {id: 23, title: "Bread", isDone: false}
        ]
    },
]
const tasks = [
    {id: 11, tidolistId: 1, title: "HTML", isDone: true},
    {id: 12, tidolistId: 1, title: "CSS", isDone: true},
    {id: 13, tidolistId: 1, title: "JS/TS", isDone: false},
    {id: 21, tidolistId: 2, title: "Beer", isDone: true},
    {id: 22, tidolistId: 2, title: "Meat", isDone: true},
    {id: 23, tidolistId: 2, title: "Bread", isDone: false}
]
const todoListId_1 = crypto.randomUUID()
const todoListId_2 = crypto.randomUUID()

const tasks2 = {
    [todoListId_1]: [{id: 11, title: "HTML", isDone: true},
        {id: 12, title: "CSS", isDone: true},
        {id: 13, title: "JS/TS", isDone: false},],
    [todoListId_2]: [{id: 21, title: "Beer", isDone: true},
        {id: 22, title: "Meat", isDone: true},
        {id: 23, title: "Bread", isDone: false}],
    [33 + 66] : [],
    [getPropName('Bob')] : [],
    "user name": [],
    "123_name": []
}

// console.log(tasks2[todoListId_1])
// console.log(tasks2[todoListId_2])

function getPropName(userName) {
    return `${userName.toUpperCase()}_name`
}

console.log(tasks2['user name'])

const mapCollection = new Map()
mapCollection.set(true, 1000)
mapCollection.set(getPropName, ['Alex', 'Bob', 'Ann'])