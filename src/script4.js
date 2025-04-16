const todolists = [
    {
        id: 1,
        title: "What to learn",
        filter: "all",
        tasks: [
            { id: 11, title: "HTML", isDone: true },
            { id: 12, title: "CSS", isDone: true },
            { id: 13, title: "JS/TS", isDone: false }
        ]
    },
    {
        id: 2,
        title: "What to buy",
        filter: "all",
        tasks: [
            { id: 21, title: "Beer", isDone: true },
            { id: 22, title: "Meat", isDone: true },
            { id: 23, title: "Bread", isDone: false }
        ]
    },
]
const tasks = [
    { id: 11, tidolistId: 1, title: "HTML", isDone: true },
    { id: 12, tidolistId: 1, title: "CSS", isDone: true },
    { id: 13, tidolistId: 1, title: "JS/TS", isDone: false },
    { id: 21, tidolistId: 2, title: "Beer", isDone: true },
    { id: 22, tidolistId: 2, title: "Meat", isDone: true },
    { id: 23, tidolistId: 2, title: "Bread", isDone: false }
]

