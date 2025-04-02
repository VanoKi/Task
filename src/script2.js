const array = [1, 2, 3, 4, 5]

function slam(arr, ...rest) {
    console.log(rest)
}

function _pop(arr) {
    const last = arr[arr.length -1]
    arr.length = arr.length - 1
    return [last, arr]
}

function _shift(arr) {
    const firstEl = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    return [firstEl, arr]
}

function reversed(arr) {
    let reversedArray = []
    for (let i = arr.length - 1; i > -1; i--) {
        reversedArray.push(arr[i])
    }
    return reversedArray
}
console.log(reversed(array))