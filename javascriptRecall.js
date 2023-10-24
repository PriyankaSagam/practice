// // /*
// // we create the variables using let,const,var
// // 1. how do we assign a value to a variable?
// // use the single = with the variable name and the new value
// // (variable= value)

// // 2.how do we change the value of a variable?
// // the same way,use the =
// // (variable=newvalue)

// // 3.for a variable ,what is difference between:

// // declare-let x
// // assign-this is what we did it in question 1
// // define-let x = 5

// // */


// // // let number = 5;
// // // console.log('this is a number');
// // // console.log(number);
// // // number=7;
// // // console.log('this is the new number');
// // // console.log(number);

// // // const number=10;
// // // console.log('this is the new number');
// // // console.log(number);
// // //you cannot change a variable that is string,number,or boolean if you initialize it
// // // newnumber=12;
// // // console.log('this is the same new number');
// // // console.log(number);



// // //what are the types of variable in java script

// // //boolean,string,number
// // //array,object


// // /* strings
// // */
// // //create a variable
// // let firstVariable;
// // //assign it the value of the string "hello world"
// // firstVariable = 'hello World';
// // //let firstVariable = 'hello world';
// // console.log('firstVariable is');
// // console.log(firstVariable);
// // console.log('firstVariable is:', firstVariable);

// // //change the value of firstVariable to some number
// // firstVariable = 17;
// // console.log('firstVariable is:', firstVariable);

// // //store the value of firstVariable in a new variable called second variable
// // let secondVariable = firstVariable;
// // console.log('after secondVariable');
// // console.log('firstVariable is:',firstVariable);
// // console.log('secondVariable is:',secondVariable);
// // //change the value of a second variable to any string

// // secondVariable ='anystring';
// // console.log('firstVariable is:',firstVariable);
// // console.log('secondVariable is:',secondVariable);

// // //What is the value of firstVariable?


// // //Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

// // //so that it reeturns a new string with them concatenated.
// // //ex: Hello, my name is Jean Valjean

// // let yourName = 'priyanka';
// // //you can concatenate a string in two ways
// // //using the consoley.log so that we can see the concatenation,but you don't need that concatenation
// // console.log('hello my name is:',yourName);
// // console.log('hello my name is:' + yourName);

// /*
// //booleans
// */

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// //you could also use (a<b)
// const e = 'kevin';
// console.log(a !== b);
// console.log( c>d);
// console.log('name'==="name");

// //for the next two,use only && or ||
// //for || (or) ,if any one thing is true,the whole thing is true
// console.log( true || false);
// //console.log(false&&true);
// console.log(false ||false ||  false|| false || false|| true);
// console.log(false==false);
// console.log(e === 'kevin');

// //a=4,b=53,c=57
// // is 4=-(53-57)

// console.log(a === -(b-c)); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a !== a - d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

// //example1:The Farm
//declare a variable animal
// let animal;
// animal = "cow";
// console.log(animal ,"= moooo" );
// let animal2 =  "cat";
// console.log(animal2 , "= Hey! you are not a cow");

//other way:

// let animal='cow';
// if(animal==='cow'){
//     console.log('moo');
// }
// else {
//     console.log('hey you are not a cow.');
// }

// //example2:E.driver's Ed



// // let age=17;
// // if(age>=16){
// //     console.log("here are keys!");
// // }
// // else if(age>0){
// //     console.log("sorry, you're too young");
// // }
////else{
   // // console.log('thats not a real age');
// //}


////for loops:

// // //example:3
//write aloop that will print all the numbers from 0 to 10,

// // for(let i=0;i<=10;i++){
// //     console.log(i);
// // }

// // //example:4

///write aloop that will print all the numbers from 0 to 400,

// // for(let i=10;i<=400;i++){
// //     console.log(i);
// // }

// // //example:5

///write aloop that will print out evry third number starting with the 12 and going no higher than 4000,

//i+=3 is the same as i=i+3

// // for(let i=12;i<4000 ;i+=3){
// //     console.log(i);
// //}

//for(let i=400; i>3;i-=3){
 //   console.log(i)
//}

// //example:6
//print out the numbers that are within the range of 1-100
//adjust your code to add a message next to even only that says:'<--is an even number'

// // for(let i=0;i<=100;i++){
// //     if(i%2===0){
// //         console.log(i ,"<--even number");
// //     }
// //     else (i%2==1){
// //         console.log(i,"<--odd number");
// //     }
// // }

// //example:7

// // for(let i=0;i<=100;i+=5){
// //     console.log('i found a', i,' high five');
// // }

// //example:8 

// //one way

