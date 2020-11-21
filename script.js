// Lecture: variables1
/*
var name = 'john'
console.log(name)

var lastName = 'smith'
console.log(lastName)

var age = 26
console.log(age)

var fullAge = true
console.log(fullAge)
*/

// Lecture: variables2
/*
var name = 'john'
var age = 26

// automatically converts into one data type
console.log(name+age)
console.log(age+age)

var job,isMarried
// job is not declared
console.log(job)

// var keyword is used to declare variable first time 
job = 'teacher'
isMarried = false

console.log(name+' is a '+age+' years old '+job+'.Is he married? '+isMarried)

age = 'thirty six'
job = 'driver'
console.log(name+' is a '+age+' years old '+job+'.Is he married? '+isMarried)

// for debugging
// var lastName = prompt('what is last name?')
// console.log(lastName)

alert(name+' is a '+age+' years old '+job+'.Is he married? '+isMarried)
*/

// Lecture: operators
/*
var now = 2016
var birthyear = now - 26
birthyear = now - 26*2

console.log(birthyear)

var ageJohn = 30
var ageMark = 30
ageJohn=ageMark=(3+5)*4-6

ageJohn++

console.log(ageJohn)
console.log(ageMark)
*/

// Lecture: if/else statements
/*
var name = 'John'
var age = 26
var isMarried = 'no'

// if (isMarried=='yes'){
//     console.log(name+' is married!')
// }else{
//     console.log(name+' will be marrid soon!')
// }

// isMarried = false
// if (isMarried){
//     console.log('Yes!')
// }else{
//     console.log('No!')
// }
if(23==='23'){
    console.log('Something to print...')
}
*/

// Lecture: boolean logic and switch
/*
var age = 25
if (age<20){
    console.log('john is a teenager')
}else if(age>20 && age<30){
    console.log('john is a young man')
}else{
    console.log('john is a man')
}

var job = 'teacher'

switch(job){
    case 'teacher':
        console.log('John teaches kids')
        break
    case 'driver':
        console.log('john drives cab')
        break
    default:
        console.log('john drives somethin else')
}
*/

// 1st challange
/*
var johnHeight = 150
var samHeight = 155
var johnAge = 25
var samAge = 20
var johnScore,samScore
johnScore = johnHeight + 5*johnAge
samScore = samHeight + 5*samAge

if (johnScore>samScore){
    console.log('John is the winner!'+johnScore+'points')
}else if(johnScore<samScore){
    console.log('Sam is the winner!'+samScore+'points')
}else{
    console.log('Game is a draw!')
}
*/

// Lecture: Functions
/*
function calculateAge(yearOfBirth){
    var age = 2020-yearOfBirth
    return age
}
var ageJohn = calculateAge(1990)
// console.log(ageJohn)

function yearUntilRetirement(name,year){
    var age = calculateAge(year)
    var retirement = 65-age
    console.log(retirement)
}
yearUntilRetirement('john',1990)
*/

// Lecture: statements and expressions
// statements produce actions
// if (x===5){do something}
/*
function someFunc(par){
    //code
}

// expression produces value and outcome 
// 3+4
var someFunc = function(par){
    //code
}
*/

// Lecture: Arrays
/*
var names = ['John','Jane','Mark']
// another method
var years = new Array(1990,1969,1948)

console.log(names[2])
names[1]='Ben'
console.log(names)

var differents = ['John','Smith',1990,'designer',false]
// enters element in the last position
differents.push('blue')
// enters element in the 1st position
differents.unshift('Mr.')
differents.pop()
differents.shift()
console.log(differents)

// alert(differents.indexOf('Smith')) 

// if any element is not in array, it returns -1
if (differents.indexOf('teacher')===-1){
    console.log('John is not a teacher')
}
*/

// Lecture: Object
// 1st method
/*
var john = {
    name: 'John',
    LastName: 'Smith', 
    yearOfBirth: '1990',
    job: 'teacher',
    isMarried: false
}
// retrive data: 1st method
console.log(john.LastName)
// 2nd method
console.log(john['LastName'])

var xyz='job'
console.log(john[xyz])

// change value of object
john.LastName = 'Millr'
john.job = 'Programmer'

console.log(john)

// 2nd method
var jane = new Object()
jane.name = 'Jane'
jane.lastName='Smith'
jane['yearOfBirth']=1969
jane['job']='retired'
jane['isMarried']=true

console.log(jane)
*/

// Lecture: Objects and methods
// version1.0
/*
var john = {
    name: 'John',
    LastName: 'Smith', 
    yearOfBirth: '1990',
    job: 'teacher',
    isMarried: false,
    family: ['Jane','Mark','Bod'],
    calculateAge: function(yearOfBirth){
        return 2016-this.yearOfBirth
    }
}
// console.log(john.calculateAge(1970))
console.log(john.calculateAge())

var age = john.calculateAge()
john.age = age
console.log(john)


// version2.0
// john object has properties and methods(calculateAge)
var john = {
    name: 'John',
    LastName: 'Smith', 
    yearOfBirth: '1990',
    job: 'teacher',
    isMarried: false,
    family: ['Jane','Mark','Bod'],
    calculateAge: function(yearOfBirth){
        this.age= 2016-this.yearOfBirth
    }
}
john.calculateAge()
console.log(john)
*/

// Lecture: Loops
/*
for(var i=0;i<10;i++){
   console.log(i)
}

var months = ['Jan','Feb','Mar','Apr','May']

// if the no. of elements is not known,length is used
for(var i=months.length-1;i>=0;i--){
    console.log(months[i])
}


// while loop
var i = 0
while(i<months.length){
    console.log(months[i])
    i++
}

for(var i=0;i<5;i++){
    if(i===3){
        break
    }
    console.log(i)
 }

 for(var i=0;i<5;i++){
    //  when i=3, condition fulfils,so it will not print 3,go to next iteration and continue
    if(i===3){
        continue
    }
    console.log(i)
 }
 */

//  Coding Challenge 2
var years = [1990,1992,1994,2000,2002,2010]

function printFullAge(years){
var ages = []
var vector = []

for(var i=0;i<years.length;i++){
    ages[i] = 2020-years[i]
}
console.log(ages)

for(i=0;i<ages.length;i++){
    if(ages[i]<18){
      console.log('person '+(i+1)+' is '+ages[i]+' years old and NOT full age')
      vector.push(false)
    }else{
        console.log('person '+(i+1)+' is '+ages[i]+' years old and full age')
        vector.push(true)
    }
}
return vector
}

var full_1 = printFullAge(years)
var full_2 = printFullAge([2010,2015,2000])


