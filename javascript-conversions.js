// let x = 9
//change to string
// x = 'hello'

// const pie = '3.14'
// console.log(Number(pie))
// console.log(Number(""))
// console.log(Number(" "))
// console.log(Number("John"))
// console.log(parseInt(pie))
// let y = '5'
// let z = + y

// console.log(y)
// console.log(z)

// console.log(String(x))
// console.log(x.toString())
//because null converted to 0
// console.log("5"+null) //because null converted to "null"
//console.log("5"+2) //because 2 is converted to "2"
//console.log("5"-2) //because 5 is converted to "5"
//console.log("5"*"2") //because "5" and "2" is converted to 5 and 2
//console.log("5"/2)  //will return number2.5
//console.log("5"/"2") //when you use / on strings the strings are implicitly converted to numbers and then division operation is performed.
//console.log(2+"5") //will return 25

 //MDN:w3 schools

 //TRUTHY & FALSY

 //the following values considered as falsy

 //false
 //0
 //""
 //undefined
 //NaN

 //all other values are considered truthy!Rule of thumb: it has a value it's truthy.

//  if({}){
//     console.log('truthy')
//  }else{
//     console.log('falsy')
//  }


//Logical operators and Comparison operators

//Comparison and Logical operators are used to test for true or false

//Comparison operators are used in logical statements to determine equality or difference between variables or values.

// == loose equality operator
//loose equality doesn't care about the data type

// ===strict equality operator


// let x = 5
//5==8
// console.log(x==8)
//5==5
// console.log(x==5)
//5=='5'
// console.log(x=='5') //true:type coercion .Java Script will convert '5' into a number and comparison
// console.log('5'==5)

//STRICT EQUALITY

//5===5
// console.log(x===5) //true

//5==='5'
// console.log(x==='5')// because both sides doesn't share equal date types
// console.log('hello'==='goodbye') //false
// console.log('hello'==="hello") //true

let x = 5
//exclamation point ! means opposite
//5!=7
console.log(x!=7) //true
console.log(x!=5) //false

//5!=5
console.log(x!==5)//false
//5!=='5'
console.log(x!=='5')//true
console.log(x!==8)//true