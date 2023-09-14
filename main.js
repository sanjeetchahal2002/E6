// 1,2
function fun(){
    let a = 1
    const b = 2
    console.log(a)
    console.log(b)
}
fun()


// 3

const square = a => (a * a)

console.log(square(5))

// 4

const add = (a,b) => (a+b);

console.log(add(2,3))

// 5

let text = "Coffee is my morning fuel, the aroma of a freshly brewed cup filling the air She danced like nobody was watching, lost in the musics rhythm. In the stillness of the night, the owls hooted in the distant woods.Books are a portal to different worlds, each page holding a new adventure. Laughter is contagious, spreading joy to those around us."

text.split('.').map( (lines) => {
    console.log(lines.trim())
})

// 6

function circleArea(radius = 5){
    return radius*radius
}
console.log(circleArea())


// 7

let person = {
    name: 'Harry Potter',
    location: 'London'
}

console.log(`${person.name} is located in ${person.location}`)

// 8

const array = [1,2,3,4,5]

const[first,second,...third] = array
console.log(first,second,third) 


// 9

function getNameAndLocation(person){
    const {name,location} = person
    console.log(`${person.name} is located in ${person.location}`)
}

getNameAndLocation(person)


// 10

function getNameAndLocationInFunction({name,location}){
    console.log(`${person.name} is located in ${person.location}`)
}

getNameAndLocationInFunction(person)


// 11

const myobj = {
    key : 1,
    values : 1,
    fun(){
        console.log('Hello!!!!!')
    }
}

myobj.fun()

// 12

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  const result = sum(1, 2, 3, 4, 5);
  console.log(result); 


//   13


const numbers = [1, 2, 3, 4, 5];

const res = sum(...numbers);
console.log(res); 



const arr = [1,2,3,4,5]

for(let values of arr){
    console.log(`values : ${values}`)
}
// 15
const obj = {
    name: 'Harry singh',
    location: 'London',
    time: "10:00",
    date: "21/09/2023",
    message : "Hello!"
}
// 16
for(let keys in obj){
    console.log(keys)
}
// 17
for(let keys in obj){
    console.log(obj[keys])
}
// 18
for(const[key,values] of Object.entries(obj)){
    console.log(`${key} : ${values}`)
}

