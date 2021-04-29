const array = [777, 23, 12, 43, 32, 65, 82, 21, 0, 99]

// по возрастанию
for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
            // let temp = array[i + 1]
            // array[i + 1] = array[i]
            // array[i] = temp
        }
    }
}

console.log(array)

const names = ['Ramzan', 'Bob', 'bob', 'Alex', 'Donald', '2021']

names.sort().reverse()
console.log(names)
const numbers = [100, 1, 1000, 333, 9, 22226]
console.log(numbers.sort())

// sort -> compareFunc -> a
// a <= 0 - не переставляем
// a > 0 - переставляем

function comp(a, b) { // по возрастанию
    if(a <= b) {
        return -1
    } else {
        return 1
    }
}
const  shortComp = (a, b) => a - b

console.log(numbers.sort(comp))
console.log(numbers.sort(shortComp))
console.log(numbers.sort((a, b) => b - a))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

// console.log(students.sort((a, b) => b.scores - a.scores))
// console.log(students.sort((a, b) => a.age - b.age))


console.log(students.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
