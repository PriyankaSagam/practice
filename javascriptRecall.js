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

// //example1:

// let animal;
// animal = "cow";
// console.log(animal ,"= moooo" );
// let animal2 =  "cat";
// console.log(animal2 , "= Hey! you are not a cow");

// //example2:

// // let age=17;
// // if(age>=16){
// //     console.log("here are keys!");
// // }
// // else if(age<16){
// //     console.log("sorry, you're too young");
// // }

// // //example:3

// // for(let i=0;i<11;i++){
// //     console.log(i);
// // }

// // //example:4

// // for(let i=10;i<401;i++){
// //     console.log(i);
// // }

// // //example:5
// // for(let i=12;i<4000 ;i+=3){
// //     console.log(i);
// //}

// //example:6

// // for(let i=0;i<=100;i++){
// //     if(i%2==0){
// //         console.log(i ,"<--even number");
// //     }
// //     else if(i%2==1){
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
// //          console.log('i found a', i,' high five');
// // }
// //      for(let i=0;i<=30;i+=3){
// //         console.log('i found a', i,'three is a crowd');
// //      }
    
// //second way 


// // for(let i=0;i<=30;i++){
// //     if(i%3==0){
// //     console.log('i found a', i, 'three is a crowd');
// //     }
// //     else if(i%5==0){
// //     console.log('i found a', i,'high five');
// // }
// // }


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
// for(let i=1;i<=10;i++){
//     bank_account = bank_account+i;
//     console.log(bank_account,i);
// }
// //console.log(bank_account);
// bank_account = 0;
// for(let i=1;i<=100;i++){
//     bank_account=bank_account+i;
//     console.log(bank_account,i);
// }
// console.log("bonus pay is: ", bank_account*2);