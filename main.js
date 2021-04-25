const student = {
    name: 'Alex',
    age: 39,
    friend: ['Bob', 'Olga']
}
const studentPlus = {...student, friend: [...student.friend]}

student.age = 40


student.friend.push('Ken')

console.log(student=== studentPlus)
console.log(studentPlus)