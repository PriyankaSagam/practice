// let date = new Date()
// console.log(date)

// function declaration
// name is our parameter

// function sayHello(name){
//     console.log('Hello' +name +'!')
// }

// one way

// let name + sayHello('priyanka')

// another way
// priyanka is our argument
// sayHello('priyanka')

// function expression

// const sayHello = function(name) {
//     console.log('Hello' + name + '!')
// }

// sayHello('anika')

// arrow functions

// const sayHello =(name)=> {
//     console.log('Hello' + name + '!')
// }
//  sayHello('venu')

//arrow functions with implicit return
//const sayHello = (name) => console.log('hello' + name + '!')

// we use const for functions so we dont accidentally change its value

// hoisting with variables
// will get an reference error:cannot access fruit
// console.log(fruit)
// const fruit = 'apple'

// will not get an error 
// console.log(fruit)
// var fruit = 'orange'
// console.log(fruit)

// i did
// function computeArea(height,width){
//     area = width * Height ;
//     console.log('computeArea' + 'area')
//  }


//solution

// function computeArea(width,height){
//     const area = width * height
//     return `The area of a rectangle with a width of ${width}  and a height of ${height} is ${area} square units.`
//     // console.log('width' + 'height')
// }
// const computedArea = computeArea(3,5)
// console.log(computedArea)

//  answer :The area of a rectangle with a width of 3  and a height of 5 is 15 square units.


// const planetHasWater = function(planet){
//     if (planet=='earth' || planet=='mars'){
//         console.log(true)
// }
// else {         
//      console.log(flase)
//    }
// }

// 


//arguments and parameters

// function multipleArgs(name,age,location){
    
// }




// default parameters

// function set(Color='blue'){
//     console.log(color)
// }

//will print blue
//setcolor()

//will print red
//setcolor('red')

// var a = ['red', 'green', 'blue'];

//call back = a function within a function

// a.forEach(function(color) {
//   console.log(color);
// });

// a.forEach(color =>console.log(color))

// Global Scope

// const item = 'pencil'
//greeting is a block scoped

// for(let i=0; i<3; i++){
//     const greeting = 'hello'
// }
// console.log(item)






// FUNCTION DECLARATION
// sayHello('Priyanka')
// name is our parameter
// function sayHello(name) {
//     console.log('Hello ' + name + '!')
// }

// one way
// let name = sayHello('Leteslase')

// another way
// Leteslase is our argument
// sayHello('Leteslase')

// FUNCTION EXPRESSION
// sayHello('Weiwei')
// const sayHello = function(name) {
//     console.log('Hello ' + name + '!')
// }

// sayHello('Kristie')

// ARROW FUNCTIONS
// const sayHello = (name) => {
//     console.log('Hello ' + name + '!')
//     // LOTS OF GOOD CODE
// }

// arrow functions with IMPLICIT RETURN
// const sayHello = (name) => console.log('Hello ' + name + '!')

// we use const for functions so we don't accidentally change it's value
// sayHello = 'hi'

// sayHello('Nissi')

// Hoisting with Variables

// Will get a ReferenceError: Cannot access 'fruit' before initialization
// console.log(fruit)
// const fruit = 'apple'

// Will not get an error, but will get undefined.
// console.log(fruit)
// var fruit = 'orange'
// console.log(fruit)

// Leteslase
// function computeArea(width, height) {
//     area = width * height;
//     return ("The area of a rectangle with a width of " + width + "and a height of " + height + "is of" + area + "square units.")
// }

// computeArea(3,5)

// Weiwei
// function computeAreausing(width,height){
//     return computeAreausing = width * height;
// }

// console.log(computeAreausing(3,6))

// Kristie
// function declarations
// function computeArea(width, height) {
//     area = width * height;
//     return ("The area of a rectangle with a width of "+ width + "and a height of" + height)
//     console.log("width" +  "height")
// }

// computeArea("The area of a rectangle with a width of _and a height of _ is _ square units.")

// Micaiah
// function calcArea(w,h){
//     let a = w * h;
//     console.log("Area of rectangle with width = " + w + " and height = " + h + " has area " + a + " square units.");
// }
// calcArea(4,5);

// Nissi
// const computeArea =(width , height) => console.log(width * height + 'The area of a rectangle')
// computeArea(4,5)

// Priyanka
// function computeArea(height,width){
//     area = width * Height ;
//     console.log('computeArea' + 'area')
//  }

