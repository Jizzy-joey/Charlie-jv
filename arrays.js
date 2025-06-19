const students = ['Joey', 'Chandler', 'Ross', 'Monica', 'Rachel', 'Phoebe']

const oldStudents = ['moses', 'lewu', 'jerry']

students[0] = 'lewu'

const len = students.length

students.unshift('Ross', 'Monica')

students.push('Chandler', 'Joey')

students.push(...oldStudents)

console.log(students)

students.pop()

console.log(students)

students.shift()


console.log(students)

students.splice(students.indexOf('Rachel'),2)

console.log(students)

students.splice(students.indexOf('Phoebe'), 1, ...['Godwin', 'John'])

console.log(students)

students.push('monica')

console.log(students)


const indexes = (str) => str.indexOf(x) ==str.lastIndexOf(x)
const filteredUnique = students.filter
(student => students.indexOf(student) == students.lastIndexOf(student));

const firstFive = students.slice(0, 5)

const containsJude = students.includes('Joey')

students.sort((a, b) => a.lenth - b.length)

const evenNumbers = new Array()

for(let num = 1; num <= 50; num++){
    if(num % 2 === 0){
        evenNumbers.push(num)
    }
}

const truncateNames = students.map(student => 
    student.slice(0, 3).replace(student[0], student[0].toUpperCase()))

    const handleDivision = evenNumbers.map(num => (num/ 3).toFixed(2)*1)

    const rand = [23, 11, 16, 128, 240]
    const rand10 = rand.map(num => num % 10)
    console.log(rand10)

evenNumbers.sort((a, b) => b - a)

console.log(students.reverse())
console.log(filteredUnique)
console.log(firstFive)
console.log(containsJude)
console.log(evenNumbers)
console.log(truncateNames)
console.log(handleDivision)
