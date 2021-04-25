let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
console.log(students.map(st => ({...st, age: st.age + 1})))



// function map(array, func) {
//     const newArr = []
//     for (let i = 0; i < array.length; i++){
//         newArr[i]= func(array[i])
        
//     }
//     return newArr
// }

function map(array, func) {
    const newArr = []
    array.forEach( (st, i) => {
        newArr[i]= func(st)
    })
    return newArr
} 

function nullFn(st) {
    st = null
    return st
}
console.log(map(students, st => ({...st, age: st.age + 1})))
console.log(map(students, nullFn), students)

function filter(array, func){
    const newArr = []
    for (let i = 0; i < array.length; i++){
        if(func(array[i]) === true){
            newArr.push(array[i])
        }
    }
    return newArr
}

function getNotMarriedSt(st) {
    return !st.isMarried
}

console.log(filter(students, getNotMarriedSt))

function find(array, func) {
    for (let i = 0; i < array.length; i++){
        if(func(array[i]) === true){
            return array[i]
        }
    }
}

const getAlex = s => s.name === 'Alex'

console.log(find(students, getAlex))