// // for(let i=0;i<=30;i+=5){
// //          console.log('i found a', i,' . high five');
// // }
// //      for(let i=0;i<=30;i+=3){
// //         console.log('i found a', i,'three is a crowd');
// //      }
    
// //second way 


//  for(let i=0;i<=30;i++){
//     if(i%5===0 && i%3===0){
//         console.log('i found a', i,'. high five  three is a crowd')
//     }
//      if(i%3==0){
//      console.log('i found a', i, 'three is a crowd');
//      }
//     else if(i%5===0){
//     console.log('i found a', i,'. high five');
//  }
//  }


// let movies = ['a','b','c'];
// let firstmovie = movies[0];{
//     console.log(firstmovie);
// }
//  movies.push =['d'];{
// console.log(movies);
// }
// movies.unshift = ['e'];{
// console.log(movies);
// }

// //

// let cars=['bmw','honda','acura','toyota']
// {console.log(cars);
// }
//  let car= cars[2];
// {
//     console.log(car);
// }

// //example:
// let bank_account= 0;
// console.log('before the for loop:',bank_account);
//  for(let i=1;i<=10;i++){
//      bank_account = bank_account+i;
//      console.log('in the for loop,and i is:',i);
//      console.log('bank_account is:',bank_account);
//  }
// console.log(bank_account);
//  bank_account = 0;
// for(let i=1;i<=100;i++){
//      bank_account=bank_account+i;
//      console.log(bank_account,i);
// }
//  console.log("bonus pay is: ", bank_account*2);


// //example arrays

// let quotes = ['i like dolphines','i like jellyfish','i like wolves']
// {
//     console.log(quotes);
// }

// //example

// const randomthings = ['1','10','hello','true']
// {
//     console.log(randomthings);
// }
// let randomthing =randomthings [0];
// {
//     console.log(randomthing);
// }
// const random ='hello' ;
// randomthings[random]='world';
// {
//     console.log(randomthings);
// }

// //example:

// const ourClass = ['salty','zoom','sardine','slack','github'];
// {
//     console.log(ourClass);
// }
// let c = (ourClass[2]);{
//     console.log(c);
// }
// const x = 'github';
// ourClass [x] = 'octocat';
// {console.log(ourClass);
// }
//  ourClass.push('cloud city');{
//     console.log(ourClass);
// }

//example:

// const myArray = [5,10,500,20];{
//     console.log(myArray);
// }
// myArray.push = 'aegon';{
//     console.log(myArray);
// }


///Arrays & control flow

//Create an array that contains three quotes and store it in a variable called quotes

// const quotes =['life is beautiful','live,laugh,love','the best is yet to come']
// console.log(quotes);

// //Given the following array 
// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings);

// //How do you access the 1st element in the array?
// console.log(randomThings[0]);
// //Change the value of "Hello"to "World"

//  randomThings[2]=' world' ;
//  console.log(randomThings);
//================
//change values:
//=================
// //Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// //What would you write to access the 3rd element of the array?
// // ourclass[2]='sardines';
// console.log(ourClass[2]);
// //Change the value of "Github" to "Octocat"
// ourClass[4]='octocat';
// console.log(ourClass);
// //Add a new element, "Cloud City" to the array
// ourClass[5]='cloud city';
// console.log(ourClass);
// ourClass.push('george');
// console.log(ourClass);

// //this is property
// //length
// console.log(ourClass.length);


//===================================


// Mix It Up

//======================================

// //Given the following array: 
// const myArray = [5, 10, 500, 20]
// //Add the string "Aegon"to the end of the array.
// //use push
// myArray.push('Aegon');
// // Add another string of your choice to the end of the array.
// myArray.push('hello');
// // Remove the 5from the beginning of the array.
// myArray.shift();
// //shift removes the first element
// console.log(myArray);
// Add the string "Bob Marley"to the beginning of the array.
// //unshift adds to the beginning
// myArray.unshift('Bob Marley');
// console.log(myArray);
// // Remove the string of your choice from the end of the array.
// //pop removes the string  at the end
// myArray.pop();
// console.log(myArray);
// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// const reverseArray = myArray.reverse();
// console.log('original-Array');
// console.log(myArray);
//  console.log('reversed-Array');
//  console.log(reverseArray);
// myArray.reverse();
// console.log(myArray);

//=============================

//Biggie Smalls

//===============================

// let number = 36;
// if(number<100){
//     console.log('little number');
// }
// else{
//     console.log('big number');
// }

//=========================
//G. Monkey in the Middle
//======================

//console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// let number = 7;
//  if(number<5){
//      console.log('little number');
//  }
// else if(number>10){
//    console.log('big number');
// }
// else{
//     console.log('monkey');
// }