// Solution
function computeArea(width, height) {
    // return in a function automatically stops the function. Anything after the return will not get executed
    const area = width * height;
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
    // console.log("width" +  "height")
  }
  
  // one way to print in console
  // console.log(computeArea(3,5))
  
  // second way to print in console
  // const computatedArea = computeArea(3,5)
  // console.log(computatedArea)
  
  // EXERCISE 2
//   const planetHasWater = function (planet) {
//     if (planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars")
//       return true;
//     return false;
//   };
  
  // console.log(planetHasWater('EaRTH'))
  
  // const planeHasWater = function(planet){
  //     if (planet == "Earth" || planet == "Mars"){
  //         return `This planet has water.`
  //     }else{
  //         return `This planet doesn't have water.`
  //     }
  // }
  // console.log(planeHasWater("Earth"))
  // console.log(planeHasWater("Moon"))
  
  // const planetHasWater = function(planet){
  //     if (planet == "Earth" || planet == "Mars")
  //       return true;
  //     else
  //     return false
  // }
  // console.log(planetHasWater("Mars"));
  
//   const planetHasWater = function (planet) {
//     if (planet.toLowerCase() == "earth" || planet.toLowerCase() == "mars") {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   console.log(planetHasWater("Earth"));
//   console.log(planetHasWater("Mars"));
//   console.log(planetHasWater("VENUS"));
  
  // ARGUMENTS AND PARAMETERS
  function multipleArgs(name, age, location) {
    console.log(`Hi my name is ${name} and I live in ${location}.`);
  }
  
  // THE ORDER MATTERS and make sure you are passing the same amount of arguments to the parameters
  // multipleArgs('Chan', 18, 'Columbus')
  
  // DEFAULT PARAMETERS
  function setColor(color = "blue") {
    console.log(color);
  }
  
  // will print blue
  // setColor()
  
  // will print red
  // setColor('red')
  
  var a = ["red", "green", "blue"];
  
  // callback = a function within a function
  // a.forEach(function (color) {
  //   console.log(color);
  // });
  
  // a.forEach(color => console.log(color))
  
  // global scope
  const item = "pencil";
  
  // greeting is block scoped
  for (let i = 0; i < 3; i++) {
    const greeting = "hello";
    // const item = 'eraser'
    // console.log(item)
  }
  
  // console.log(item)
  // console.log(greeting) // will get an error because it lives inside for loop
  
  function varTest() {
    var x = 1;
    if (true) {
      var x = 2; // same variable!
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  
  function letTest() {
    let x = 1;
    if (true) {
      let x = 2; // different variable
      console.log(x); // 2
    }
    console.log(x); // 1
  }
  
  // varTest();
  // letTest();
  
  // if(true) {
  //     var x = 'yes'
  // }
  
  // console.log(x)
  
  // if(true) {
  //     const x = 'no'
  // }
  
  // console.log(x)
  
//   function openNewAccount(name, openingBalance) {
//       let acctNum = generateAcctNum();
    
//       // createAccount is a function available outside this function
//       let acct = createAccount(acctNum, openingBalance);
//       return acct;
    
//       // helper function that provides a unique account number
//       function generateAcctNum() {
//         return Date.now();  // super amazing algorithm :)
//       }
//     }
  
    // openNewAccount('Teo', 1000000)

// function computeArea(width,height){
//      const area=width*height
//      return `The area of a rectangle with a width of ${width}and a height of ${height} is ${area} square units.`
// }
// console.log(computeArea(5,4))
// 
// function planetHasWater(planet) {
//     let status
   // if (planet.toUpperCase() === 'EARTH' || planet.toUpperCase() === 'MARS' ) {
//       status = true
//     }
//     else{ status = false}
//     return status
//   }
  
//   let output
//   //output = planetHasWater('earth')
//   console.log('earth',planetHasWater('earth'));
//  // output = planetHasWater('Earth')
//   console.log('Earth',planetHasWater('Earth'));
//   output = planetHasWater('EARTH')
//   console.log('EARTH',output);
//   output = planetHasWater('Mars')
//   console.log('Mars',output);
//   output = planetHasWater('MARS')
//   console.log('MARS',output);
//   output = planetHasWater('JARS')
//   console.log('JARS',output);

//

// function computeArea (width,height){
//     const area=height*width
//     return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
// }
//  console.log(computeArea(5,7))

//
function planetHasWater(planet){
    let result
    if(planet.toUpperCase() == 'EARTH'||planet.toUpperCase() == 'MARS')
    result= true
else {
    result =false
}
return result
}
console.log('earth',planetHasWater("earth"))
