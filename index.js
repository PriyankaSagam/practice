
// let x=7;
// console.log(x);


// // x+7=14;
// // 7+7=14;

// x=2;
// console.log(x);

// const y=9;
// console.log(y);
// let issnowing=true

// //simple if statements

// if(issnowing)

// {
//     console.log("bundle up");

// }
// else{
//     console.log("enjoy the summer");
// }

// example:2
// let score=70;
//  if(score>=70){
//         console.log("certified");
//     }
//     else{
//         console.log("failed");
//          }

// // example:3

// //     let grade=90;
// //     if(grade>=90){
// //         console.log("A");
// //     }
// //         else if(grade>=80){
// //             console.log("B");
// //         }
// //     else if(grade>=70){
// //         console.log("C");
// //     }

//     // Example#4

//     let age=18
//     if (age<=18){
//         console.log("not qualified");
//     }
//         else if(age>18 && age<25){
//             console.log("party time till 8pm");
//         }
//         else if(age<25){
//         console.log("no tome limit");
//      }

//     //  example:5
    
//     let number=-34
//     if(number>0){
//         console.log("positive", number);
//     }
//     else if(number < 0){
//         console.log("negative", number);
//     }   

//     // Example#

//     let weather=70
//     if(weather>=90){
//         console.log("its hot");
//     }
//     else if(weather>=80){
//         console.log("its warm");
//     }
//     else if(weather>=70){
//         console.log("its little cold");
//     }
//     else if(weather>=60){
//         console.log("its cold");
//     }
//     else if(weather>=50){
//         console.log("its too cold");
//     }
//     else if(weather<=50){
//         console.log("its snowing");
//     }

// // loops- a sequence of instructions that are reapeted for enter a certain number of times or until a condition is met
// // for loop example

// for (let i=0;i<10;i++)
// {
//     console.log(i);
// }
// // let i=0(defining the variable)
// // i<10(loop until i=10)
// // i++(increment the loop value)
// for (let i=10;i>=1;i--){
//     console.log(i);
// }
// for(let i=5;i<=20;i+=5){
//     console.log(i);
// }

// // Array Practice
// // array is just a list of items or objects
// // array synta
// // 1)class/constructor
// let character =new Array("battle axe","gold","water");
// // 2)literal syntax
// let Age = ["2","25","13","74"];
// console.log(Age);
// // use [] when creating an array list of items
// // each iem in an array is given an index/list number
// // [2,25,13,74]
// // 0,1,2,3-index 0r list position
// console.log(Age[3]);
// // #example
// let Movies=["starwars","elementals","frozen"];
// console.log(Movies);
// // example
// let fruit=["banana","stawberry","peach","oarnge","apple"];
// console.log(fruit);
// for(let i=0;i<fruit.length;i++)
// console.log(fruit[i]);
// // example:1

// let grade = 75;
// if(grade>=80) {
// console.log("you did a good job");
// }
//  else if(grade>=70){
//     console.log("keep trying");
// }
//  else if(grade>-60){
//     console.log("ehhh");
// }
//  else if(grade>=55){
//     console.log("not too good");
// }
//  else if(grade<55){
// console.log("you'll get em next time");
// }

// // example:

// for(let i=10;i<=90;i+=20){
//     console.log(i);
// }
// for(let i=20;i<=100;i+=20){
//     console.log(i);
// }
// example
// let num=312
// if(num>100){
//     console.log("positive and greater than 100");
// }
// else if( num>0 && num<100){
//     console.log("positive and less than 100");
// }
// else if(num<0){
//     console.log("negative");
// }

// // example
// for(let i=0;i<4;i++){
//     console.log("even number");
// }
// // // example
// for(let i=10;i>=1;i--){
//     console.log(i);
// }
// // // example
// for (let i=0;i<=10;i+=1){
//     console.log(i);
//  }
// // 
// for(let i=5;i<=20;i+=5){
//         console.log(i);
//     }
//     // 
//  for(let i=2;i<20;i+=2) {
//     console.log(i);
//  } 

//example:output=>1,3,5,7,9 2,4,6,8,10
// for(let i=1;i<=10;i+=2){
//     console.log(i);
// }
//     for(let i= 2;i<=10;i+=2){
//      console.log(i);
//     }
    
//example:create a loop that outputs multiples of 3 starting at 6 ending at 60.

// for(let i=6;i<=60;i+=3){
//     console.log(i);
// }


///output => have a fantastic day!
// have a wonderful day!
// have a great day!

// const synonyms = ['fantastic', 'wonderful', 'great'];
// const greetings = synonyms[0];{
// console.log('have a', greetings, 'day!');
// }
//  console.log('have a', synonyms[1], 'day!');
//  console.log('have a', synonyms[2], 'day!');t


///output => My name is Jon Snow and I am from The Wall
// My name is Arya Stark and i am from Winterfell
// My name is Jamie Lannister and i am from Kings Landing       

// const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];
// console.log('My name is',firstNames[0],lastNames[0],'and I am from',places[0]);
// console.log('My name is',firstNames[1],lastNames[1],'and i am from',places[1]);
// console.log('My name is',firstNames[2],lastNames[2],'and i am from',places[2]);

///output => [3,4,5,6,7]

// const increaseByTwo = [1, 2, 3, 4, 5];
// // ADD CODE HERE
// for(let i=0;i<increaseByTwo.length;i++){
//   increaseByTwo[i]+=2
// }
//   console.log(increaseByTwo);

//example:
// let y=''
// for(let i=0;i<7;i++)
// {
//     y=y+'#'
//     console.log(y);
// }

// example:
// let text = '';
// let i = 0;
// while (i<10){
//     text += 'the number is' + i + ' ';
//     i++;
// }
// console.log(text);

//example:count =2

// let i=0;
// while(i<8){
//     i=i+2;
//     console.log(i);
// }  
// let addThis=0;
// sum=0;
// while(addThis<9){
//       addThis+=1;
//       console.log(addThis);
//       }

//example:
//addThis should equal 10
//sum should equal 45

// let addThis=0;
// let sum=addThis=5
// while(addThis<10){
//       addThis+=1;
//       console.log(addThis);
//       sum=sum+addThis;
//       console.log(sum);
//       }