//=====================

//H. What's in Your Closet?

//========================

//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
// //   console.log(kristynsCloset);
// //   // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//  ];
//   console.log(thomsCloset);

///What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

//   console.log('kristyn is wearing today:',kristynsCloset[2],'today!');

///Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

//   kristynsCloset.splice(6,0,'rayban');
//     console.log(kristynsCloset);

///Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

//     kristynsCloset[5]='stained knit hat';
//     console.log(kristynsCloset);

///Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

//     console.log(thomsCloset[0][0]);

///In the same way, access one item from Thom's pants array.

//     console.log(thomsCloset[1][0]);

///Access one item from Thom's accessories array.

//     console.log(thomsCloset[2][1]);

///Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

//   console.log('thom is looking fierce in',thomsCloset[0][1],thomsCloset[1][1],thomsCloset[2][1]+'!');

///Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas

//   thomsCloset[2][1]='Footie pajamas'

//   console.log(thomsCloset);


///=========================

///FUNCTIONS

///============================
// function vowel(name){
//     if( name==='a' || name ==='e' ||name==='i '||name ==='o'||name==='u')
//     return true;

// else  
//     return false;
// }

// console.log('checking a');
// console.log(vowel('a'));


// //example:2
// function getTwoLengths(x,y){
//     return[x.length,y.length];
// }
// console.log(getTwoLengths('priyanka','anika'))

// //example:3

// function getMultipleLengths(x)
//     {
//         const arr=[];
//         for(i=0;i<x.lengh;i++){
//             arr.push(x[i].length);
//         }
//         return arr;

//     }
//     console.log(getMultipleLengths(['hello','we','sing','vibe']));


// function maxOfArray(array) {
//     return Math.max.apply(Math, array);
//   }
//   let array = [1,2,3,4,5,6];
//   console.log(maxOfArray(array));

//=================

//OBJECTS

//==================
//make a user object
//===================

//Create an object called user.
//Write in to the object the key-value pairs 
//for name, email, age, and purchased. Set the 
//value of purchasedto an empty array []. 
//Set the other values to whatever you would like.
// const user ={
//     name:'priyanka',
//     email:'email@something.com',
//     age:36,
//     purchased:[]
// }
// console.log(user);
// console.log(user.name);

// //Our user has changed his or her email address.
// // Without changing the original userobject,//
// // update the emailvalue to a new email address.
// //Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
// //in a string called email,if i want to update it,
// //email=newValue
// //this is similar,but you need to refer to the user

// user.email='newEmail@something.com';
// //console.log(user);
// //user.age=user.age+1;
// user.age++;
// //console.log(user);
// //C. Adding keys and values
// //You have decided to add your user's location to the data that you want to collect.

// //Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
// user.location='class';
// //console.log(user);
// user.newName='anika';
// //console.log(user);

// //D. Shopaholic!
// //Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// console.log(user.purchased);
// user.purchased.push('carbohydrates');
// console.log(user.purchased);
//  user.purchased.push('peace of mind');
//  user.purchased.push('merino jodhpurs');
// console.log(user.purchased);
//  console.log(user.purchased[2]);
//Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
//Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// //Console.log just the "Merino jodhpurs" from the purchasedarray.
// user.friend={
//     name:'venu',
//     age:40,
//     location:'columbus',
//     purchased:[]
// }
// //console.log(user);
// //console.log(user.friend.name);
// user.friend.age=55;
// //console.log(user.friend.age);
// //console.log(user);
// user.friend.purchased.push('the one ring','A latte');
// //console.log(user.friend.purchased[1]);

// //============
// //FOR LLOPS
// //============
// let arrLength=user.purchased.length;
// for(i=0;i<arrLength;i++){
//     console.log(user.purchased[i]);
// }
// //console.log('********');
//  arrLength=user.friend.purchased.length;
// for(let i=0;i<arrLength;i++){
//     //console.log(user.friend.purchased[i]);
// }

// function updateUser(){
//     console.log('***************')
//     console.log(user);
//     user.age++;
//     user.name.toUpperCase();
//     console.log(user.name);
// }
// //updateUser();
// //console.log('this is the user after the function')
// //console.log(user);
// function oldAndLoud(person){
//     person.age++;
//     person.name.toUpperCase();
// }
// console.log()

const cat1 = {
    name:'mamacat',
    breed:'spings',
    age:2
}
//console.log(cat1.age);
//console.log(cat1.breed);
const cat2 ={
    name:'papacat',
    breed:'pursian',
    age:1

}
//console.log(cat2);
function combineCats(mama,papa){
    console.log(mama,papa);
}
console.log(cat1,cat2);