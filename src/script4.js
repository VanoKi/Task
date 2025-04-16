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
// const tasks = [
//     {id: 11, tidolistId: 1, title: "HTML", isDone: true},
//     {id: 12, tidolistId: 1, title: "CSS", isDone: true},
//     {id: 13, tidolistId: 1, title: "JS/TS", isDone: false},
//     {id: 21, tidolistId: 2, title: "Beer", isDone: true},
//     {id: 22, tidolistId: 2, title: "Meat", isDone: true},
//     {id: 23, tidolistId: 2, title: "Bread", isDone: false}
// ]
const todoListId_1 = crypto.randomUUID()
const todoListId_2 = crypto.randomUUID()

const tasks = {
    [todoListId_1]: [{id: 11, title: "HTML", isDone: true},
        {id: 12, title: "CSS", isDone: true},
        {id: 13, title: "JS/TS", isDone: false},],
    [todoListId_2]: [{id: 21, title: "Beer", isDone: true},
        {id: 22, title: "Meat", isDone: true},
        {id: 23, title: "Bread", isDone: false}],
}


function getPropName(userName) {
    return `${userName.toUpperCase()}_name`
}

function createTodoList(title) {
    const newTodoListID = crypto.randomUUID()
    const newTodoList = {id: newTodoListID, title, filter}
    const todolists = [...tasks2, newTodoList]
    const tasks = {...tasks, [newTodoListID] : []}
}

function changeTaskStatus(todoListId, taskId, newStatus) {
    // const tasks = tasks2[todoListId]
    // const newTasks = tasks.map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
    // tasks = {...tasks, [todoListId] : newTasks}
    return {...tasks, [todoListId] : tasks[todoListId].map(t => t.id === taskId ? {...t, isDone: newStatus} : t)}
}

function createTask(title, todoList) {
    const newTask = {id: crypto.randomUUID(), title, isDone: false}
    tasks = {...tasks, [todoList] : [...tasks[todoListId], newTask]}
}

