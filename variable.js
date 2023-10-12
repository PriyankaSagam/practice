// In JavaScript, comments are written with two forward slashes
// Comment statements do not get executed

// PROGRAMMING LANGUAGES
// Compiled languages are converted into machine code that the processor can execute.
// Analogy: Grandma's famous recipe written in Korean. Let's say we don't speak Korean, there are two ways for us to be able to follow directions.
// One way: translate Korean to English. This is example of compiled version.
// Second way: We have a friend that speaks Korean. This friend will be right next to us, walking us through the recipe STEP BY STEP. This is equivalent to an interpreter version of the recipe

// Video: https://www.youtube.com/watch?v=3iLUls6Z_tw

// VARIABLES
// History: For many years JavaScript only had "var" variables. In 2015 ECMAScript2015 or ES6, let and const were introduced. Scope involves the accessibility of variables and functions at any time in the code. Block scope is considered better to reduce accidentally changing values of variables.

// Declaring variables
x = 6
// In many programming languages, semicolons are required.

// DECLARE FRUIT
let fruit;
// Assigning a value to fruit 
fruit='apple'
// Second way
//const you need to initialize it when you declare it
const name = 'sarah'
// Print fruit
// console.log(fruit)
// LET

// CONST

// DATA TYPES
// There are two types of data types in JS, primitive and reference data types.
// Primitive data types are the lowest level of implementation of a programming language. They don't come with methods and are not considered objects. They can ONLY represent a single value.
// Reference data types are dynamic, and don't have a fixed size. In JS, these are called objects which include built in methods. Examples: arrays, functions, ad all other objects. Reference types can contain ANY number of primitive values or other objects. Hint: If it holds more than one value, it is a reference data type. EVERYTHING IN JAVASCRIPT except primitive data types are OBJECTS.
// Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// Programming languages all have built-in data structures, but these often differ from one language to another.

// DYNAMIC TYPING
// JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

// ===== PRIMITIVE TYPES =====
/* 
- String is textual data with zero or more characters wrapped by single or double quotes. If there are no characters inside the quotes, they're considered an empty string.
- Numbers hold numeric values. They can be whole numbers, floating, or decimal.
- Booleans can only have two values, true or false.
- Null only has one value of null. It's used to represent something that has no value. 
- Undefined returns undefined if there is no value given yet. 
*/

// Task: Create examples of each primitive type

// String
let string, p ='word'
// console.log(p)
//do not forgrt to declare with let or const or else it will be automatically defined with var
v='goodbye' //var v='goodbye'
// console.log(v)
// Number
let grade = 9
// console.log(grade)
//this will return a string
grade ='100'
//variable name must start with a letter or the underscore character.a variable name cannot start with a number.
// Booleans
let cold = true
// console.log(cold)
// // Null
//The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
const pencil = null
// console.log(pencil)
//null or ''
// Undefined

//A variable that has not been assigned a value is of type undefined . A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned .
let w = undefined //undefined
// console.log(w)

let j;
console.log(j) //undefined because it has no value.

let score = ''
// console.log(score)

// ===== CONTINUE PRINTING VARIABLES =====
// Definition: The console.log() is a function in JavaScript which is used to print any kind of variables defined before or to just print any message that needs to be displayed to the user. It can display primitive types and reference data types.

// WHY: Console is a test environment that you will be interacting with when we're creating our applications. It is used to communicate with the developer to show what the code is currently doing, and mainly used to help debugging errors. Console.log() is the method we use to display it in the console. 

// Syntax: console.log(anything in here)

// Task: Create variables with different data types and print


// THREE WAYS WE CAN PRINT STRINGS - STRING LITERALS
// We can use single quotes, double quotes, and backticks.
// ' ' - single quotes
// " " - double quotes
// ` ` - backticks

// CONCATENATION
// We can use the + operator for adding different data types together
//string+string
console.log('hello,' + 'nissi')
console.log('hello,nissi') //not concatenation
console.log('hello,'+''+'nissi')


// Task: Create a variable and print it with a message. Check the terminal and see how it's printing

// Task: Create two more variables and print it using spaces. What different ways can we add the spaces in our console.log()?

// INTERPOLATION
// String Interpolation is a process that helps you substitute values of constants and variables into placeholders in a string.
//  We use ${expression} and template literals to perform string interpolation. It accepts spaces which can make printing easier without using + operator. 

// Example:
const firstName = 'chan'
console.log(`hello, my name is ${firstName}.`)
// Output: My favorite drink is orange juice.

// Task: Create a variable with your age. In the console.log() add 5 to your age. Print "I am ** years old."

// NOTE: When using string interpolation. Even if you have a mathematical expression in there, it will automatically be converted into a string. 

// Let's compare the two examples in the terminal:

// console.log(4) 
// console.log(`I have ${2+8} dollars in my pocket.`)

// ===== VARIABLES AND DATA TYPES LAB =====
// Discuss Pair programming, breakout rooms etiquettes, expectations, sharing screen, learning zone






